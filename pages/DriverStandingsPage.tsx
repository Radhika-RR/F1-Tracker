
import React from 'react';
import { Card } from '../components/common/Card';
import { ITALIAN_GP_RESULTS_2025 } from '../constants';
import type { DriverStanding } from '../types';

export const DriverStandingsPage: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-white">
                    FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2025 - RACE RESULT
                </h1>
                <p className="mt-2 text-lg text-gray-400">
                    05 - 07 Sep 2025 | Autodromo Nazionale Monza, Monza
                </p>
            </div>

            {/* Results Table */}
            <Card className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-f1-dark/50">
                            <tr>
                                <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm text-center">POS.</th>
                                <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm text-center">NO.</th>
                                <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm">DRIVER</th>
                                <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm">TEAM</th>
                                <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm text-center">LAPS</th>
                                <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm">TIME / RETIRED</th>
                                <th className="p-4 font-bold tracking-wider uppercase text-gray-400 text-sm text-right">PTS.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ITALIAN_GP_RESULTS_2025.map((result: DriverStanding, index: number) => (
                                <tr 
                                    key={index} 
                                    className={`border-t border-gray-700 hover:bg-f1-light-dark/50 transition-colors
                                        ${result.pos === '1' ? 'bg-yellow-500/10' : ''}
                                        ${result.time === 'DNF' || result.time === 'DNS' ? 'opacity-60' : ''}
                                    `}
                                >
                                    <td className="p-4 font-bold text-white text-center">{result.pos}</td>
                                    <td className="p-4 text-gray-300 text-center">{result.no}</td>
                                    <td className="p-4 font-semibold text-white">{result.driver}</td>
                                    <td className="p-4 text-gray-400">{result.team}</td>
                                    <td className="p-4 text-gray-300 text-center">{result.laps}</td>
                                    <td className="p-4 text-gray-300 font-mono">{result.time}</td>
                                    <td className="p-4 text-white text-right font-bold">{result.pts > 0 ? result.pts : ''}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Notes Section */}
            <div className="text-sm text-gray-400 italic px-4">
                <p>Note - Bearman received a 10-second time penalty for causing a collision. Antonelli received a five-second time penalty for driving erratically.</p>
            </div>
        </div>
    );
};
