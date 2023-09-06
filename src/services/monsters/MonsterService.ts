import axios from "axios";
import { MonsterResponse, MonstersResponse } from "../../types/monsters/MonstersResponse";
import { CRUDService } from "../CRUDService";
// https://www.dnd5eapi.co/api/monsters?challenge_rating=1
export class MonsterService extends CRUDService<MonstersResponse, MonsterResponse> {
    constructor() {
        super("https://www.dnd5eapi.co/api/monsters");
    }
}