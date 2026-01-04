export interface Game {
  id: string;
  match: string;
  pick: string;
  odds: number;
}

export interface Slip {
  id: string;
  title: string;
  date: string;
  status: 'won' | 'lost' | 'pending';
  totalOdds: number;
  games: Game[];
}

export interface UserState {
  isPremium: boolean;
  unlockedIds: string[];
}