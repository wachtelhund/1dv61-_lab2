import axios from 'axios';
import { ClassResponse } from '../../types/character/classes/ClassesResponse';
import { CRUDService } from '../CRUDService';
import { Response } from '../../types/Response';
export class ClassService extends CRUDService<ClassResponse> {
  constructor() {
    super('https://www.dnd5eapi.co/api/classes');
  }

  async getClassFeatures(classIndex: string): Promise<Response> {
    return this.get('https://www.dnd5eapi.co/api/classes/' + classIndex + '/features');
  }

  async getClassProficiencies(classIndex: string): Promise<Response> {
    return this.get('https://www.dnd5eapi.co/api/classes/' + classIndex + '/proficiencies');
  }
}
