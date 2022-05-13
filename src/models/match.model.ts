export type MatchTimelineDto = any;
export type MatchDto = {
  metadata: MetadataDto; // Match metadata
  info: InfoDto; // Match info
};

export type MetadataDto = {
  dataversion: string; // match data version
  matchId: string; // match id
  participants: string[]; // a list of participants puuids
};

export type InfoDto = {
  gameCreation: number; // Unix Timestamp for when the game is created on the game server (i.e, the loading screen).
  gameDuration: number /* Prior to patch 11.20, this field returns the game length in milliseconds calculated from gameEndTimestamp - gameStartTimestamp.
                          post patch 11.20, this field returns the max timePlayed of any participant in the game in seconds, which makes the behavior of this field 
                          consistent with that of match-v4. the best way to handling the change in this field is to treat the value as milliseconds if the gameEndTimestamp
                          field isn't in the response and to treat the value as seconds if gameEndTimestamp is in the response.
                        */;
  gameEndTimestamp: number /* Unix Timestamp for when the match ends on the game server. This timestamp can occasionally be significantly longer than when the match "ends". The most reliable 
                              way of determining the timestamp for the end of the match would be to add the max time played of any participant to the gameStartTimestamp. this field was added 
                              to match-v5 in patch 11.20 on Oct 5th, 2021.
                             */;
  gameId: number;
  gameMode: string; // Refer to the game constants documentation
  gameName: string;
  gameStartTimestamp: number; // unix timestamp for when match starts on the game server
  gameType: string;
  gameVersion: string; // the first two parts can be used to determine the patch a game was played on
  mapId: number; // refer to the game constants documentation
  participants: ParticipantDto[];
  platformId: string; // platform where the match was played.
  queueId: number; // refer to the game constants documentation
  teams: TeamDto[];
  tournamentCode: string; // tournament code used to generate the match. this field was added to match-v5 in patch 11.13 on June 23rd, 2021.
};

export type ParticipantDto = {
  assists: number;
  baronKills: number;
  bountyLevel: number;
  champExperience: number;
  champLevel: number;
  championId: number; // Prior to patch 11.4, on Feb 18th, 2021, this field returned invalid championsId. we recommend determining the champions based on the championName field for matches player prior to patch 11.4
  championName: string;
  championTransform: number; // This field is currently only utilized for kayn's transformations. (Legal values: 0 - None, 1 - Slayer, 2 - Assassin)
  consumablesPurchased: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  detectorWardsPlaced: number;
  doubleKills: number;
  dragonKills: number;
  firstBloodAssist: boolean;
  firstBloodKill: boolean;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  goldEarned: number;
  goldSpent: number;
  individualPosition: string /* Both individualPosition and teamPosition are computed by the game server and are different versions of the most
                                likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. 
                                The teamPosition is the best guess for which position the played actually played if we add the constraint that each team must have one top player, one jungle, one middle, ect. 
                                Generally the recommendation is to use the teamPositionField over the individualPosition field. */;
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;
  killingSprees: number;
  kills: number;
  lane: string;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  neutralMinionsKilled: number;
  nexusKills: number;
  nexusTakedowns: number;
  nexusLost: number;
  objectivesStolen: number;
  objectivesStolenAssists: number;
  participantId: number;
  pentaKills: number;
  perks: PerksDto;
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  profileIcon: number;
  puuid: string;
  quadraKills: number;
  riotIdName: string;
  riotIdTagline: string;
  role: string;
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  teamEarlySurrendered: boolean;
  teamId: number;
  teamPosition: string /* Both IndividualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. 
                          The individualPosition is the best guess for which position the player actually played in isolation of anything else. the teamPosition is the best guess
                          for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, ect. Generally the 
                          recommendation is to use the teamPosition field over the individualPosition field.
                        */;
  teamCCingOthers: number;
  timePlayed: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalHeal: number;
  totalHealsOnTeammates: number;
  totalMinionsKilled: number;
  totalTimeCCDealt: number;
  totalTimeSpentDead: number;
  totalUnitsHealed: number;
  tripleKills: number;
  trueDamageDealt: number;
  turretKills: number;
  turretTakedowns: number;
  turretsLost: number;
  unrealKills: number;
  visionScore: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
};

export type PerksDto = {
  statPerks: PerkStatsDto;
  styles: PerkStyleDto[];
};

export type PerkStatsDto = {
  defense: number;
  flex: number;
  offense: number;
};

export type PerkStyleDto = {
  description: string;
  selections: PerkStyleSelectionDto;
  style: number;
};

export type PerkStyleSelectionDto = {
  perk: number;
  var1: number;
  var2: number;
  var3: number;
};

export type BanDto = {
  championId: number;
  pickTurn: number;
};
export type ObjectivesDto = {
  baron: ObjectiveDto;
  champions: ObjectiveDto;
  dragon: ObjectiveDto;
  inhibitor: ObjectiveDto;
  riftHerald: ObjectiveDto;
  tower: ObjectiveDto;
};

export type ObjectiveDto = {
  first: boolean;
  kills: number;
};

export type TeamDto = {
  bans: BanDto[];
  objectives: ObjectivesDto;
  teamId: number;
  win: boolean;
};
