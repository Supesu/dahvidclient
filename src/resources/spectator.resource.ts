import { BaseResource } from './base.resource';
import type { CurrentGameInfo, FeaturedGames } from '../models';
import { createstringOfLength, stringOfLength, Region } from '../types';

/**
 * Utilities to help obtain spectator information (region specific)
 *
 * @category Resource
 */
export class SpectatorResource extends BaseResource {
  private readonly ENDPOINT_VERSION: stringOfLength<2> = createstringOfLength('v4', 2);

  /**
   * Obtains the current endpoint version that DahvidClient is requesting too
   *
   * @example
   * // returns "v5"
   *
   * @returns { stringOfLength<2> } endpoint version
   */
  public version(): stringOfLength<2> {
    return this.ENDPOINT_VERSION;
  }

  /**
   * Obtain live match information for summoner
   *
   * @param encryptedSummonerId Summoner identifier
   * @param region Region to execute request to
   * @returns { Promise<CurrentGameInfo> } MatchDto | StatusError | AxiosError
   */
  public async getActiveGamesWithId(encryptedSummonerId: string, region: Region): Promise<CurrentGameInfo> {
    return await this._client._apiCall<CurrentGameInfo>({
      path: `/lol/spectator/v4/active-games/by-summoner/${encryptedSummonerId}`,
      region,
    });
  }

  /**
   * Obtain featured games for a region
   *
   * @param region Region to execute request to
   * @returns { Promise<FeaturedGames> } FeaturesGames | StatusError | AxiosError
   */
  public async getFeaturedGames(region: Region): Promise<FeaturedGames> {
    return await this._client._apiCall<FeaturedGames>({
      path: '/lol/spectator/v4/featured-games',
      region,
    });
  }
}
