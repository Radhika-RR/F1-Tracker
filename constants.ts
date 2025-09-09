
import React from 'react';
import type { NavLinkItem, Driver, RaceSchedule, GpTimetable, Partner, DriverRoster, NewsArticle, Team, DriverDetail, FullRaceSchedule } from './types';
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
    { id: 'oscar-piastri', name: 'Oscar Piastri', team: 'McLaren', photoUrl: '' },
    { id: 'lando-norris', name: 'Lando Norris', team: 'McLaren', photoUrl: '' },
    { id: 'charles-leclerc', name: 'Charles Leclerc', team: 'Ferrari', photoUrl: '' },
    { id: 'lewis-hamilton', name: 'Lewis Hamilton', team: 'Ferrari', photoUrl: '' },
    { id: 'george-russell', name: 'George Russell', team: 'Mercedes', photoUrl: '' },
    { id: 'kimi-antonelli', name: 'Kimi Antonelli', team: 'Mercedes', photoUrl: '' },
    { id: 'max-verstappen', name: 'Max Verstappen', team: 'Red Bull Racing', photoUrl: '' },
    { id: 'yuki-tsunoda', name: 'Yuki Tsunoda', team: 'Red Bull Racing', photoUrl: '' },
    { id: 'alexander-albon', name: 'Alexander Albon', team: 'Williams', photoUrl: '' },
    { id: 'carlos-sainz', name: 'Carlos Sainz', team: 'Williams', photoUrl: '' },
    { id: 'lance-stroll', name: 'Lance Stroll', team: 'Aston Martin', photoUrl: '' },
    { id: 'fernando-alonso', name: 'Fernando Alonso', team: 'Aston Martin', photoUrl: '' },
    { id: 'liam-lawson', name: 'Liam Lawson', team: 'Racing Bulls', photoUrl: '' },
    { id: 'isack-hadjar', name: 'Isack Hadjar', team: 'Racing Bulls', photoUrl: '' },
    { id: 'nico-hulkenberg', name: 'Nico Hulkenberg', team: 'Kick Sauber', photoUrl: '' },
    { id: 'gabriel-bortoleto', name: 'Gabriel Bortoleto', team: 'Kick Sauber', photoUrl: '' },
    { id: 'esteban-ocon', name: 'Esteban Ocon', team: 'Haas', photoUrl: '' },
    { id: 'oliver-bearman', name: 'Oliver Bearman', team: 'Haas', photoUrl: '' },
    { id: 'pierre-gasly', name: 'Pierre Gasly', team: 'Alpine', photoUrl: '' },
    { id: 'franco-colapinto', name: 'Franco Colapinto', team: 'Alpine', photoUrl: '' },
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

