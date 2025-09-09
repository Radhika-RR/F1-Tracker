import React from 'react';
import type { NavLinkItem, Driver, RaceSchedule, GpTimetable, Partner } from './types';
import { 
  HomeIcon, ChartBarIcon, ClockIcon, EmojiHappyIcon, 
  LvmhLogo, PirelliLogo, AramcoLogo, HeinekenLogo, AwsLogo, LenovoLogo, DhlLogo,
  QatarAirwaysLogo, MscCruisesLogo, CryptoComLogo, SalesforceLogo,
  LouisVuittonLogo, TagHeuerLogo, MoetHennessyLogo, AmericanExpressLogo, SantanderLogo, AllwynLogo, GlobantLogo,
  LasVegasLogo, ParamountPlusLogo, BarillaLogo, LiquiMolyLogo, NestleLogo, PwcLogo, PepsiCoLogo, PumaLogo, 
  TataCommunicationsLogo, AggrekoLogo, BbsMotorsportLogo, McDonaldsLogo
} from './components/icons/Icons';

export const NAV_LINKS: NavLinkItem[] = [
  // FIX: Replaced JSX syntax with React.createElement to resolve parsing errors.
  // The TypeScript compiler was misinterpreting the JSX in this .ts file as a type declaration.
  { path: '/', name: 'Home', icon: React.createElement(HomeIcon) },
  { path: '/race-predictor', name: 'Race Predictor', icon: React.createElement(ChartBarIcon) },
  { path: '/pit-stop-predictor', name: 'Pit Stop Predictor', icon: React.createElement(ClockIcon) },
  { path: '/sentiment-analyzer', name: 'Sentiment', icon: React.createElement(EmojiHappyIcon) },
];

export const HEADER_LINKS: NavLinkItem[] = [
  { path: '/schedule', name: 'Schedule' },
  { path: '/results', name: 'Results' },
  { path: '/news', name: 'News' },
  { path: '/drivers', name: 'Drivers' },
  { path: '/teams', name: 'Teams' },
  { path: '/fantasy', name: 'Fantasy' },
  { path: '/gaming', name: 'Gaming' },
];


export const RACE_FORM_OPTIONS = {
  tracks: ['Monaco', 'Silverstone', 'Monza', 'Spa-Francorchamps', 'Suzuka'],
  drivers: ['Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc', 'Lando Norris', 'Sergio Pérez'],
  teams: ['Red Bull Racing', 'Mercedes', 'Ferrari', 'McLaren', 'Aston Martin'],
  weather: ['Dry', 'Wet', 'Mixed'],
};

export const PIT_STOP_FORM_OPTIONS = {
    trackTypes: ['Street Circuit', 'Permanent Circuit', 'High-Speed Circuit'],
    weather: ['Dry', 'Wet', 'Damp'],
    tyreCompounds: ['Soft', 'Medium', 'Hard', 'Intermediate', 'Wet'],
};

export const DRIVERS_DATA: Driver[] = [
  { id: 'verstappen', name: 'Max Verstappen', team: 'Red Bull Racing', number: 1, teamColor: 'bg-blue-800' },
  { id: 'perez', name: 'Sergio Pérez', team: 'Red Bull Racing', number: 11, teamColor: 'bg-blue-800' },
  { id: 'hamilton', name: 'Lewis Hamilton', team: 'Mercedes', number: 44, teamColor: 'bg-teal-500' },
  { id: 'russell', name: 'George Russell', team: 'Mercedes', number: 63, teamColor: 'bg-teal-500' },
  { id: 'leclerc', name: 'Charles Leclerc', team: 'Ferrari', number: 16, teamColor: 'bg-red-600' },
  { id: 'sainz', name: 'Carlos Sainz', team: 'Ferrari', number: 55, teamColor: 'bg-red-600' },
  { id: 'norris', name: 'Lando Norris', team: 'McLaren', number: 4, teamColor: 'bg-orange-500' },
  { id: 'piastri', name: 'Oscar Piastri', team: 'McLaren', number: 81, teamColor: 'bg-orange-500' },
  { id: 'alonso', name: 'Fernando Alonso', team: 'Aston Martin', number: 14, teamColor: 'bg-green-800' },
  { id: 'stroll', name: 'Lance Stroll', team: 'Aston Martin', number: 18, teamColor: 'bg-green-800' },
];

