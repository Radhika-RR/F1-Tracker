
import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { GaugeChart } from '../components/GaugeChart';
import { RACE_FORM_OPTIONS } from '../constants';
import { predictRaceOutcome } from '../services/mockApi';
import type { RacePredictionParams } from '../types';

export const RacePredictorPage: React.FC = () => {
  const [params, setParams] = useState<RacePredictionParams>({
    track: RACE_FORM_OPTIONS.tracks[0],
    driver: RACE_FORM_OPTIONS.drivers[0],
    team: RACE_FORM_OPTIONS.teams[0],
    weather: RACE_FORM_OPTIONS.weather[0],
    qualifyingPos: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setParams(prev => ({ ...prev, [name]: name === 'qualifyingPos' ? parseInt(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    const response = await predictRaceOutcome(params);
    setResult(response.probability);
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <Card>
        <h1 className="text-3xl font-extrabold mb-1">Race Outcome Predictor</h1>
        <p className="text-gray-400 mb-6">Enter the details below to predict the podium finish probability.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select label="Track" name="track" value={params.track} onChange={handleChange}>
            {RACE_FORM_OPTIONS.tracks.map(o => <option key={o}>{o}</option>)}
          </Select>
          <Select label="Driver" name="driver" value={params.driver} onChange={handleChange}>
            {RACE_FORM_OPTIONS.drivers.map(o => <option key={o}>{o}</option>)}
          </Select>
          <Select label="Team" name="team" value={params.team} onChange={handleChange}>
            {RACE_FORM_OPTIONS.teams.map(o => <option key={o}>{o}</option>)}
          </Select>
          <Select label="Weather" name="weather" value={params.weather} onChange={handleChange}>
            {RACE_FORM_OPTIONS.weather.map(o => <option key={o}>{o}</option>)}
          </Select>
          <Input 
            label="Qualifying Position" 
            name="qualifyingPos" 
            type="number" 
            min="1" max="20"
            value={params.qualifyingPos} 
            onChange={handleChange} 
          />
          <Button type="submit" isLoading={isLoading}>Predict Outcome</Button>
        </form>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold mb-4 text-center">Prediction Result</h2>
        <div className="flex justify-center items-center min-h-[300px]">
          {isLoading ? (
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-f1-red border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-gray-300">Calculating probabilities...</p>
            </div>
          ) : result !== null ? (
            <div className="w-full animate-fade-in">
              <GaugeChart value={result} />
              <p className="text-center text-gray-300 mt-4">
                <strong>{params.driver}</strong> has a <strong>{result}%</strong> chance of finishing in the Top 3.
              </p>
            </div>
          ) : (
            <p className="text-gray-400">Results will be displayed here.</p>
          )}
        </div>
      </Card>
    </div>
  );
};
