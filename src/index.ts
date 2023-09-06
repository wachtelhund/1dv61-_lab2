import { MonsterService } from "./services/monsters/MonsterService";

const monsterService = new MonsterService();

const monsters = monsterService.GetAll().then(monsters => {
    console.log(monsters);
});