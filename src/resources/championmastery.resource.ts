import { ChampionMasteryDto } from '../models';
import { createstringOfLength, Region, stringOfLength } from '../types';
import { BaseResource } from './base.resource';

export class ChampionMasteryResource extends BaseResource {
  private readonly ENDPOINT_VERSION: stringOfLength<2> = createstringOfLength('v4', 2);

  /**
   * Obtains the current endpoint version that DahvidClient is requesting too
   *
   * @example
   * // returns "v4"
   *
   * @returns { stringOfLength<2> } endpoint version
   */
  public version(): stringOfLength<2> {
    return this.ENDPOINT_VERSION;
  }

  /**
   * Get all champion mastery entries sorted by number of champion points descending,
   *
   * @param encryptedSummonerId Summoner Identifier
   * @param region Region to execute request to
   * @returns { Promise<ChampionMasteryDto[]> }
   */
  public async bySummoner(encryptedSummonerId: string, region: Region): Promise<ChampionMasteryDto[]> {
    return await this._client._apiCall<ChampionMasteryDto[]>({
      path: `/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}`,
      region,
    });
  }

  /**
   * Get a champion mastery by player ID and champion ID
   *
   * @param encryptedSummonerId Summoner Identifier
   * @param championId Champion Identifier
   * @param region Region to execute request to
   * @returns { Promise<ChampionMasteryDto> }
   */
  public async bySummonerAndChampion(
    encryptedSummonerId: string,
    championId: string,
    region: Region,
  ): Promise<ChampionMasteryDto> {
    return await this._client._apiCall<ChampionMasteryDto>({
      path: `/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}/by-champion/${championId}`,
      region,
    });
  }

  /**
   * Get a player's total champion mastery score, which is the sum of individual champion mastery levels.
   *
   * @param encryptedSummonerId Summoner Identifier
   * @param region Region to execute request to
   * @returns { Promise<number> }
   */
  public async scoresBySummoner(encryptedSummonerId: string, region: Region): Promise<number> {
    return await this._client._apiCall<number>({
      path: `/lol/champion-mastery/v4/scores/by-summoner/${encryptedSummonerId}`,
      region,
    });
  }
}
