import { BaseResource } from './base.resource';
import { AccountDto, ActiveShardDto, AccountContinent } from '../models';
import { createstringOfLength, stringOfLength } from '../types';

/**
 * Utilities to help
 *
 * @category Resource
 */
export class AccountResource extends BaseResource {
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
   * Obtain account information based off puuid.
   *
   * @param puuid Identifier for account
   * @param region Region to execute request to
   * @returns { Promise<AccountDto> }
   */
  public async byPuuid(puuid: string, region: AccountContinent): Promise<AccountDto> {
    return await this._client._apiCall<AccountDto>({
      path: `/riot/account/v1/accounts/by-puuid/${puuid}`,
      region,
    });
  }

  /**
   * Obtain account information based off riotId
   *
   * @param { string } gameName name of user
   * @param { string } tagLine tag of said user
   * @param { AccountContinent } region Region to execute request to
   * @returns { Promise<AccountDto> }
   */
  public async byRiotId(gameName: string, tagLine: string, region: AccountContinent): Promise<AccountDto> {
    return await this._client._apiCall<AccountDto>({
      path: `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
      region,
    });
  }

  /**
   * 
   * @param { string } game 
   * @param { string } puuid 
   * @param { AccountContinent } region Region to execute request to
   * @returns { Promise<ActiveShardDto> }
   */
  public async shardByGameAndPuuid(game: string, puuid: string, region: AccountContinent): Promise<ActiveShardDto> {
    return await this._client._apiCall<ActiveShardDto>({
      path: `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}`,
      region,
    });
  }

  /**
   * @deprecated Dahvidclient does not support this method any longer and should not be called
   */
  public async me() {
    throw new Error("DahvidClient no longer supports account.me() please don't call this method");
  }
}
