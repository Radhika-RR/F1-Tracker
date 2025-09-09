
import React from 'react';
import { FULL_RACE_SCHEDULE_2025 } from '../constants';
import type { FullRaceSchedule, RaceResult } from '../types';

const RaceResultItem: React.FC<{ result: RaceResult }> = ({ result }) => (
    <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-3">
            <span className="font-bold text-gray-400 w-6">{result.position}</span>
            <span className="font-bold text-white">{result.driver}</span>
        </div>
        <span className="font-mono text-gray-300">{result.time}</span>
    </div>
);

const RaceCard: React.FC<{ race: FullRaceSchedule }> = ({ race }) => {
    const isNextRace = race.status === 'next';

    return (
        <div className={`bg-f1-light-dark rounded-lg overflow-hidden border ${isNextRace ? 'border-f1-red shadow-lg shadow-f1-red/10' : 'border-gray-800'}`}>
            <div className="p-4 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-full md:w-1/4 lg:w-1/5">
                    {race.round !== 'TESTING' && <p className="text-sm text-gray-400">ROUND {race.round}</p>}
                    <h3 className="text-xl font-extrabold text-white">{race.country}</h3>
                    <p className={`font-semibold ${isNextRace ? 'text-f1-red' : 'text-gray-300'}`}>{race.date}</p>
                    {isNextRace && (
                        <span className="mt-2 inline-block bg-f1-red text-white text-xs font-bold px-2 py-1 rounded">
                            NEXT RACE
                        </span>
                    )}
                </div>
                <div className="flex-grow">
                    <p className="font-bold text-white text-base leading-tight">{race.officialTitle}</p>
                </div>
                {race.results && (
                    <div className="w-full md:w-1/3 lg:w-1/4 space-y-1 bg-f1-dark/50 p-3 rounded-md border border-gray-700/50">
                        {race.results.map((res, index) => <RaceResultItem key={index} result={res} />)}
                    </div>
                )}
            </div>
        </div>
    );
};

const RaceNavigationCard: React.FC<{ race: FullRaceSchedule, label: string }> = ({ race, label }) => {
    const isNext = label === 'Next';
    return (
        <div className={`p-4 rounded-lg flex-1 ${isNext ? 'bg-f1-red' : 'bg-f1-light-dark'} border ${isNext ? 'border-f1-red' : 'border-gray-800'}`}>
            <p className="text-xs font-bold uppercase tracking-wider text-white/70">{label}</p>
            <p className="text-sm text-white/70">ROUND {race.round}</p>
            <h3 className="font-bold text-white text-lg">{race.country}</h3>
            <p className="text-sm font-semibold text-white">{race.date}</p>
        </div>
    );
}

export const SchedulePage: React.FC = () => {
    const nextRaceIndex = FULL_RACE_SCHEDULE_2025.findIndex(r => r.status === 'next');
    const previousRace = nextRaceIndex > 0 ? FULL_RACE_SCHEDULE_2025[nextRaceIndex - 1] : undefined;
    const nextRace = FULL_RACE_SCHEDULE_2025[nextRaceIndex];
    const upcomingRaces = FULL_RACE_SCHEDULE_2025.slice(nextRaceIndex + 1, nextRaceIndex + 3);

    return (
        <div className="animate-fade-in space-y-12">
            <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold border-l-4 border-f1-red pl-4">2025 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR</h1>
            </div>
            
            {/* Quick Navigation */}
            <div className="flex flex-col md:flex-row gap-4">
                {previousRace && <RaceNavigationCard race={previousRace} label="Previous" />}
                {nextRace && <RaceNavigationCard race={nextRace} label="Next" />}
                {upcomingRaces.map(race => <RaceNavigationCard key={race.round} race={race} label="Upcoming" />)}
            </div>
            
            {/* Full Schedule */}
            <div className="space-y-4">
                {FULL_RACE_SCHEDULE_2025.map((race) => (
                    <RaceCard key={race.round} race={race} />
                ))}
            </div>
        </div>
    );
};