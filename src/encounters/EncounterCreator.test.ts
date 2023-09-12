import { EncounterCreator } from "./EncounterCreator";
import { MonsterResponse } from '../types/monsters/MonstersResponse';

test("getRandomMonsters returns a promise containing a random monster", async () => {
    const encounterCreator = new EncounterCreator();
    const encounter = await encounterCreator.getRandomMonsters();
    expect(encounter).toBeInstanceOf(Array<MonsterResponse>);
});