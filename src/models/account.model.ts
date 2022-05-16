export type AccountDto = {
  puuid: string;
  gameName: string; // This field may be excluded from the response if the account doesn't have a gameName.
  tagLine: string; // This field may be excluded from the response if the account doesn't have a tagLine.
};

export type ActiveShardDto = any;
export type AccountContinent = 'americas' | 'asia' | 'esports' | 'europe';
