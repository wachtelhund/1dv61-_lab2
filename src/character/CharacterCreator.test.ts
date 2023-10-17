import { CharacterCreator } from './CharacterCreator';
import { Character } from './Character';

test('getRandomCharacter returns a character', async () => {
  const characterCreator = new CharacterCreator();
  const character = await characterCreator.generateRandomizedCharacter();
  expect(character).toBeInstanceOf(Character);
});

test('getRandomCharacter with 0 spells and 2 features returns a character with no spells and two features', async () => {
  const characterCreator = new CharacterCreator();
  const character = await characterCreator.generateRandomizedCharacter(0, 2);
  expect(character.spells.count).toBe(0);
  expect(character.features.count).toBe(2);
});
