import {
  ClassResponse,
  ClassesResponse,
} from '../../types/classes/ClassesResponse';
import { CRUDService } from '../CRUDService';
// https://www.dnd5eapi.co/api/monsters?challenge_rating=1
export class ClassesService extends CRUDService<
  ClassesResponse,
  ClassResponse
> {
  constructor() {
    super('https://www.dnd5eapi.co/api/classes');
  }
}
