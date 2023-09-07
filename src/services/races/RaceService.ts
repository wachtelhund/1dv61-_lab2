import { RaceResponse, RacesResponse } from '../../types/races/RacesResponse';
import { CRUDService } from '../CRUDService';
// https://www.dnd5eapi.co/api/monsters?challenge_rating=1
export class RaceService extends CRUDService<RacesResponse, RaceResponse> {
  constructor() {
    super('https://www.dnd5eapi.co/api/races');
  }
}
