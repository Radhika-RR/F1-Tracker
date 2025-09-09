import React from 'react';
import { PARTNERS_MAIN, PARTNERS_SECONDARY } from '../constants';
import { AppStoreIcon, GooglePlayIcon } from './icons/Icons';
import type { Partner } from '../types';

const MainPartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
  const LogoComponent = partner.logo;
  return (
    <div className="flex flex-col items-center justify-center h-24 text-white hover:text-gray-300 transition-colors space-y-2 group">
      <div className="h-10 flex items-center justify-center transition-transform group-hover:scale-105">
        <LogoComponent />
      </div>
      <span className="text-gray-400 font-bold text-center text-xs uppercase tracking-wider">{partner.name}</span>
    </div>
  );
};

const SecondaryPartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
  const LogoComponent = partner.logo;
  return (
    <div className="flex items-center justify-center h-16 text-white hover:text-gray-300 transition-colors group">
      <div className="h-8 flex items-center justify-center transition-transform group-hover:scale-105">
        <LogoComponent />
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      {/* Main Partners Section */}
      <div className="bg-f1-light-dark py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-wider text-white">OUR PARTNERS</h2>
            <a href="#" className="text-f1-red font-bold hover:underline">View all</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
            {PARTNERS_MAIN.map(partner => <MainPartnerLogo key={partner.name} partner={partner} />)}
          </div>
        </div>
      </div>

      {/* Secondary Partners Section */}
      <div className="bg-[#38383a] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-x-8 gap-y-6">
                {PARTNERS_SECONDARY.map(partner => <SecondaryPartnerLogo key={partner.name} partner={partner} />)}
            </div>
        </div>
      </div>
      
      {/* New Main Footer Section */}
      <div className="bg-f1-dark text-gray-300 py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {/* Download App Column */}
                <div className="col-span-2 lg:col-span-2">
                    <h3 className="text-lg font-bold text-white mb-4">Download the Official F1 App</h3>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <AppStoreIcon />
                        <GooglePlayIcon />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="col-span-1">
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-f1-red transition-colors font-semibold">Schedule</a></li>
                        <li><a href="#" className="hover:text-f1-red transition-colors font-semibold">Drivers</a></li>
                        <li><a href="#" className="hover:text-f1-red transition-colors font-semibold">News</a></li>
                        <li><a href="#" className="hover:text-f1-red transition-colors font-semibold">Teams</a></li>
                        <li><a href="#" className="hover:text-f1-red transition-colors font-semibold">Fantasy & Gaming</a></li>
                    </ul>
                </div>
                
                {/* More Links */}
                <div className="col-span-1">
                     <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">More</h3>
                     <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-f1-red transition-colors">F1® Experiences</a></li>
                        <li><a href="#" className="hover:text-f1-red transition-colors">F1® TV</a></li>
                        <li><a href="#" className="hover:text-f1-red transition-colors">F1® Authentics</a></li>
                        <li><a href="#" className="hover:text-f1-red transition-colors">Beyond The Grid</a></li>
                    </ul>
                </div>

                {/* Settings */}
                <div className="col-span-2 lg:col-span-2">
                    <div className="space-y-4">
                        <button className="text-left w-full hover:text-f1-red transition-colors font-semibold">Cookie Preferences</button>
                        <div>
                            <p className="text-sm text-gray-400">Display mode</p>
                            <div className="mt-2 flex items-center space-x-2">
                                <button className="px-4 py-2 bg-f1-light-dark rounded-md text-white font-semibold text-sm">Dark</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
                <p>© 2003-2025 Formula One World Championship Limited</p>
            </div>
        </div>
      </div>
    </footer>
  );
};
