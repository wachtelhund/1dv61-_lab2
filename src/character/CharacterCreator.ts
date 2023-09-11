import { ClassService } from "../services/classes/ClassService";
import { RaceService } from "../services/races/RaceService";
import { SpellService } from "../services/spells/SpellService";
import { Character } from "../types/character/Character";

export class CharacterCreator {
    private spellService: SpellService;
    private classService: ClassService;
    private raceService: RaceService;
    constructor() {
        this.spellService = new SpellService();
        this.classService = new ClassService();
        this.raceService = new RaceService();
    }

    async getRandomCharacter(): Promise<Character> {
        const race = await this.raceService.getRandom();
        const classData = await this.classService.getRandom();
        return {
            race,
            class: classData,
        } as Character;
    }
}