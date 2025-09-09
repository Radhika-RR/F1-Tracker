import React from 'react';

const iconClass = "w-6 h-6";

export const MenuIcon: React.FC = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);

export const XIcon: React.FC = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

export const HomeIcon: React.FC = () => (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);

export const ChartBarIcon: React.FC = () => (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
);

export const ClockIcon: React.FC = () => (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const EmojiHappyIcon: React.FC = () => (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const ChevronLeftIcon: React.FC = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);

export const ChevronRightIcon: React.FC = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);

export const AppStoreIcon: React.FC = () => (
    <a href="#" className="flex items-center space-x-2 bg-black text-white px-3 py-1.5 rounded-lg border border-gray-600 hover:border-white transition-colors">
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 3.4C16.7 2.6 15.6 2 14.2 2 13 2 12.2 2.5 11.5 2.5c-.7 0-1.3-.5-2.4-.5C7.6 2 6.3 2.9 5.4 4.2c-1.3 2-1 5.1.7 6.8.8.7 1.7 1.2 2.8 1.2 1 0 1.6-.5 2.4-.5.8 0 1.3.5 2.4.5 1 0 1.9-.4 2.6-1.1-1-1.3-1.6-2.9-1.6-4.6.1-1.5.6-3 1.5-4.1zM13.7 1c.2-.9 1-1.4 1.8-1.2.9.2 1.4 1 1.2 1.8-.2.8-1 1.3-1.8 1.2-.8-.3-1.3-1-1.2-1.8z"/></svg>
      <div className="text-left">
        <p className="text-xs -mb-1">Download on the</p>
        <p className="text-lg font-semibold leading-tight">App Store</p>
      </div>
    </a>
);

export const GooglePlayIcon: React.FC = () => (
    <a href="#" className="flex items-center space-x-2 bg-black text-white px-3 py-1.5 rounded-lg border border-gray-600 hover:border-white transition-colors">
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M3 2v20l18-10L3 2z"/></svg>
      <div className="text-left">
        <p className="text-xs -mb-1">GET IT ON</p>
        <p className="text-lg font-semibold leading-tight">Google Play</p>
      </div>
    </a>
);

// Partner Logos (Simplified, monochrome SVGs)
export const LvmhLogo: React.FC = () => (
  <svg viewBox="0 0 100 30" fill="currentColor" className="h-8 w-auto">
    <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24">LVMH</text>
  </svg>
);

export const PirelliLogo: React.FC = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
    <path d="M 20,30 L 20,10 L 0,10 L 0,8 L 22,8 L 22,15 C 28,12 35,12 40,15 L 40,8 L 42,8 L 42,30 L 40,30 L 40,28 C 35,33 28,33 22,28 L 22,30 Z" />
    <text x="45" y="28" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28">IRELLI</text>
  </svg>
);

export const AramcoLogo: React.FC = () => (
  <svg viewBox="0 0 130 30" fill="currentColor" className="h-6 w-auto">
    <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="26" fontStyle="italic">aramco</text>
  </svg>
);

export const HeinekenLogo: React.FC = () => (
  <svg viewBox="0 0 140 40" fill="currentColor" className="h-10 w-auto">
    <text x="0" y="30" fontFamily="Impact, sans-serif" fontWeight="bold" fontSize="28">Heineken</text>
    <path fill="#e10600" d="M 120,5 L 123,15 L 133,15 L 125,22 L 128,32 L 120,25 L 112,32 L 115,22 L 107,15 L 117,15 Z" />
  </svg>
);

export const AwsLogo: React.FC = () => (
  <svg viewBox="0 0 80 50" fill="currentColor" className="h-10 w-auto">
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32">aws</text>
    <path stroke="currentColor" strokeWidth="3" fill="none" d="M 25,35 Q 40,50 55,35" strokeLinecap="round" />
  </svg>
);

export const LenovoLogo: React.FC = () => (
  <svg viewBox="0 0 120 30" fill="currentColor" className="h-7 w-auto">
    <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fontStyle="italic">lenovo</text>
  </svg>
);

