import { ClassResponse } from '../../types/character/classes/ClassesResponse';
import { CRUDService } from '../CRUDService';
export class ClassService extends CRUDService<ClassResponse> {
  constructor() {
    super('https://www.dnd5eapi.co/api/classes');
  }
}
