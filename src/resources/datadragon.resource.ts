import axios from 'axios';
import { BaseResource } from './base.resource';

export class DatadragonResource extends BaseResource {
  /**
   * Obtains list of datadragon versions
   *
   *
   * @returns { string[] } endpoint versions
   */
  public versions(): Promise<string> {
    return axios.get('https://ddragon.leagueoflegends.com/api/versions.json').then((data) => data.data);
  }

  /**
   * obtains runes reforged json file
   *
   */
  public runesReforged(version: string): Promise<string> {
    return axios
      .get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`)
      .then((data) => data.data);
  }

  /**
   * obtains summoner json file
   *
   */
  public summoner(version: string): Promise<string> {
    return axios
      .get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/summoner.json`)
      .then((data) => data.data);
  }
}
