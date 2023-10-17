import { Size } from './Size';
export interface MonsterResponse {
  index: string;
  name: string;
  desc: string[];
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number;
  image: string | null;
  size: Size;
  type: string;
  challenge_rating: number;
  url: string;
}
