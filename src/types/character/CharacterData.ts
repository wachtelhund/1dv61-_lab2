import { Response, ResponseResult } from '../Response';
import { ClassResponse } from './classes/ClassesResponse';
import { RaceResponse } from './races/RaceResponse';

export interface CharacterData {
  class: ClassResponse;
  race: RaceResponse;
  spells: Response;
  proficiencies: ResponseResult[];
  features: Response;
  subclass: ResponseResult;
}
