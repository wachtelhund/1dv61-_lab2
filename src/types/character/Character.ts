import { ClassResponse } from "./classes/ClassesResponse";
import { RaceResponse } from "./races/RacesResponse";

export interface Character {
    class: ClassResponse;
    race: RaceResponse;
}