export type ClashPlayerDto = {
  summonerId: string;
  teamId: string;
  position: string; // (Legal values: UNSELECTED, FILL, TOP, JUNGLE, MIDDLE, BOTTOM, UTILITY)
  role: string; // (Legal values: CAPTAIN, MEMBER)
};

export type ClashTeamDto = {
  id: string;
  tournamentId: number;
  name: string;
  iconId: number;
  tier: number;
  captain: string; // Summoner ID of the team captain.
  abbreviation: string;
  player: ClashPlayerDto[]; // Team members.
};

export type ClashTournamentPhaseDto = {
  id: number;
  registrationTime: number;
  startTime: number;
  cancelled: boolean;
};

export type ClashTournamentDto = {
  id: number;
  themeId: number;
  nameKey: string;
  nameKeySecondary: string;
  schedule: ClashTournamentPhaseDto[]; // Tournament phase.
};
