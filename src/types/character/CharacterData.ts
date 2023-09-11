import { Response } from "../Response";
import { ClassResponse } from "./classes/ClassesResponse";
import { RaceResponse } from "./races/RaceResponse";
import { SpellResponse } from "./spells/SpellsResponse";

export interface CharacterData {
    class: ClassResponse;
    race: RaceResponse;
    spells: Response;
    proficiencies: Response;
    features: Response;
}