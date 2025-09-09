
import React from 'react';
import type { NavLinkItem, Driver, RaceSchedule, GpTimetable, Partner, DriverRoster, NewsArticle } from './types';
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

export const DRIVERS_2025_ROSTER: DriverRoster[] = [
  { name: 'Oscar Piastri', team: 'McLaren', photoUrl: '' },
  { name: 'Lando Norris', team: 'McLaren', photoUrl: '' },
  { name: 'Charles Leclerc', team: 'Ferrari', photoUrl: '' },
  { name: 'Lewis Hamilton', team: 'Ferrari', photoUrl: '' },
  { name: 'George Russell', team: 'Mercedes', photoUrl: '' },
  { name: 'Kimi Antonelli', team: 'Mercedes', photoUrl: '' },
  { name: 'Max Verstappen', team: 'Red Bull Racing', photoUrl: '' },
  { name: 'Yuki Tsunoda', team: 'Red Bull Racing', photoUrl: '' },
  { name: 'Alexander Albon', team: 'Williams', photoUrl: '' },
  { name: 'Carlos Sainz', team: 'Williams', photoUrl: '' },
  { name: 'Lance Stroll', team: 'Aston Martin', photoUrl: '' },
  { name: 'Fernando Alonso', team: 'Aston Martin', photoUrl: '' },
  { name: 'Liam Lawson', team: 'Racing Bulls', photoUrl: '' },
  { name: 'Isack Hadjar', team: 'Racing Bulls', photoUrl: '' },
  { name: 'Nico Hulkenberg', team: 'Kick Sauber', photoUrl: '' },
  { name: 'Gabriel Bortoleto', team: 'Kick Sauber', photoUrl: '' },
  { name: 'Esteban Ocon', team: 'Haas', photoUrl: '' },
  { name: 'Oliver Bearman', team: 'Haas', photoUrl: '' },
  { name: 'Pierre Gasly', team: 'Alpine', photoUrl: '' },
  { name: 'Franco Colapinto', team: 'Alpine', photoUrl: '' },
];

export const MOCK_NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: 'Hamilton to Ferrari: A Deep Dive into the Shocking 2025 Move',
    summary: 'We analyze the seismic shift in the F1 driver market as 7-time world champion Lewis Hamilton announces his move to Scuderia Ferrari for the 2025 season.',
    imageUrl: 'https://placehold.co/600x400/e10600/ffffff?text=Hamilton+Joins+Ferrari',
    date: 'October 26, 2024',
    category: 'Driver Market',
  },
  {
    id: 2,
    title: 'Red Bull Unveils Radical RB21 Concept for Upcoming Season',
    summary: 'Adrian Newey\'s latest creation, the RB21, breaks cover with an aggressive aerodynamic philosophy. Will it continue their dominant run?',
    imageUrl: 'https://placehold.co/600x400/15151e/ffffff?text=RB21+Launch',
    date: 'October 25, 2024',
    category: 'Technical',
  },
  {
    id: 3,
    title: 'McLaren Momentum: Can Piastri and Norris Challenge for the Title?',
    summary: 'After a stunning second half of the season, McLaren is poised to be a major contender. We look at their chances for championship glory.',
    imageUrl: 'https://placehold.co/600x400/ff8700/ffffff?text=McLaren+Rising',
    date: 'October 24, 2024',
    category: 'Analysis',
  },
  {
    id: 4,
    title: 'The Las Vegas GP: A Spectacle of Speed and Entertainment',
    summary: 'Relive the highlights from the action-packed Las Vegas Grand Prix, where racing under the lights delivered unforgettable moments.',
    imageUrl: 'https://placehold.co/600x400/8c8c8d/ffffff?text=Vegas+GP+Recap',
    date: 'October 22, 2024',
    category: 'Race Report',
  },
  {
    id: 5,
    title: 'F1 Announces New Regulations to Promote Closer Racing',
    summary: 'The FIA has revealed a new set of technical regulations aimed at reducing dirty air and allowing cars to follow more closely, promising more wheel-to-wheel action.',
    imageUrl: 'https://placehold.co/600x400/006fcf/ffffff?text=New+Regulations',
    date: 'October 21, 2024',
    category: 'F1 News',
  },
  {
    id: 6,
    title: 'Inside the Mind of a Pit Crew: The Unsung Heroes of F1',
    summary: 'A special feature on the intense training, precision, and pressure faced by the pit crews who can make or break a race in under two seconds.',
    imageUrl: 'https://placehold.co/600x400/6B7280/ffffff?text=Pit+Crew+Feature',
    date: 'October 20, 2024',
    category: 'Feature',
  },
];

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