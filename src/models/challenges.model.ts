export type ChallengeConfigInfoDto = {
  id: number;
  localizedNames: Record<string, Record<string, string>>;
  state: State;
  tracking: Tracking;
  startTimestamp: number;
  endTimestamp: number;
  leaderboard: boolean;
  thresholds: Record<string, number>;
};

export type State =
  | 'DISABLED' // not visible and not calculated
  | 'HIDDEN' // not visible, but calculated
  | 'ENABLED' // visible and calculated
  | 'ARCHIVED'; // visible, but not calculated

export type Tracking =
  | 'LIFETIME' // stats are incremented without reset
  | 'SEASON'; // stats are accumulated by season and reset at the beginning of new season

export type ApexPlayerInfoDto = {
  puuid: string;
  value: number;
  position: number;
};

export type ChallengerPercentilesResponse = Record<
  string,
  | 0 // NONE
  | 1 // IRON
  | 2 // BRONZE
  | 3 // SILVER
  | 4 // GOLD
  | 5 // PLATINUM
  | 6 // DIAMOND
  | 7 // MASTER
  | 8 // GRANDMASTER
  | 9 // CHALLENGER
>;

export type ChallengeInfo = any;
export type PlayerClientPreferences = any;
export type ChallengePoints = any;

export type PlayerInfoDto = {
  challenges: ChallengeInfo[];
  preferences: PlayerClientPreferences;
  totalPoints: ChallengePoints;
  categoryPoints: Record<string, ChallengePoints>;
};

export type ChallengesPercentileResponse = Record<number, Record<number, Record<number, number>>>;
