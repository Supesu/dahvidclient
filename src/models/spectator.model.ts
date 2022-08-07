export type GameCustomizationObject = {
  category: string; // Category identifier for Game Customization
  content: string; // Game Customization content
};

export type Perks = {
  perkIds: Array<number>; //	IDs of the perks/runes assigned.
  perkStyle: number; //	Primary runes path
  perkSubStyle: number; //	Secondary runes path
};

export type CurrentGameParticipant = {
  championId: number; //	The ID of the champion played by this participant
  perks: Perks; //Perks/Runes Reforged Information
  profileIconId: number; //	The ID of the profile icon used by this participant
  bot: boolean; //	Flag indicating whether or not this participant is a bot
  teamId: number; //	The team ID of this participant, indicating the participant's team
  summonerName: string; //The summoner name of this participant
  summonerId: string; //The encrypted summoner ID of this participant
  spell1Id: number; //	The ID of the first summoner spell used by this participant
  spell2Id: number; //	The ID of the second summoner spell used by this participant
  gameCustomizationObjects: Array<GameCustomizationObject>; //	List of Game Customizations
};

export type Observer = {
  encryptionKey: string; //Key used to decrypt the spectator grid game data for playback
};

export type BannedChampion = {
  pickTurn: number; //	The turn during which the champion was banned
  championId: number; //	The ID of the banned champion
  teamId: number; // The ID of the team that banned the champion
};

export type CurrentGameInfo = {
  gameId: number; //	The ID of the game
  gameType: string; //	The game type
  gameStartTime: number; //	The game start time represented in epoch milliseconds
  mapId: number; //	The ID of the map
  gameLength: number; //	The amount of time in seconds that has passed since the game started
  platformId: string; //	The ID of the platform on which the game is being played
  gameMode: string; //	The game mode
  bannedChampions: Array<BannedChampion>; //	Banned champion information
  gameQueueConfigId: number; //	The queue type (queue types are documented on the Game Constants page)
  observers: Observer; //	The observer information
  participants: Array<CurrentGameParticipant>; //	The participant information
};

export type Participant = {
  bot: boolean; // Flag indicating whether or not this participant is a bot
  spell2Id: number; //	The ID of the second summoner spell used by this participant
  profileIconId: number; //	The ID of the profile icon used by this participant
  summonerName: string; //	The summoner name of this participant
  championId: number; //	The ID of the champion played by this participant
  teamId: number; //	The team ID of this participant, indicating the participant's team
  spell1Id: number; //	The ID of the first summoner spell used by this participant
};

export type FeaturedGameInfo = {
  gameMode: string; //	The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
  gameLength: number; //	The amount of time in seconds that has passed since the game started
  mapId: number; //	The ID of the map
  gameType: string; //The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
  bannedChampions: Array<BannedChampion>; //	Banned champion information
  gameId: number; //	The ID of the game
  observers: Observer; // The observer information
  gameQueueConfigId: number; //	The queue type (queue types are documented on the Game Constants page)
  gameStartTime: number; //	The game start time represented in epoch milliseconds
  participants: Array<Participant>; //	The participant information
  platformId: string; //The ID of the platform on which the game is being played
};

export type FeaturedGames = {
  gameList: Array<FeaturedGameInfo>; // the list of featured games
  clientRefreshInterval: number; // The suggested interval to wait before requesting FeaturedGames again
};
