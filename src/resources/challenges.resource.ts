import {
  ApexPlayerInfoDto,
  ChallengeConfigInfoDto,
  ChallengerPercentilesResponse,
  PlayerInfoDto,
  ChallengesPercentileResponse,
} from '../models';
import { BaseResource } from './base.resource';
import { createstringOfLength, Region, stringOfLength } from '../types';

export class ChallengesResource extends BaseResource {
  private readonly ENDPOINT_VERSION: stringOfLength<2> = createstringOfLength('v3', 2);

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
   * List of all basic challenge configuration information (includes all translations for names and descriptions)
   *
   * @param region Region to execute request to
   * @returns { Promise<ChallengeConfigInfoDto> }
   */
  public async getConfig(region: Region): Promise<ChallengeConfigInfoDto> {
    return this._client._apiCall<ChallengeConfigInfoDto>({
      path: `/lol/challenges/v1/challenges/config`,
      region,
    });
  }

  /**
   * Map of level to percentile of players who have achieved it - keys: ChallengeId -> Season -> Level -> percentile of players who achieved it
   *
   * @param region Region to execute request to
   * @returns { Promise<ChallengesPercentileResponse> }
   */
  public async getPercentiles(region: Region): Promise<ChallengesPercentileResponse> {
    return this._client._apiCall<ChallengesPercentileResponse>({
      path: '/lol/challenges/v1/challenges/percentiles',
      region,
    });
  }

  /**
   * Get challenge configuration (REST)
   *
   * @param challengeId challenge identifier
   * @param region Region to execute request to
   * @returns { Promise<ChallengeConfigInfoDto> }
   */
  public async configById(challengeId: number, region: Region): Promise<ChallengeConfigInfoDto> {
    return this._client._apiCall<ChallengeConfigInfoDto>({
      path: `/lol/challenges/v1/challenges/${challengeId}/config`,
      region,
    });
  }

  /**
   * Return top players for each level. Level must be MASTER, GRANDMASTER or CHALLENGER.
   *
   * @param challengeId challenge identifier
   * @param level
   * @param region Region to execute request to
   * @returns { Promise<ApexPlayerInfoDto> }
   */
  public async leaderboardsByChallengeIdAndLevel(
    challengeId: number,
    level: number,
    region: Region,
  ): Promise<ApexPlayerInfoDto[]> {
    return this._client._apiCall<ApexPlayerInfoDto[]>({
      path: `/lol/challenges/v1/challenges/${challengeId}/leaderboards/by-level/${level}`,
      region,
    });
  }

  /**
   * Map of level to percentile of players who have achieved it
   *
   * @param challengeId challenge identifier
   * @param region Region to execute request to
   * @returns { Promise<ChallengerPercentilesResponse> }
   */
  public async getPercentilesWithId(challengeId: number, region: Region): Promise<ChallengerPercentilesResponse> {
    return this._client._apiCall<ChallengerPercentilesResponse>({
      path: `/lol/challenges/v1/challenges/${challengeId}/percentiles`,
      region,
    });
  }

  /**
   * Returns player information with list of all progressed challenges (REST)
   *
   * @param puuid encrypted puuid
   * @param region Region to execute request to
   * @returns
   */
  public async byPuuid(puuid: string, region: Region): Promise<PlayerInfoDto> {
    return this._client._apiCall<PlayerInfoDto>({
      path: `/lol/challenges/v1/player-data/${puuid}`,
      region,
    });
  }
}
