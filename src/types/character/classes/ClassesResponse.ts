import { ResponseResult } from '../../Response';

export interface ClassResponse {
  index: string;
  name: string;
  hit_die: number;
  proficiencies: ResponseResult[];
  subclasses: ResponseResult[];
}