export const TEAMS_DATA: Team[] = [
  { id: 'alpine', name: 'Alpine', logoUrl: '', carUrl: '', color: '#2293D1' },
  { id: 'aston-martin', name: 'Aston Martin', logoUrl: '', carUrl: '', color: '#00594F' },
  { id: 'ferrari', name: 'Ferrari', logoUrl: '', carUrl: '', color: '#D8291F' },
  { id: 'haas', name: 'Haas', logoUrl: '', carUrl: '', color: '#B6BABD' },
  { id: 'kick-sauber', name: 'Kick Sauber', logoUrl: '', carUrl: '', color: '#00FF2D' },
  { id: 'mclaren', name: 'McLaren', logoUrl: '', carUrl: '', color: '#FF8000' },
  { id: 'mercedes', name: 'Mercedes', logoUrl: '', carUrl: '', color: '#00A19C' },
  { id: 'racing-bulls', name: 'Racing Bulls', logoUrl: '', carUrl: '', color: '#0032FF' },
  { id: 'red-bull', name: 'Red Bull Racing', logoUrl: '', carUrl: '', color: '#1E41FF' },
  { id: 'williams', name: 'Williams', logoUrl: '', carUrl: '', color: '#005AFF' },
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


// --- MOCK DRIVER DETAIL DATA ---
const createDriverData = (overrides: Partial<DriverDetail>): DriverDetail => {
    const baseData = {
        id: (overrides.name || 'john-doe').toLowerCase().replace(' ', '-'),
        name: 'John Doe',
        team: 'Default Team',
        number: 0,
        teamColor: '#6B7280',
        photoUrl: '',
        carouselImages: [] as string[],
        seasonStats: {
            'Season Position': 'N/A',
            'Season Points': 0,
            'Grand Prix Races': 0,
            'Grand Prix Wins': 0,
            'Grand Prix Podiums': 0,
        },
        careerStats: {
            'Grand Prix Entered': 0,
            'Career Points': 0,
            'World Championships': 0,
            'Highest Race Finish': 'N/A',
            'Podiums': 0,
            'Pole Positions': 0,
        },
    };

    const finalData = { ...baseData, ...overrides };

    // Generate dynamic carousel images if they weren't provided in overrides
    if (!overrides.carouselImages || overrides.carouselImages.length === 0) {
        const teamColorHex = finalData.teamColor.substring(1);
        finalData.carouselImages = [
            `https://placehold.co/1200x600/${teamColorHex}/ffffff?text=${finalData.name.replace(/\s/g,'+')}`,
            `https://placehold.co/1200x600/15151e/ffffff?text=${finalData.team.replace(/\s/g,'+')}+in+Action`,
            `https://placehold.co/1200x600/303038/ffffff?text=Podium+Celebration`,
        ];
    }
    
    return finalData;
};

export const DRIVER_DETAILS_DATA: { [key: string]: DriverDetail } = {
    'lewis-hamilton': createDriverData({
        id: 'lewis-hamilton', name: 'Lewis Hamilton', team: 'Ferrari', number: 44, teamColor: '#D8291F',
        seasonStats: {
            'Season Position': '6th',
            'Season Points': 117,
            'Grand Prix Races': 16,
            'Grand Prix Points': 103,
            'Grand Prix Wins': 0,
            'Grand Prix Podiums': 0,
            'Grand Prix Poles': 0,
            'Grand Prix Top 10s': 13,
            'DHL Fastest Laps': 0,
            'DNFs': 1,
            'Sprint Races': 3,
            'Sprint Points': 14,
            'Sprint Wins': 1,
            'Sprint Podiums': 2,
            'Sprint Poles': 1,
            'Sprint Top 10s': 2,
        },
        careerStats: {
            'Grand Prix Entered': 372,
            'Career Points': 4979.5,
            'Highest Race Finish': '1 (x105)',
            'Podiums': 202,
            'Highest Grid Position': '1 (x104)',
            'Pole Positions': 104,
            'World Championships': 7,
            'DNFs': 33,
        }
    }),
    'max-verstappen': createDriverData({
        id: 'max-verstappen', name: 'Max Verstappen', team: 'Red Bull Racing', number: 1, teamColor: '#1E41FF',
        seasonStats: {
            'Season Position': '1st',
            'Season Points': 429,
            'Grand Prix Races': 20,
            'Grand Prix Wins': 15,
            'Grand Prix Podiums': 18,
        },
        careerStats: {
            'Grand Prix Entered': 209,
            'Career Points': 3000.5,
            'World Championships': 4,
            'Highest Race Finish': '1 (x65)',
            'Podiums': 110,
            'Pole Positions': 45,
        }
    }),
    'charles-leclerc': createDriverData({
        id: 'charles-leclerc', name: 'Charles Leclerc', team: 'Ferrari', number: 16, teamColor: '#D8291F',
        seasonStats: {
            'Season Position': '2nd',
            'Season Points': 280,
            'Grand Prix Races': 20,
            'Grand Prix Wins': 3,
            'Grand Prix Podiums': 9,
        },
        careerStats: {
            'Grand Prix Entered': 149,
            'Career Points': 1350,
            'World Championships': 0,
            'Highest Race Finish': '1 (x8)',
            'Podiums': 40,
            'Pole Positions': 25,
        }
    }),
    'lando-norris': createDriverData({ id: 'lando-norris', name: 'Lando Norris', team: 'McLaren', number: 4, teamColor: '#FF8000' }),
    'oscar-piastri': createDriverData({ id: 'oscar-piastri', name: 'Oscar Piastri', team: 'McLaren', number: 81, teamColor: '#FF8000' }),
    'george-russell': createDriverData({ id: 'george-russell', name: 'George Russell', team: 'Mercedes', number: 63, teamColor: '#00A19C' }),
    'kimi-antonelli': createDriverData({ id: 'kimi-antonelli', name: 'Kimi Antonelli', team: 'Mercedes', number: 12, teamColor: '#00A19C' }),
    'yuki-tsunoda': createDriverData({ id: 'yuki-tsunoda', name: 'Yuki Tsunoda', team: 'Red Bull Racing', number: 22, teamColor: '#1E41FF' }),
    'alexander-albon': createDriverData({ id: 'alexander-albon', name: 'Alexander Albon', team: 'Williams', number: 23, teamColor: '#005AFF' }),
    'carlos-sainz': createDriverData({ id: 'carlos-sainz', name: 'Carlos Sainz', team: 'Williams', number: 55, teamColor: '#005AFF' }),
    'lance-stroll': createDriverData({ id: 'lance-stroll', name: 'Lance Stroll', team: 'Aston Martin', number: 18, teamColor: '#00594F' }),
    'fernando-alonso': createDriverData({ id: 'fernando-alonso', name: 'Fernando Alonso', team: 'Aston Martin', number: 14, teamColor: '#00594F' }),
    'liam-lawson': createDriverData({ id: 'liam-lawson', name: 'Liam Lawson', team: 'Racing Bulls', number: 30, teamColor: '#0032FF' }),
    'isack-hadjar': createDriverData({ id: 'isack-hadjar', name: 'Isack Hadjar', team: 'Racing Bulls', number: 31, teamColor: '#0032FF' }),
    'nico-hulkenberg': createDriverData({ id: 'nico-hulkenberg', name: 'Nico Hulkenberg', team: 'Kick Sauber', number: 27, teamColor: '#00FF2D' }),
    'gabriel-bortoleto': createDriverData({ id: 'gabriel-bortoleto', name: 'Gabriel Bortoleto', team: 'Kick Sauber', number: 28, teamColor: '#00FF2D' }),
    'esteban-ocon': createDriverData({ id: 'esteban-ocon', name: 'Esteban Ocon', team: 'Haas', number: 31, teamColor: '#B6BABD' }),
    'oliver-bearman': createDriverData({ id: 'oliver-bearman', name: 'Oliver Bearman', team: 'Haas', number: 50, teamColor: '#B6BABD' }),
    'pierre-gasly': createDriverData({ id: 'pierre-gasly', name: 'Pierre Gasly', team: 'Alpine', number: 10, teamColor: '#2293D1' }),
    'franco-colapinto': createDriverData({ id: 'franco-colapinto', name: 'Franco Colapinto', team: 'Alpine', number: 11, teamColor: '#2293D1' }),
};

export const FULL_RACE_SCHEDULE_2025: FullRaceSchedule[] = [
  { round: 'TESTING', date: '26 - 28 Feb', country: 'Sakhir', officialTitle: 'FORMULA 1 ARAMCO PRE-SEASON TESTING 2025', status: 'past' },
  { round: 1, date: '14 - 16 Mar', country: 'Australia', officialTitle: 'FORMULA 1 LOUIS VUITTON AUSTRALIAN GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'NOR', time: '1:42:06.304' }, { position: '2nd', driver: 'VER', time: '+0.895' }, { position: '3rd', driver: 'RUS', time: '+8.481' } ] },
  { round: 2, date: '21 - 23 Mar', country: 'China', officialTitle: 'FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'PIA', time: '1:30:55.026' }, { position: '2nd', driver: 'NOR', time: '+9.748' }, { position: '3rd', driver: 'RUS', time: '+11.097' } ] },
  { round: 3, date: '04 - 06 Apr', country: 'Japan', officialTitle: 'FORMULA 1 LENOVO JAPANESE GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'VER', time: '1:22:06.983' }, { position: '2nd', driver: 'NOR', time: '+1.423' }, { position: '3rd', driver: 'PIA', time: '+2.129' } ] },
  { round: 4, date: '11 - 13 Apr', country: 'Bahrain', officialTitle: 'FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'PIA', time: '1:35:39.435' }, { position: '2nd', driver: 'RUS', time: '+15.499' }, { position: '3rd', driver: 'NOR', time: '+16.273' } ] },
  { round: 5, date: '18 - 20 Apr', country: 'Saudi Arabia', officialTitle: 'FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'PIA', time: '1:21:06.758' }, { position: '2nd', driver: 'VER', time: '+2.843' }, { position: '3rd', driver: 'LEC', time: '+8.104' } ] },
  { round: 6, date: '02 - 04 May', country: 'Miami', officialTitle: 'FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'PIA', time: '1:28:51.587' }, { position: '2nd', driver: 'NOR', time: '+4.63' }, { position: '3rd', driver: 'RUS', time: '+37.644' } ] },
  { round: 7, date: '16 - 18 May', country: 'Emilia-Romagna', officialTitle: "FORMULA 1 AWS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2025", status: 'past', results: [ { position: '1st', driver: 'VER', time: '1:31:33.199' }, { position: '2nd', driver: 'NOR', time: '+6.109' }, { position: '3rd', driver: 'PIA', time: '+12.956' } ] },
  { round: 8, date: '23 - 25 May', country: 'Monaco', officialTitle: 'FORMULA 1 TAG HEUER GRAND PRIX DE MONACO 2025', status: 'past', results: [ { position: '1st', driver: 'NOR', time: '1:40:33.843' }, { position: '2nd', driver: 'LEC', time: '+3.131' }, { position: '3rd', driver: 'PIA', time: '+3.658' } ] },
  { round: 9, date: '30 May - 01 Jun', country: 'Spain', officialTitle: 'FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2025', status: 'past', results: [ { position: '1st', driver: 'PIA', time: '1:32:57.375' }, { position: '2nd', driver: 'NOR', time: '+2.471' }, { position: '3rd', driver: 'LEC', time: '+10.455' } ] },
  { round: 10, date: '13 - 15 Jun', country: 'Canada', officialTitle: 'FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2025', status: 'past', results: [ { position: '1st', driver: 'RUS', time: '1:31:52.688' }, { position: '2nd', driver: 'VER', time: '+0.228' }, { position: '3rd', driver: 'ANT', time: '+1.014' } ] },
  { round: 11, date: '27 - 29 Jun', country: 'Austria', officialTitle: 'FORMULA 1 MSC CRUISES AUSTRIAN GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'NOR', time: '1:23:47.693' }, { position: '2nd', driver: 'PIA', time: '+2.695' }, { position: '3rd', driver: 'LEC', time: '+19.82' } ] },
  { round: 12, date: '04 - 06 Jul', country: 'Great Britain', officialTitle: 'FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'NOR', time: '1:37:15.735' }, { position: '2nd', driver: 'PIA', time: '+6.812' }, { position: '3rd', driver: 'HUL', time: '+34.742' } ] },
  { round: 13, date: '25 - 27 Jul', country: 'Belgium', officialTitle: 'FORMULA 1 MOËT & CHANDON BELGIAN GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'PIA', time: '1:25:22.601' }, { position: '2nd', driver: 'NOR', time: '+3.415' }, { position: '3rd', driver: 'LEC', time: '+20.185' } ] },
  { round: 14, date: '01 - 03 Aug', country: 'Hungary', officialTitle: 'FORMULA 1 LENOVO HUNGARIAN GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'NOR', time: '1:35:21.231' }, { position: '2nd', driver: 'PIA', time: '+0.698' }, { position: '3rd', driver: 'RUS', time: '+21.916' } ] },
  { round: 15, date: '29 - 31 Aug', country: 'Netherlands', officialTitle: 'FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2025', status: 'past', results: [ { position: '1st', driver: 'PIA', time: '1:38:29.849' }, { position: '2nd', driver: 'VER', time: '+1.271' }, { position: '3rd', driver: 'HAD', time: '+3.233' } ] },
  { round: 16, date: '05 - 07 Sep', country: 'Italy', officialTitle: 'FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2025', status: 'past', results: [ { position: '1st', driver: 'VER', time: '1:13:24.325' }, { position: '2nd', driver: 'NOR', time: '+19.207' }, { position: '3rd', driver: 'PIA', time: '+21.351' } ] },
  { round: 17, date: '19 - 21 Sep', country: 'Azerbaijan', officialTitle: 'FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2025', status: 'next' },
  { round: 18, date: '03 - 05 Oct', country: 'Singapore', officialTitle: 'FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2025', status: 'upcoming' },
  { round: 19, date: '17 - 19 Oct', country: 'United States', officialTitle: 'FORMULA 1 MSC CRUISES UNITED STATES GRAND PRIX 2025', status: 'upcoming' },
  { round: 20, date: '24 - 26 Oct', country: 'Mexico', officialTitle: 'FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2025', status: 'upcoming' },
  { round: 21, date: '07 - 09 Nov', country: 'Brazil', officialTitle: 'FORMULA 1 MSC CRUISES GRANDE PRÊMIO DE SÃO PAULO 2025', status: 'upcoming' },
  { round: 22, date: '20 - 22 Nov', country: 'Las Vegas', officialTitle: 'FORMULA 1 HEINEKEN LAS VEGAS GRAND PRIX 2025', status: 'upcoming' },
  { round: 23, date: '28 - 30 Nov', country: 'Qatar', officialTitle: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2025', status: 'upcoming' },
  { round: 24, date: '05 - 07 Dec', country: 'Abu Dhabi', officialTitle: 'FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2025', status: 'upcoming' },
];