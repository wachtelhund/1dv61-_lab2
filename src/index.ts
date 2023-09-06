import { AxiosRequestConfig } from "axios";
import { ClassesService } from "./services/classes/ClassService";
import { MonsterService } from "./services/monsters/MonsterService";

const monsterService = new MonsterService();

const monsters = monsterService.GetAll({params: {challenge_rating: 24}} as AxiosRequestConfig).then(monsters => {
    console.log(monsters);
});

const charService = new ClassesService();

const classes = charService.GetAll().then(classes => {
    console.log(classes);
});

