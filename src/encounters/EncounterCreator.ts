import { MonsterService } from "../services/monsters/MonsterService";
import { MonsterResponse } from "../types/monsters/MonstersResponse";

export class EncounterCreator {
    private monsterService: MonsterService = new MonsterService();

    constructor() {}

    async getRandomMonsters(challengeRating: number, numberOfMonsters: number): Promise<MonsterResponse[]> {
        const monsters = await this.monsterService.getAll({params: {challenge_rating: challengeRating}})
            if (monsters && monsters.results && monsters.results.length > 0) {
                for (let i = 0; i < numberOfMonsters; i++) {
                    let random = Math.floor(Math.random() * monsters.count);
                    let monsterResult = monsters.results
                    if (monsterResult[random]) {
                        monsterResult[random].name                   
                    }
                }
            }
            
    }


}