export const RACE_SCHEDULE_2025: RaceSchedule[] = [
  { round: 1, grandPrix: 'Australia', circuit: 'Melbourne', date: '14-16 Mar' },
  { round: 2, grandPrix: 'China', circuit: 'Shanghai', date: '21-23 Mar' },
  { round: 3, grandPrix: 'Japan', circuit: 'Suzuka', date: '04-06 Apr' },
  { round: 4, grandPrix: 'Bahrain', circuit: 'Sakhir', date: '11-13 Apr' },
  { round: 5, grandPrix: 'Saudi Arabia', circuit: 'Jeddah', date: '18-20 Apr' },
  { round: 6, grandPrix: 'Miami', circuit: 'Miami', date: '02-04 May' },
  { round: 7, grandPrix: 'Emilia Romagna', circuit: 'Imola', date: '16-18 May' },
  { round: 8, grandPrix: 'Monaco', circuit: 'Monaco', date: '23-25 May' },
  { round: 9, grandPrix: 'Spain', circuit: 'Barcelona', date: '30 May - 01 Jun' },
  { round: 10, grandPrix: 'Canada', circuit: 'Montreal', date: '13-15 Jun' },
];

export const UPCOMING_GP_SCHEDULE: GpTimetable[] = [
    { session: 'Practice 1', day: 'Friday', time: '12:30' },
    { session: 'Practice 2', day: 'Friday', time: '16:00' },
    { session: 'Practice 3', day: 'Saturday', time: '12:30' },
    { session: 'Qualifying', day: 'Saturday', time: '16:00' },
    { session: 'Race', day: 'Sunday', time: '15:00' },
];

export const PARTNERS_MAIN: Partner[] = [
  { name: 'LVMH', logo: LvmhLogo },
  { name: 'Pirelli', logo: PirelliLogo },
  { name: 'Aramco', logo: AramcoLogo },
  { name: 'Heineken', logo: HeinekenLogo },
  { name: 'AWS', logo: AwsLogo },
  { name: 'Lenovo', logo: LenovoLogo },
  { name: 'DHL', logo: DhlLogo },
  { name: 'Qatar Airways', logo: QatarAirwaysLogo },
  { name: 'MSC Cruises', logo: MscCruisesLogo },
  { name: 'Crypto.com', logo: CryptoComLogo },
  { name: 'Salesforce', logo: SalesforceLogo }
];

export const PARTNERS_SECONDARY: Partner[] = [
  { name: 'Louis Vuitton', logo: LouisVuittonLogo },
  { name: 'Tag Heuer', logo: TagHeuerLogo },
  { name: 'Moët Hennessy', logo: MoetHennessyLogo },
  { name: 'American Express', logo: AmericanExpressLogo },
  { name: 'Santander', logo: SantanderLogo },
  { name: 'Allwyn', logo: AllwynLogo },
  { name: 'Globant', logo: GlobantLogo },
  { name: 'Las Vegas', logo: LasVegasLogo },
  { name: 'Paramount+', logo: ParamountPlusLogo },
  { name: 'Barilla', logo: BarillaLogo },
  { name: 'Liqui Moly', logo: LiquiMolyLogo },
  { name: 'Nestlé', logo: NestleLogo },
  { name: 'PWC', logo: PwcLogo },
  { name: 'PepsiCo', logo: PepsiCoLogo },
  { name: 'Puma', logo: PumaLogo },
  { name: 'Tata Communications', logo: TataCommunicationsLogo },
  { name: 'Aggreko', logo: AggrekoLogo },
  { name: 'BBS Motorsport', logo: BbsMotorsportLogo },
  { name: 'McDonalds', logo: McDonaldsLogo }
];
