
import React from 'react';
import { Carousel } from '../components/common/Carousel';
import { Card } from '../components/common/Card';
import { RACE_RESULTS_2025 } from '../constants';
import type { RaceResultSummary } from '../types';

const CarouselSlide: React.FC<{ bgColor: string, title: string, subtitle: string, mainText: string }> = ({ bgColor, title, subtitle, mainText }) => (
    <div className={`w-full h-full flex flex-col justify-center items-center text-white p-4 ${bgColor}`}>
      <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">{mainText}</h2>
      <p className="mt-2 text-lg md:text-xl font-bold opacity-90">{title}</p>
    </div>
);


export const RaceResultsPage: React.FC = () => {

    const resultsCarouselSlides = [
        <CarouselSlide bgColor="bg-blue-800" title="Max Verstappen" subtitle="Current Championship Leader" mainText="429 PTS" />,
        <CarouselSlide bgColor="bg-orange-600" title="McLaren" subtitle="Most Wins This Season" mainText="10 WINS" />,
        <CarouselSlide bgColor="bg-red-600" title="Charles Leclerc" subtitle="Most Pole Positions" mainText="7 POLES" />,
    ];

    return (
        <div className="space-y-12 animate-fade-in">
            <Carousel slides={resultsCarouselSlides} />

            <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold border-l-4 border-f1-red pl-4 mb-6">2025 RACE RESULTS</h1>
                <Card className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-f1-dark/50">
                                <tr>
                                    <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm">Grand Prix</th>
                                    <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm">Date</th>
                                    <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm">Winner</th>
                                    <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm">Team</th>
                                    <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm text-center">Laps</th>
                                    <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm text-right">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RACE_RESULTS_2025.map((race: RaceResultSummary, index: number) => (
                                    <tr key={index} className="border-t border-gray-700 hover:bg-f1-light-dark/50 transition-colors">
                                        <td className="p-4 font-bold text-white">{race.grandPrix}</td>
                                        <td className="p-4 text-gray-300">{race.date}</td>
                                        <td className="p-4 font-semibold text-white">{race.winner}</td>
                                        <td className="p-4 text-gray-400">{race.team}</td>
                                        <td className="p-4 text-gray-300 text-center">{race.laps}</td>
                                        <td className="p-4 text-gray-300 text-right font-mono">{race.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};
