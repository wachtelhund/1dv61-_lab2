import { log } from "console";
import { MonsterService } from "../services/monsters/MonsterService";
import { MonsterResponse } from "../types/monsters/MonstersResponse";

export class EncounterCreator {
    private monsterService: MonsterService = new MonsterService();

    constructor() {}

    async getRandomMonsters(numberOfMonsters: number = 1, challengeRating: number | null = null): Promise<MonsterResponse[]> {
        const monsters = await this.monsterService.getAll({params: {challenge_rating: challengeRating}})
        const randomMonsters: MonsterResponse[] = [];
        for (let i = 0; i < numberOfMonsters; i++) {
            let random = Math.floor(Math.random() * monsters.count);
            let monsterIndex = monsters.results[random]?.index;
            if (monsterIndex) {
                const monster = await this.monsterService.getOne(monsterIndex);
                randomMonsters.push(monster);
            }
        }
        return randomMonsters;
    }


}