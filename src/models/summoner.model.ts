import { stringOfLength, stringLengthInRange } from '../types';

export type SummonerResponse = Summoner;
export type Summoner = {
  accountId: stringLengthInRange<0, 56>;
  profileIconId: number;
  revisionDate: bigint;
  id: stringLengthInRange<0, 63>;
  puuid: stringOfLength<78>;
  summonerLevel: bigint;
};
