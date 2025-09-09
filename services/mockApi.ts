
import type { RacePredictionParams, PitStopPredictionParams, SentimentData } from '../types';

const MOCK_DELAY = 1500; // ms

export const predictRaceOutcome = async (params: RacePredictionParams): Promise<{ probability: number }> => {
  console.log('Fetching race outcome prediction with params:', params);
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
  // Simulate a probability based on qualifying position and driver
  let baseProb = 0.3;
  if (params.qualifyingPos <= 3) baseProb += 0.4;
  else if (params.qualifyingPos <= 10) baseProb += 0.2;
  
  if (['Max Verstappen', 'Lewis Hamilton'].includes(params.driver)) baseProb += 0.1;

  const probability = Math.min(0.95, baseProb + (Math.random() - 0.5) * 0.1);
  
  return { probability: Math.round(probability * 100) };
};

export const predictPitStopTime = async (params: PitStopPredictionParams): Promise<{ time: number }> => {
    console.log('Fetching pit stop time prediction with params:', params);
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    let baseTime = 2.5; // seconds
    if(params.weather === 'Wet') baseTime += 0.5;
    if(params.tyreCompound === 'Hard') baseTime += 0.1;
    baseTime -= (params.pitCrewRating / 100) * 0.5; // Higher rating = faster time

    const time = baseTime + (Math.random() - 0.5) * 0.3;

    return { time: parseFloat(time.toFixed(3)) };
};

export const getSentimentData = async (): Promise<SentimentData> => {
    console.log('Fetching sentiment data...');
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    
    return {
        distribution: [
            { name: 'Positive', value: 450 },
            { name: 'Neutral', value: 300 },
            { name: 'Negative', value: 250 },
        ],
        timeline: [
            { date: 'Lap 1', positive: 50, negative: 10, neutral: 20 },
            { date: 'Lap 15', positive: 120, negative: 30, neutral: 50 },
            { date: 'Lap 30', positive: 250, negative: 80, neutral: 100 },
            { date: 'Lap 45', positive: 380, negative: 150, neutral: 200 },
            { date: 'Finish', positive: 450, negative: 250, neutral: 300 },
        ],
        wordCloud: [
            { text: 'Verstappen', value: 64 },
            { text: 'Amazing', value: 45 },
            { text: 'Ferrari', value: 40 },
            { text: 'Strategy', value: 38 },
            { text: 'Crash', value: 32 },
            { text: 'Tyres', value: 30 },
            { text: 'Rain', value: 28 },
            { text: 'Norris', value: 25 },
            { text: 'DRS', value: 22 },
            { text: 'Overtake', value: 20 },
        ],
        samples: [
            { text: 'What an incredible final lap by Verstappen! Absolutely masterful drive.', sentiment: 'Positive' },
            { text: 'Another questionable strategy call from Ferrari, unbelievable.', sentiment: 'Negative' },
            { text: 'The race was okay, not the most exciting one this season.', sentiment: 'Neutral' },
            { text: 'The crash on turn 3 really changed the dynamic of the race.', sentiment: 'Negative' },
            { text: 'Lando Norris is showing some serious pace, great to see!', sentiment: 'Positive' },
        ]
    };
};
