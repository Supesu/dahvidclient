import { BaseResource } from './base.resource';
import type { MatchDto, MatchTimelineDto } from '../models';
import { createstringOfLength, stringOfLength, Continent } from '../types';

/**
 * Utilities to help obtain Match information (region specific).
 *
 * @category Resource
 */
export class MatchResource extends BaseResource {
  private readonly ENDPOINT_VERSION: stringOfLength<2> = createstringOfLength('v5', 2);

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
   * Obtain match list using puuid
   *
   * @param encryptedPUUID Summoner Identifier
   * @param region Region to execute request to
   * @returns { Promise<Array<string>> } string[] | StatusError | AxiosError
   */
  public async byPuuid(encryptedPUUID: string, region: Continent): Promise<Array<string>> {
    return await this._client._apiCall<Array<string>>({
      path: `/lol/match/v5/matches/by-puuid/${encryptedPUUID}/ids`,
      region,
    });
  }

  /**
   * Obtain match information from a matchId
   *
   * @param matchId Match Identifier
   * @param region Region to execute request to
   * @returns { Promise<MatchDto> } MatchDto | StatusError | AxiosError
   */
  public async matchById(matchId: string, region: Continent): Promise<MatchDto> {
    return await this._client._apiCall<MatchDto>({
      path: `/lol/match/v5/matches/${matchId}`,
      region,
    });
  }

  /**
   * Obtain match timeline information from a matchId
   *
   * @param matchId Match Identifier
   * @param region Region to execute request to
   * @returns { Promise<MatchTimelineDto> } MatchTimelineDto | StatusError | AxiosError
   */
  public async timelineByMatchId(matchId: string, region: Continent): Promise<MatchTimelineDto> {
    return await this._client._apiCall<MatchTimelineDto>({
      path: `/lol/match/v5/matches/${matchId}/timeline`,
      region,
    });
  }
}
