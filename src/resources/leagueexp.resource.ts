import { LeagueEntryDTO, Queue, Tier, ApexTier, Division } from '../models';
import { createstringOfLength, Region, stringOfLength } from '../types';
import { BaseResource } from './base.resource';

/**
 * At the request of a GitHub issue, we've added an experimental
 * league-exp-v4 endpoint. This new endpoint is a duplicate of the endpoint 
 * in league-v4, but it also supports the apex tiers (Challenger, Grandmaster, and Master).
 * In November we'll evaluate whether this endpoint delivers enough value to merit its continual support.
 */
export class LeagueExpResource extends BaseResource {
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
   * Get all the league entries.
   *
   * @param queue Queue filter
   * @param tier Tier filter
   * @param division Division filter
   * @param region Region to execute request against
   * @returns { Promise<LeagueEntryDTO> }
   */
  public async entries(
    queue: Queue,
    tier: Tier | ApexTier,
    division: Division,
    region: Region,
  ): Promise<LeagueEntryDTO> {
    return await this._client._apiCall<LeagueEntryDTO>({
      path: `/lol/league-exp/v4/entries/${queue}/${tier}/${division}`,
      region,
    });
  }
}
