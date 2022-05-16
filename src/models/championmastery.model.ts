export type ChampionMasteryDto = {
  championPointsUntilNextLevel: number; //	Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
  chestGranted: boolean; //	Is chest granted for this champion or not in current season.
  championId: number; // Champion ID for this entry.
  lastPlayTime: number; // Last time this champion was played by this player - in Unix milliseconds time format.
  championLevel: number; // Champion level for specified player and champion combination.
  summonerId: string; // Summoner ID for this entry. (Encrypted)
  championPoints: number; // Total number of champion points for this player and champion combination - they are used to determine championLevel.
  championPointsSinceLastLevel: number; //	Number of points earned since current level has been achieved.
  tokensEarned: number; //The token earned for this champion at the current championLevel. When the championLevel is advanced the tokensEarned resets to 0.
};
