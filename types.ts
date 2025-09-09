
import type { ReactNode } from 'react';

export interface NavLinkItem {
  path: string;
  name: string;
  icon?: ReactNode; // Icon is now optional for header links
}

export interface RacePredictionParams {
  track: string;
  driver: string;
  team: string;
  weather: string;
  qualifyingPos: number;
}

export interface PitStopPredictionParams {
    trackType: string;
    weather: string;
    tyreCompound: string;
    pitCrewRating: number;
}

export interface SentimentData {
    distribution: { name: string; value: number }[];
    timeline: { date: string; positive: number; negative: number; neutral: number }[];
    wordCloud: { text: string; value: number }[];
    samples: { text: string; sentiment: 'Positive' | 'Negative' | 'Neutral' }[];
}

export interface Driver {
  id: string;
  name: string;
  team: string;
  number: number;
  teamColor: string;
}

export interface RaceSchedule {
  round: number;
  grandPrix: string;
  circuit: string;
  date: string;
}

export interface GpTimetable {
  session: string;
  day: string;
  time: string;
}

export interface Partner {
  name: string;
  logo: React.FC;
}

export interface DriverRoster {
  id: string;
  name: string;
  team: string;
  photoUrl: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  category: string;
}

export interface Team {
  id: string;
  name: string;
  logoUrl: string;
  carUrl: string;
  color: string;
}

export interface SeasonStats {
  [key: string]: string | number;
}

export interface CareerStats {
    [key: string]: string | number;
}

export interface DriverDetail {
  id: string;
  name: string;
  team: string;
  number: number;
  teamColor: string;
  photoUrl: string;
  carouselImages: string[];
  seasonStats: SeasonStats;
  careerStats: CareerStats;
}

export interface RaceResult {
  position: string;
  driver: string;
  time: string;
}

export interface FullRaceSchedule {
  round: number | 'TESTING';
  date: string;
  country: string;
  officialTitle: string;
  status: 'past' | 'next' | 'upcoming';
  results?: RaceResult[];
}

export interface RaceResultSummary {
  grandPrix: string;
  date: string;
  winner: string;
  team: string;
  laps: number;
  time: string;
}
