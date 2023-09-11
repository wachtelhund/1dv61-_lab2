import axios from 'axios';
import { SpellResponse } from '../../types/spells/SpellsResponse';
import { CRUDService } from '../CRUDService';
export class SpellService extends CRUDService<SpellResponse> {
  constructor() {
    super('https://www.dnd5eapi.co/api/spells');
  }

  async getClassSpells(classIndex: string): Promise<SpellResponse[]> {
    return axios
      .get(`https://www.dnd5eapi.co/api/classes/${classIndex}/spells`)
      .then(response => {
        return response.data as unknown as Promise<SpellResponse[]>;
      })
      .then(data => {
        return data;
      });
  }
}