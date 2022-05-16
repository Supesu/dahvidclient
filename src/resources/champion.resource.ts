import { ChampionInfo } from '../models';
import { BaseResource } from './base.resource';
import { createstringOfLength, Region, stringOfLength } from '../types';

export class ChampionResource extends BaseResource {
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
   * Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST)
   *
   * @param region Region to execute request to
   * @returns { Promise<ChampionInfo> }
   */
  public async championRotations(region: Region): Promise<ChampionInfo> {
    return this._client._apiCall<ChampionInfo>({
      path: '/lol/platform/v3/champion-rotations',
      region,
    });
  }
}