export const DhlLogo: React.FC = () => (
    <svg viewBox="0 0 100 30" fill="currentColor" className="h-8 w-auto">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fontStyle="italic">DHL</text>
    </svg>
);


export const QatarAirwaysLogo: React.FC = () => (
  <svg viewBox="0 0 200 40" fill="currentColor" className="h-8 w-auto">
    <text x="0" y="15" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14">QATAR</text>
    <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="20">AIRWAYS</text>
    <path d="M 140,20 C 150,10 160,10 170,20 L 175,15 L 180,25 M 170,20 C 160,30 150,30 140,20 L 135,15 L 130,25" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const MscCruisesLogo: React.FC = () => (
    <svg viewBox="0 0 150 40" fill="currentColor" className="h-10 w-auto">
      <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32">MSC</text>
      <text x="80" y="28" fontFamily="Arial, sans-serif" fontSize="14">CRUISES</text>
      <circle cx="125" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M 125,10 L 125,40 M 110,25 L 140,25 M 114,14 L 136,36 M 114,36 L 136,14" stroke="currentColor" strokeWidth="1" />
    </svg>
);

export const CryptoComLogo: React.FC = () => (
  <svg viewBox="0 0 180 30" fill="currentColor" className="h-6 w-auto">
    <path d="M 5,5 L 15,0 L 25,5 L 25,15 L 15,25 L 5,15 Z M 15,5 L 15,12" stroke="currentColor" strokeWidth="2" />
    <text x="35" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20">CRYPTO.COM</text>
  </svg>
);

export const SalesforceLogo: React.FC = () => (
    <svg viewBox="0 0 50 35" fill="currentColor" className="h-10 w-auto">
        <path d="M 45,15 C 50,25 40,35 30,35 C 20,35 15,25 20,15 C 25,5 35,5 45,15 Z M 20,15 C 15,25 5,30 0,25 C 0,15 10,5 20,10 C 25,12 25,12 20,15 Z" />
    </svg>
);

// Secondary Partner Logos
export const LouisVuittonLogo: React.FC = () => (
  <svg viewBox="0 0 80 50" fill="currentColor" className="h-10 w-auto">
    <text x="0" y="35" fontFamily="serif" fontWeight="bold" fontSize="40">LV</text>
  </svg>
);

export const TagHeuerLogo: React.FC = () => (
  <svg viewBox="0 0 150 40" fill="currentColor" className="h-8 w-auto">
    <text x="0" y="30" fontFamily="sans-serif" fontWeight="bold" fontSize="28">TAG Heuer</text>
  </svg>
);

export const MoetHennessyLogo: React.FC = () => (
  <svg viewBox="0 0 200 30" fill="currentColor" className="h-6 w-auto">
    <text x="0" y="22" fontFamily="serif" fontSize="24">Moët Hennessy</text>
  </svg>
);

export const AmericanExpressLogo: React.FC = () => (
  <svg viewBox="0 0 120 30" fill="currentColor" className="h-7 w-auto">
    <rect x="0" y="0" width="120" height="30" fill="#006fcf" />
    <text x="60" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="white" textAnchor="middle">AMERICAN EXPRESS</text>
  </svg>
);

export const SantanderLogo: React.FC = () => (
  <svg viewBox="0 0 180 40" fill="currentColor" className="h-8 w-auto">
    <text x="45" y="30" fontFamily="sans-serif" fontWeight="bold" fontSize="28" fill="#ec0000">Santander</text>
    <path fill="#ec0000" d="M 20,5 C 30,0 35,10 35,15 C 35,25 25,25 20,20 C 15,25 5,25 5,15 C 5,10 10,0 20,5 Z" />
  </svg>
);

export const AllwynLogo: React.FC = () => (
  <svg viewBox="0 0 100 30" fill="currentColor" className="h-6 w-auto">
    <text x="0" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="26">allwyn</text>
  </svg>
);

export const GlobantLogo: React.FC = () => (
  <svg viewBox="0 0 130 30" fill="currentColor" className="h-7 w-auto">
    <text x="0" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="28">Globant<tspan fill="#00a99d">{'>'}</tspan></text>
  </svg>
);

export const LasVegasLogo: React.FC = () => (
  <svg viewBox="0 0 120 50" fill="currentColor" className="h-10 w-auto">
    <text x="0" y="20" fontFamily="serif" fontStyle="italic" fontWeight="bold" fontSize="24">Las</text>
    <text x="20" y="45" fontFamily="serif" fontWeight="bold" fontSize="36">Vegas</text>
  </svg>
);

export const ParamountPlusLogo: React.FC = () => (
  <svg viewBox="0 0 200 30" fill="currentColor" className="h-6 w-auto">
    <text x="0" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="26">Paramount+</text>
  </svg>
);

export const BarillaLogo: React.FC = () => (
  <svg viewBox="0 0 120 50" fill="currentColor" className="h-10 w-auto">
    <ellipse cx="60" cy="25" rx="60" ry="25" fill="#e21c21" />
    <text x="60" y="32" fontFamily="sans-serif" fontWeight="bold" fontSize="24" fill="white" textAnchor="middle">Barilla</text>
  </svg>
);

export const LiquiMolyLogo: React.FC = () => (
  <svg viewBox="0 0 150 40" fill="currentColor" className="h-8 w-auto">
    <text x="0" y="15" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#005a9d">LIQUI</text>
    <text x="0" y="38" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#e2000f">MOLY</text>
  </svg>
);

export const NestleLogo: React.FC = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
    <text x="0" y="30" fontFamily="sans-serif" fontSize="28">Nestlé</text>
    <path d="M 90,15 L 115,10 L 110,20 L 100,20 M 105,12 L 100,5" stroke="currentColor" fill="none" strokeWidth="1.5" />
  </svg>
);

