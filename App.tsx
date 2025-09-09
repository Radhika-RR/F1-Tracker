
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RacePredictorPage } from './pages/RacePredictorPage';
import { PitStopPredictorPage } from './pages/PitStopPredictorPage';
import { SentimentAnalyzerPage } from './pages/SentimentAnalyzerPage';
import { NewsPage } from './pages/NewsPage';
import { TeamsPage } from './pages/TeamsPage';
import { DriverDetailPage } from './pages/DriverDetailPage';
import { SchedulePage } from './pages/SchedulePage';
import { RaceResultsPage } from './pages/RaceResultsPage';
import { DriverStandingsPage } from './pages/DriverStandingsPage';
import { MenuIcon, XIcon } from './components/icons/Icons';
import { NAV_LINKS, HEADER_LINKS, DRIVERS_2025_ROSTER, RESULTS_DROPDOWN_LINKS } from './constants';
import type { NavLinkItem } from './types';
import { Footer } from './components/Footer';
import { PlaceholderPage } from './components/common/PlaceholderPage';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md text-sm font-bold transition-colors ${
            isActive ? 'bg-f1-red text-white' : 'text-gray-300 hover:bg-f1-dark hover:text-white'
        }`;
    
    const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
      `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 text-lg ${
        isActive ? 'bg-f1-red text-white' : 'hover:bg-f1-dark'
      }`;


    const renderDesktopLinks = (links: NavLinkItem[]) =>
        links.map(link => (
            <NavLink key={link.path} to={link.path} className={navLinkClasses}>
                {link.name}
            </NavLink>
        ));

    const renderMobileLinks = (links: NavLinkItem[]) =>
        links.map(link => (
            <NavLink key={link.path} to={link.path} className={mobileNavLinkClasses} onClick={() => setMobileMenuOpen(false)}>
                {link.icon}
                <span>{link.name}</span>
            </NavLink>
        ));
    
    return (
        <>
            <header className="bg-f1-light-dark sticky top-0 z-30 border-b border-gray-700/50">
                <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="text-2xl font-extrabold text-white tracking-widest flex-shrink-0">
                                <span className="text-f1-red">F1</span> HUB
                            </Link>
                            <div className="hidden md:block ml-10">
                                <div className="flex items-baseline space-x-4">
                                    {HEADER_LINKS.map(link => {
                                        if (link.name === 'Drivers') {
                                            return (
                                                <div key={link.path} className="relative group">
                                                    <NavLink to={link.path} className={navLinkClasses} onClick={(e) => e.preventDefault()}>
                                                        {link.name}
                                                    </NavLink>
                                                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block z-[100]">
                                                        <div className="bg-f1-light-dark rounded-lg shadow-2xl border border-gray-700 w-96 p-4 max-h-[70vh] overflow-y-auto">
                                                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                                                {DRIVERS_2025_ROSTER.map(driver => (
                                                                    <Link to={`/drivers/${driver.id}`} key={driver.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-f1-dark transition-colors duration-200 group">
                                                                        <img src={driver.photoUrl || `https://placehold.co/40x40/303038/ffffff?text=${driver.name.split(' ').map(n=>n[0]).join('')}`} alt={driver.name} className="w-10 h-10 rounded-full bg-gray-700 object-cover border-2 border-gray-600 transition-colors group-hover:border-f1-red" />
                                                                        <div>
                                                                            <span className="text-sm font-bold text-white block">{driver.name}</span>
                                                                            <span className="text-xs text-gray-400 block">{driver.team}</span>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        if (link.name === 'Results') {
                                          return (
                                            <div key={link.path} className="relative group">
                                              <NavLink to={link.path} className={navLinkClasses} onClick={(e) => e.preventDefault()}>
                                                {link.name}
                                              </NavLink>
                                              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block z-[100]">
                                                <div className="bg-f1-light-dark rounded-lg shadow-2xl border border-gray-700 w-64 p-2">
                                                  <div className="flex flex-col space-y-1">
                                                    {RESULTS_DROPDOWN_LINKS.map(subLink => (
                                                      <Link to={subLink.path} key={subLink.path} className="block px-4 py-2 text-sm text-white rounded-md hover:bg-f1-dark transition-colors">
                                                        {subLink.name}
                                                      </Link>
                                                    ))}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        }
                                        return <NavLink key={link.path} to={link.path} className={navLinkClasses}>{link.name}</NavLink>;
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-4">
                                {renderDesktopLinks(NAV_LINKS)}
                                <button className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-700 transition-colors">
                                    F1® Member
                                </button>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`fixed top-0 left-0 h-full w-72 bg-f1-light-dark p-4 space-y-4 z-50 transform transition-transform md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center border-b border-gray-600 pb-4 mb-4">
                    <div className="text-2xl font-extrabold text-white tracking-widest">
                        <span className="text-f1-red">F1</span> HUB
                    </div>
                    <button onClick={() => setMobileMenuOpen(false)}><XIcon /></button>
                </div>
                <nav className="flex flex-col space-y-2">
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-wider px-3 pt-2">Site Menu</p>
                    {HEADER_LINKS.map(link => <NavLink key={link.path} to={link.path} className={mobileNavLinkClasses} onClick={() => setMobileMenuOpen(false)}>{link.name}</NavLink>)}
                    <div className="!my-4 border-t border-gray-700"></div>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-wider px-3 pt-2">Analytics Tools</p>
                    {renderMobileLinks(NAV_LINKS)}
                </nav>
            </div>
        </>
    );
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-f1-dark font-sans text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/race-predictor" element={<RacePredictorPage />} />
              <Route path="/pit-stop-predictor" element={<PitStopPredictorPage />} />
              <Route path="/sentiment-analyzer" element={<SentimentAnalyzerPage />} />
              
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/results" element={<RaceResultsPage />} />
              <Route path="/results/driver-standing" element={<DriverStandingsPage />} />
              <Route path="/results/team-standing" element={<PlaceholderPage title="Team Standings" />} />
              <Route path="/results/f1-award" element={<PlaceholderPage title="F1 Awards" />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/drivers/:driverId" element={<DriverDetailPage />} />
              <Route path="/teams" element={<TeamsPage />} />
              <Route path="/fantasy" element={<PlaceholderPage title="F1 Fantasy" />} />
              <Route path="/gaming" element={<PlaceholderPage title="F1 Gaming" />} />
              
              {/* Fallback for /drivers to avoid empty page */}
              <Route path="/drivers" element={<PlaceholderPage title="F1 Drivers" />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
