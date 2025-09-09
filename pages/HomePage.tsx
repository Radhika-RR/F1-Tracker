import React, { useState, useEffect } from 'react';
import { Card } from '../components/common/Card';
import { Carousel } from '../components/common/Carousel';
import { Modal } from '../components/common/Modal';
import { DRIVERS_DATA, RACE_SCHEDULE_2025, UPCOMING_GP_SCHEDULE } from '../constants';

const CarouselSlide: React.FC<{ bgColor: string, title: string, subtitle: string }> = ({ bgColor, title, subtitle }) => (
    <div className={`w-full h-full flex flex-col justify-center items-center text-white p-4 ${bgColor}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-wide">{title}</h2>
      <p className="mt-2 text-lg md:text-xl text-center opacity-90">{subtitle}</p>
    </div>
);

export const HomePage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setModalOpen(true);
        sessionStorage.setItem('hasSeenWelcomeModal', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const carouselSlides = [
    <CarouselSlide bgColor="bg-f1-red" title="Welcome to the F1 Analytics Hub" subtitle="Your one-stop destination for F1 data." />,
    <CarouselSlide bgColor="bg-blue-800" title="Predict Race Outcomes" subtitle="Use our ML models to see who has the edge." />,
    <CarouselSlide bgColor="bg-teal-500" title="Analyze Pit Stop Times" subtitle="Find out how milliseconds are saved." />,
    <CarouselSlide bgColor="bg-orange-600" title="Gauge Fan Sentiment" subtitle="Discover the pulse of the F1 community." />,
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Welcome to the Hub!">
        <p className="text-gray-300">
          This is your central hub for Formula 1 analytics.
          <br /><br />
          Use our machine-learning powered tools to predict race outcomes, analyze pit stop strategies, and gauge fan sentiment in real-time.
          <br /><br />
          Explore the sections and dive deep into the data!
        </p>
        <button onClick={() => setModalOpen(false)} className="mt-6 w-full px-6 py-3 bg-f1-red text-white font-bold text-lg rounded-md hover:bg-red-700 transition-all duration-300">
            Start Analyzing
        </button>
      </Modal>

      <Carousel slides={carouselSlides} />
      
      {/* Drivers Section */}
      <div>
        <h2 className="text-3xl font-extrabold border-l-4 border-f1-red pl-4 mb-6">F1 Drivers 2025</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {DRIVERS_DATA.map(driver => (
            <Card key={driver.id} className="p-0 overflow-hidden text-center group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-4">
                <p className="text-gray-400 font-bold text-2xl">{driver.number}</p>
                <h3 className="font-bold text-lg truncate">{driver.name.split(' ')[0]}</h3>
                <h3 className="font-black text-xl uppercase -mt-1 truncate">{driver.name.split(' ').slice(1).join(' ')}</h3>
              </div>
              <div className={`h-2 ${driver.teamColor}`}></div>
            </Card>
          ))}
        </div>
      </div>

      {/* Schedule & Timetable Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold border-l-4 border-f1-red pl-4 mb-6">F1 2025 Race Calendar</h2>
            <Card className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-f1-dark">
                            <tr>
                                <th className="p-4 font-bold tracking-wider">Round</th>
                                <th className="p-4 font-bold tracking-wider">Grand Prix</th>
                                <th className="p-4 font-bold tracking-wider">Circuit</th>
                                <th className="p-4 font-bold tracking-wider text-right">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {RACE_SCHEDULE_2025.map((race, index) => (
                                <tr key={race.round} className={`border-t border-gray-700 ${index === 0 ? 'bg-white/10' : ''}`}>
                                    <td className="p-4 font-mono text-xl">{race.round.toString().padStart(2, '0')}</td>
                                    <td className="p-4 font-bold text-f1-red">{race.grandPrix}</td>
                                    <td className="p-4 text-gray-300">{race.circuit}</td>
                                    <td className="p-4 text-gray-300 text-right font-medium">{race.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>

        <div>
            <h2 className="text-3xl font-extrabold border-l-4 border-f1-red pl-4 mb-6">Next: Australia</h2>
            <Card>
                <div className="space-y-3">
                    {UPCOMING_GP_SCHEDULE.map(item => (
                        <div key={item.session} className="flex justify-between items-center p-3 bg-f1-dark rounded-md">
                            <div>
                                <p className="font-bold">{item.session}</p>
                                <p className="text-sm text-gray-400">{item.day}</p>
                            </div>
                            <p className="font-mono text-lg bg-f1-light-dark px-2 py-1 rounded">{item.time}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};
