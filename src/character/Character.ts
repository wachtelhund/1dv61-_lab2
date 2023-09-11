import { Response, ResponseResult } from "../types/Response";
import { CharacterData } from "../types/character/CharacterData";
import { ClassResponse } from "../types/character/classes/ClassesResponse";
import { RaceResponse } from "../types/character/races/RaceResponse";

export class Character {
    private character: CharacterData;
    constructor(character: CharacterData) {
        this.character = character;
    }

    geCharacter(): CharacterData {
        return this.character;
    }

    get race(): RaceResponse {
        return this.character.race;
    }

    get class(): ClassResponse {
        return this.character.class;
    }

    get spells(): Response {
        return this.character.spells;
    }

    get proficiencies(): ResponseResult[] {
        return this.character.proficiencies;
    }
}