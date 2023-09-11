import { EncounterCreator } from './encounters/EncounterCreator';
import { SpellService } from './services/spells/SpellsService';

export { EncounterCreator }

const spellService = new SpellService();

spellService.getClassSpells('paladin').then(spells => {
    console.log(spells);
});

spellService.getOne('acid-arrow').then(spell => {
    console.log(spell);
});


