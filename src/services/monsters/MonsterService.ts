import { MonsterResponse } from '../../types/monsters/MonstersResponse';
import { CRUDService } from '../CRUDService';
export class MonsterService extends CRUDService<MonsterResponse> {
  constructor() {
    super('https://www.dnd5eapi.co/api/monsters');
  }
}
