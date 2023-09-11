import { RaceResponse } from '../../types/character/races/RaceResponse';
import { CRUDService } from '../CRUDService';
export class RaceService extends CRUDService<RaceResponse> {
  constructor() {
    super('https://www.dnd5eapi.co/api/races');
  }
}
