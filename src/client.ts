import axios, { AxiosError, AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

import { isNode, pick } from './utilts';
import type { StatusError } from './models';

import { SummonerResource, LeagueResource, MatchResource } from './resources';
import { Region } from './types';
import { regionMap } from './models';

export type RiotErrorResponse = {};
const allowedAxiosOptions = ['headers', 'timeout', 'proxy', 'retries'] as const;
export type GenericApiResponse = RiotErrorResponse | StatusError | { status: 200; data: any };
export type DahvidClientConfig = {
  /**
   * apiKey is required to make requests to the riot API
   */
  apiKey: string;

  /**
   * Default region to apply if invalid region is provided
   *
   * @defaultvalue `oc1`
   */
  defaultRegion?: Region;

  /**
   * Additional headers that will be included in each request.
   */
  headers?: Record<string, string>;

  /**
   * Max amount of requests that will be fired within a 2
   * minute period, if it exceeds this it will throttle.
   *
   * @defaultvalue `100`
   */
  timeout?: number;

  /**
   * The number of times
   */
  retries?: number;

  /**
   * Optional configuration for an HTTP proxy
   *
   * {@link https://axios-http.com/docs/req_config request config}
   */
  proxy?: {
    host: string;
    port: number;
    auth?: {
      username: string;
      password: string;
    };
    protocol?: string;
  };
};

/**
 * Based off the Akahu API's SDK, all credit goes to them when due.
 * https://github.com/akahu-io/akahu-sdk-js
 *
 * @category API client
 */
export class DahvidClient {
  private readonly axios: AxiosInstance;
  /** @internal */
  private readonly authToken: string;
  private readonly defaultRegion: string;

  /**
   * @category Resource
   * @inheritDoc SummonerResource
   */
  summoner: SummonerResource;

  /**
   * @category Resource
   * @inheritDoc LeagueResource
   */
  league: LeagueResource;

  /**
   * @category Resource
   * @inheritDoc MatchResource
   */
  match: MatchResource;

  constructor(config: DahvidClientConfig) {
    if (!isNode()) {
      throw new Error(
        'For security reasons please only run DahvidClient on server-side applications. (running on client-side)',
      );
    }

    const { apiKey, defaultRegion, ...axiosOptions } = config;
    this.authToken = apiKey;
    this.defaultRegion = defaultRegion || 'oc1';

    const filteredAxiosOptions = pick<AxiosRequestConfig>(axiosOptions, ...allowedAxiosOptions);

    this.axios = axios.create({
      baseURL: 'https://REGION.api.riotgames.com',
      headers: { ...config.headers, ...filteredAxiosOptions.headers },
    } as AxiosRequestConfig);

    this.summoner = new SummonerResource(this);
    this.league = new LeagueResource(this);
    this.match = new MatchResource(this);
  }

  private _authorizeRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...config,
      headers: {
        ...config.headers,
        'X-Riot-Token': this.authToken,
      },
    };
  }

  private _applyRegion(config: AxiosRequestConfig, region: Region): AxiosRequestConfig {
    const _region = regionMap[region] || regionMap[this.defaultRegion];
    const baseUrl = 'https://REGION.api.riotgames.com'.replace('REGION', _region);

    return {
      ...config,
      baseURL: baseUrl,
    };
  }

  /**
   * @internal
   */
  async _apiCall<T extends GenericApiResponse>({
    path,
    region,
    method = 'GET',
    query,
    data,
  }: {
    path: string;
    region: Region;
    method?: 'GET' | 'POST';
    query?: Record<string, any>;
    data?: any;
    auth?: string;
  }): Promise<T> {
    let requestConfig: AxiosRequestConfig = {
      url: path,
      method,
      params: query,
      data,
    };

    requestConfig = this._authorizeRequest(requestConfig);
    requestConfig = this._applyRegion(requestConfig, region);

    let response: AxiosResponse;

    try {
      response = await this.axios(requestConfig);
    } catch (e) {
      const err = e as AxiosError;

      if (typeof err.response !== 'undefined') {
        throw err;
      }

      throw err;
    }

    return response.data;
  }
}
