import { ClassService } from '../services/classes/ClassService';
import { RaceService } from '../services/races/RaceService';
import { SpellService } from '../services/spells/SpellService';
import { Response } from '../types/Response';
import { CharacterData } from '../types/character/CharacterData';
import { Character } from './Character';

export class CharacterCreator {
  private spellService: SpellService;
  private classService: ClassService;
  private raceService: RaceService;
  constructor() {
    this.spellService = new SpellService();
    this.classService = new ClassService();
    this.raceService = new RaceService();
  }

  /**
   * Generates randomized character
   * @param {number} [numberOfSpells] 
   * @param {number} [numberOfFeatures] 
   * @returns {Promise<Character>} randomized character 
   */
  async generateRandomizedCharacter(
    numberOfSpells = 4,
    numberOfFeatures = 2,
  ): Promise<Character> {
    try {
      const race = await this.raceService.getRandom();
      const classData = await this.classService.getRandom();

      const spells = await this.getRandomSpells(classData.index, numberOfSpells);
      const features = await this.getRandomFeatures(
        classData.index,
        numberOfFeatures,
      );
      const randomSubclass =
        classData.subclasses[
          Math.floor(Math.random() * classData.subclasses.length)
        ];

      const charData = {
        race,
        class: classData,
        subclass: randomSubclass,
        spells,
        proficiencies: classData.proficiencies,
        features,
      } as CharacterData;
      return new Character(charData);
    } catch (error: any) {
      throw new Error('Character could not be generated: ' + error.message); 
    }
  }

  /**
   * Gets random spells
   * @param {string} [classIndex] - Class index, e.g. 'wizard'
   * @param {number} [numberOfSpells] 
   * @returns {Promise<Response>} random spells 
   */
  async getRandomSpells(
    classIndex: string,
    numberOfSpells: number = 4,
  ): Promise<Response> {
    try {
      const spells = await this.spellService.getClassSpells(classIndex);
      const randomSpells: Response = {
        count: 0,
        results: [],
      };
      const amountOfSpells =
        spells.count > numberOfSpells ? numberOfSpells : spells.count;
      for (let i = 0; i < amountOfSpells; i++) {
        const random = Math.floor(Math.random() * spells.count);
        const spell = spells.results[random];
        if (spell) {
          randomSpells.results.push(spell);
          randomSpells.count++;
        }
      }
      return randomSpells;
    } catch (error) {
      throw new Error('Random spells could not be retrieved'); 
    }
  }

  /**
   * Gets random features
   * @param {string} [classIndex] - Class index, e.g. 'wizard'
   * @param {number} [numberOfFeatures] 
   * @returns {Promise<Response>} random features 
   */
  async getRandomFeatures(
    classIndex: string,
    numberOfFeatures: number = 4,
  ): Promise<Response> {
      try {
      const features = await this.classService.getClassFeatures(classIndex);
      const randomFeatures: Response = {
        count: 0,
        results: [],
      };

      const amountOfFeatures =
        features.count > numberOfFeatures ? numberOfFeatures : features.count;
      for (let i = 0; i < amountOfFeatures; i++) {
        const random = Math.floor(Math.random() * features.count);
        const feature = features.results[random];
        if (feature) {
          randomFeatures.results.push(feature);
          randomFeatures.count++;
        }
      }
      return randomFeatures;
    } catch (error) {
      throw new Error('Random features could not be retrieved'); 
    }
  }
}
