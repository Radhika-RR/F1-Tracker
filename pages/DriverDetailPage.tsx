
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DRIVER_DETAILS_DATA } from '../constants';
import { Carousel } from '../components/common/Carousel';
import { Card } from '../components/common/Card';
import type { SeasonStats, CareerStats } from '../types';

const StatItem: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-700/50 last:border-b-0">
    <span className="text-gray-300 text-sm">{label}</span>
    <span className="font-bold text-white text-lg">{value}</span>
  </div>
);

const StatsCard: React.FC<{ title: string; stats: SeasonStats | CareerStats }> = ({ title, stats }) => (
  <Card>
    <h3 className="text-xl font-extrabold tracking-wider text-white pb-2 mb-4 border-b-2 border-f1-red">{title}</h3>
    <div className="space-y-1">
      {Object.entries(stats).map(([key, value]) => (
        <StatItem key={key} label={key.replace(/([A-Z])/g, ' $1').trim()} value={value} />
      ))}
    </div>
  </Card>
);

export const DriverDetailPage: React.FC = () => {
  const { driverId } = useParams<{ driverId: string }>();
  const navigate = useNavigate();
  const driver = driverId ? DRIVER_DETAILS_DATA[driverId] : undefined;
  
  // Navigate back to drivers list if driverId is invalid
  // or scroll to top on driver change
  useEffect(() => {
    if (!driver && driverId) {
      navigate('/drivers');
    } else {
        window.scrollTo(0, 0);
    }
  }, [driver, driverId, navigate]);

  if (!driver) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold">Driver Not Found</h1>
            <p className="mt-4 text-gray-400">Please select a driver from the menu.</p>
        </div>
      </div>
    );
  }

  const carouselSlides = driver.carouselImages.map((src, index) => (
    <div key={index} className="w-full h-full bg-f1-dark">
      <img src={src} alt={`${driver.name} - slide ${index + 1}`} className="w-full h-full object-cover"/>
    </div>
  ));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Driver Header */}
      <div className="flex items-end space-x-4 border-b-4 pb-4" style={{borderColor: driver.teamColor}}>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none">{driver.number}</h1>
        <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">{driver.name}</h2>
            <p className="text-xl md:text-2xl font-semibold" style={{color: driver.teamColor}}>{driver.team}</p>
        </div>
      </div>
      
      {/* Carousel */}
      <Carousel slides={carouselSlides} />
      
      {/* Statistics Section */}
      <div>
        <h2 className="text-3xl font-extrabold border-l-4 border-f1-red pl-4 mb-6">STATISTICS</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <StatsCard title="2025 SEASON" stats={driver.seasonStats} />
            <StatsCard title="CAREER STATS" stats={driver.careerStats} />
        </div>
      </div>
    </div>
  );
};