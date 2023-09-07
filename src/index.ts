import { AxiosRequestConfig } from 'axios';
import { ClassesService } from './services/classes/ClassService';
import { MonsterService } from './services/monsters/MonsterService';
import { RaceService } from './services/races/RaceService';
import { log } from 'console';
import { EncounterCreator } from './encounters/EncounterCreator';

const creator = new EncounterCreator();

creator.getRandomMonsters(24, 1);
