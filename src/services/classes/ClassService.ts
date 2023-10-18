import { ClassResponse } from '../../types/character/classes/ClassesResponse';
import { CRUDService } from '../CRUDService';
import { Response } from '../../types/Response';
export class ClassService extends CRUDService<ClassResponse> {
  constructor() {
    super('https://www.dnd5eapi.co/api/classes');
  }

  /**
   * Gets class features
   * @param {string} classIndex - Class index, e.g. 'wizard'
   * @returns {Promise<Response>} class features 
   */
  async getClassFeatures(classIndex: string): Promise<Response> {
    return this.get(
      'https://www.dnd5eapi.co/api/classes/' + classIndex + '/features',
    )
    .catch(error => {
      throw new Error('Could not get class features');
    });
  }
}
