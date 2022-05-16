export type LeagueEntryDTO = {
  leagueId: string;
  summonerId: string; // Player's summonerId (Encrypted)
  summonerName: string;
  queueType: string;
  tier: string;
  rank: string; // The player's division within a tier.
  leaguePoints: number;
  wins: number; // Winning team on Summoners Rift. First placement in Teamfight Tactics.
  losses: number; // Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
  hotStreak: boolean;
  veteran: boolean;
  freshBlood: boolean;
  inactive: boolean;
  miniSeries: MiniSeriesDTO;
};

export type MiniSeriesDTO = {
  losses: number;
  progress: string;
  target: number;
  wins: number;
};
