import axios from 'axios';
import { BaseResource } from './base.resource';

export class DatadragonResource extends BaseResource {
  /**
   * Obtains list of datadragon versions
   *
   * @example
   * // returns "v4"
   *
   * @returns { string } endpoint version
   */
  public versions(): Promise<string> {
    return axios.get('https://ddragon.leagueoflegends.com/api/versions.json').then((data) => data.data);
  }
}
