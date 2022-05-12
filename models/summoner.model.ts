import { stringOfLength, phantomstring } from "../types";

export type SummonerResponse = Summoner;
export type Summoner = {
  accountId: phantomstring<0, 56>;
  profileIconId: number;
  revisionDate: bigint;
  name: string;
  id: phantomstring<0, 63>;
  puuid: stringOfLength<78>;
  summonerLevel: bigint;
};
