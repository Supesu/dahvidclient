import { ClashPlayerDto, ClashTeamDto, ClashTournamentDto } from '../models';
import { createstringOfLength, Region, stringOfLength } from '../types';
import { BaseResource } from './base.resource';

export class ClashResource extends BaseResource {
  private readonly ENDPOINT_VERSION: stringOfLength<2> = createstringOfLength('v1', 2);

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
   * Get players by summoner ID.
   *
   * @param summonerId Summoner identifier
   * @param region Region to execute request to
   * @returns { Promise<ClashTournamentDto> }
   */
  public async playerBySummonerId(summonerId: string, region: Region): Promise<ClashPlayerDto> {
    return await this._client._apiCall<ClashPlayerDto>({
      path: `/lol/clash/v1/players/by-summoner/${summonerId}`,
      region,
    });
  }

  /**
   * Get team by ID.
   *
   * @param teamId Team identifier
   * @param region Region to execute request to
   * @returns { Promise<ClashTeamDto> }
   */
  public async teamById(teamId: string, region: Region): Promise<ClashTeamDto> {
    return await this._client._apiCall<ClashTeamDto>({
      path: `/lol/clash/v1/teams/${teamId}`,
      region,
    });
  }

  /**
   * Get all active or upcoming tournaments.
   *
   * @param region Region to execute request to
   * @returns { Promise<ClashTournamentDto> }
   */
  public async tournaments(region: Region): Promise<ClashTournamentDto> {
    return await this._client._apiCall<ClashTournamentDto>({
      path: `/lol/clash/v1/tournaments`,
      region,
    });
  }

  /**
   * Get tournament by team ID.
   *
   * @param teamId Team Identifier
   * @param region Region to execute request to
   * @returns { Promise<ClashTournamentDto> }
   */
  public async tournamentByTeamId(teamId: string, region: Region): Promise<ClashTournamentDto> {
    return await this._client._apiCall<ClashTournamentDto>({
      path: `/lol/clash/v1/tournaments/by-team/${teamId}`,
      region,
    });
  }

  /**
   * Get tournament by ID
   *
   * @param tournamentId Tournament Identifier
   * @param region Region to execute request to
   * @returns { Promise<ClashTournamentDto> }
   */
  public async tournamentById(tournamentId: string, region: Region): Promise<ClashTournamentDto> {
    return await this._client._apiCall<ClashTournamentDto>({
      path: `/lol/clash/v1/tournaments/${tournamentId}`,
      region,
    });
  }
}
