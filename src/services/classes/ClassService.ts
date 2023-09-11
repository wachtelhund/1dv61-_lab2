import axios from 'axios';
import { ClassResponse } from '../../types/classes/ClassesResponse';
import { CRUDService } from '../CRUDService';
export class ClassesService extends CRUDService<ClassResponse> {
  constructor() {
    super('https://www.dnd5eapi.co/api/classes');
  }
}
