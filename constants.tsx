import { Slip } from './types';

export const INITIAL_SLIPS: Slip[] = [
  {
    id: '1',
    title: 'Elite Champions Accumulator',
    date: 'Oct 24, 2023',
    status: 'won',
    totalOdds: 4.2,
    games: [
      { id: 'g1', match: 'Arsenal vs Chelsea', pick: 'Arsenal Win', odds: 1.8 },
      { id: 'g2', match: 'Man City vs Spurs', pick: 'Over 2.5', odds: 1.65 },
      { id: 'g3', match: 'Liverpool vs Everton', pick: 'Liverpool Win', odds: 1.42 },
    ],
  },
  {
    id: '2',
    title: 'High-Yield Weekend Parlay',
    date: 'Oct 22, 2023',
    status: 'lost',
    totalOdds: 12.5,
    games: [
      { id: 'g4', match: 'Juventus vs Milan', pick: 'Juventus Win', odds: 2.1 },
      { id: 'g5', match: 'Real Madrid vs Sociedad', pick: 'BTTS Yes', odds: 1.75 },
      { id: 'g6', match: 'Bayern vs Leipzig', pick: 'Bayern -1', odds: 1.5 },
      { id: 'g7', match: 'PSG vs Lille', pick: 'PSG Win', odds: 1.8 },
    ],
  },
  {
    id: '3',
    title: 'Analysis: Morning Markets',
    date: 'Oct 20, 2023',
    status: 'pending',
    totalOdds: 3.15,
    games: [
      { id: 'g8', match: 'Newcastle vs Wolves', pick: 'Newcastle Win', odds: 1.55 },
      { id: 'g9', match: 'West Ham vs Fulham', pick: 'Over 2.5', odds: 1.8 },
      { id: 'g10', match: 'Brighton vs Villa', pick: 'Draw', odds: 3.2 },
    ],
  },
];

export const COLORS = {
  primary: '#ccff00', // Volt Green
  bg: '#050505',
  card: '#121214',
  text: '#ffffff',
  muted: '#888888',
  border: '#27272a',
};