export const PwcLogo: React.FC = () => (
  <svg viewBox="0 0 80 30" fill="currentColor" className="h-6 w-auto">
    <text x="0" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="26">pwc</text>
  </svg>
);

export const PepsiCoLogo: React.FC = () => (
  <svg viewBox="0 0 150 40" fill="currentColor" className="h-8 w-auto">
    <text x="45" y="30" fontFamily="sans-serif" fontWeight="bold" fontSize="28">PepsiCo</text>
    <circle cx="20" cy="20" r="20" fill="#e21c21"/>
    <path fill="#005a9d" d="M 0,20 a 20,20 0 0,1 40,0" />
    <circle cx="20" cy="20" r="16" fill="white"/>
  </svg>
);

export const PumaLogo: React.FC = () => (
  <svg viewBox="0 0 60 30" fill="currentColor" className="h-8 w-auto">
    <path d="M 5,20 C 10,10 20,10 25,15 C 30,10 40,5 55,5 C 50,15 45,20 40,20 C 35,25 25,25 20,20 Z" />
    <text x="0" y="28" fontFamily="sans-serif" fontWeight="bold" fontSize="18">PUMA</text>
  </svg>
);

export const TataCommunicationsLogo: React.FC = () => (
  <svg viewBox="0 0 220 30" fill="currentColor" className="h-6 w-auto">
    <text x="0" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="22">TATA COMMUNICATIONS</text>
  </svg>
);

export const AggrekoLogo: React.FC = () => (
  <svg viewBox="0 0 120 30" fill="currentColor" className="h-6 w-auto">
    <text x="0" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="26">aggreko</text>
  </svg>
);

export const BbsMotorsportLogo: React.FC = () => (
  <svg viewBox="0 0 180 30" fill="currentColor" className="h-6 w-auto">
    <text x="0" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="22">BBS Motorsport</text>
  </svg>
);

export const McDonaldsLogo: React.FC = () => (
  <svg viewBox="0 0 40 30" fill="#ffc72c" className="h-8 w-auto">
    <path d="M 0,30 A 20,20 0 0,1 20,10 A 20,20 0 0,1 40,30 H 30 A 10,10 0 0,0 20,20 A 10,10 0 0,0 10,30 Z" />
  </svg>
);
