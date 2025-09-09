
import React from 'react';
import { TEAMS_DATA } from '../constants';
import type { Team } from '../types';

const TeamCard: React.FC<{ team: Team }> = ({ team }) => {
  const cardStyle = {
    // A complex gradient to give depth and match the reference feel
    background: `radial-gradient(circle at 50% -20%, ${team.color}20, transparent 50%), linear-gradient(180deg, #282830 0%, #15151e 100%)`,
    '--team-color': team.color,
  };

  const logoInitials = team.name
    .split(' ')
    .map(s => s[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      style={cardStyle}
      className="group relative flex h-[260px] flex-col overflow-hidden rounded-2xl border border-gray-800/50 p-5 transition-all duration-300 hover:border-[var(--team-color)]/50 hover:shadow-2xl hover:shadow-[var(--team-color)]/15"
    >
      {/* Header: Prominent logo and text */}
      <div className="z-10 flex items-center space-x-4">
        {team.logoUrl ? (
          <img
            src={team.logoUrl}
            alt={`${team.name} Logo`}
            className="h-12 w-12 rounded-full bg-black/20 object-contain p-1.5"
          />
        ) : (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gray-700/50 bg-black/30">
            <span className="text-base font-bold tracking-tighter text-white">
              {logoInitials}
            </span>
          </div>
        )}
        <h2 className="text-2xl font-black tracking-wide text-white">{team.name}</h2>
      </div>

      {/* Car Image Container: Positioned absolutely to interact with the gradient */}
      <div className="absolute inset-0 top-1/4 flex items-center justify-center">
        {team.carUrl ? (
          <img
            src={team.carUrl}
            alt={`${team.name} Car`}
            className="absolute bottom-0 w-[120%] max-w-[120%] drop-shadow-2xl object-contain transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="select-none text-4xl font-black tracking-[.2em] text-white/10">
              {team.name.split(' ')[0].toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


export const TeamsPage: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold border-l-4 border-f1-red pl-4">F1® Teams 2025</h1>
        <p className="mt-2 text-gray-400 pl-5">Discover the constructors competing in this year's championship.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {TEAMS_DATA.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};
