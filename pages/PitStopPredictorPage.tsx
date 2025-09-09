
import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Select } from '../components/common/Select';
import { PIT_STOP_FORM_OPTIONS } from '../constants';
import { predictPitStopTime } from '../services/mockApi';
import type { PitStopPredictionParams } from '../types';

export const PitStopPredictorPage: React.FC = () => {
  const [params, setParams] = useState<PitStopPredictionParams>({
    trackType: PIT_STOP_FORM_OPTIONS.trackTypes[0],
    weather: PIT_STOP_FORM_OPTIONS.weather[0],
    tyreCompound: PIT_STOP_FORM_OPTIONS.tyreCompounds[0],
    pitCrewRating: 90,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams(prev => ({...prev, pitCrewRating: parseInt(e.target.value)}))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    const response = await predictPitStopTime(params);
    setResult(response.time);
    setIsLoading(false);
  };
  
  const StopwatchDisplay: React.FC<{ time: number }> = ({ time }) => {
    const [displayTime, setDisplayTime] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = time;
        if (start === end) return;
    
        const incrementTime = 0.01;
        const timer = setInterval(() => {
            start += 0.031; // A slightly odd number to make it feel more "analog"
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setDisplayTime(start);
        }, 10);
    
        return () => clearInterval(timer);
    }, [time]);
    
    const parts = displayTime.toFixed(3).split('.');
    return (
        <div className="font-mono text-7xl md:text-8xl font-extrabold text-white tracking-widest bg-black p-4 rounded-lg">
            <span>{parts[0]}</span>
            <span className="text-f1-red">.</span>
            <span>{parts[1]}</span>
        </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <Card>
        <h1 className="text-3xl font-extrabold mb-1">Pit Stop Time Predictor</h1>
        <p className="text-gray-400 mb-6">Configure pit stop variables to predict the time in seconds.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select label="Track Type" name="trackType" value={params.trackType} onChange={handleChange}>
            {PIT_STOP_FORM_OPTIONS.trackTypes.map(o => <option key={o}>{o}</option>)}
          </Select>
          <Select label="Weather" name="weather" value={params.weather} onChange={handleChange}>
            {PIT_STOP_FORM_OPTIONS.weather.map(o => <option key={o}>{o}</option>)}
          </Select>
          <Select label="Tyre Compound" name="tyreCompound" value={params.tyreCompound} onChange={handleChange}>
            {PIT_STOP_FORM_OPTIONS.tyreCompounds.map(o => <option key={o}>{o}</option>)}
          </Select>
          <div>
            <label htmlFor="pitCrewRating" className="block text-sm font-medium text-gray-300 mb-1">
                Pit Crew Rating: <span className="font-bold text-f1-red">{params.pitCrewRating} / 100</span>
            </label>
            <input
                id="pitCrewRating"
                type="range"
                min="70"
                max="100"
                name="pitCrewRating"
                value={params.pitCrewRating}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <Button type="submit" isLoading={isLoading}>Predict Time</Button>
        </form>
      </Card>
      
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-center">Predicted Pit Stop Time</h2>
        <div className="flex flex-col justify-center items-center min-h-[300px]">
            {isLoading ? (
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-f1-red border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-gray-300">Tuning the wheel guns...</p>
                </div>
            ) : result !== null ? (
                <div className="text-center animate-fade-in">
                    <StopwatchDisplay time={result} />
                    <p className="mt-4 text-lg text-gray-300">seconds</p>
                </div>
            ) : (
                <p className="text-gray-400">Results will be displayed here.</p>
            )}
        </div>
      </Card>
    </div>
  );
};
