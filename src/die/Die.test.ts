import { Die } from './Die';

test('roll returns a number between 1 and the number of sides', () => {
    const die = new Die();
    const roll = die.roll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(die.getSides());
});

test('rollMultiple returns an array of numbers between 1 and the number of sides', () => {
    const die = new Die();
    const rolls = die.rollMultiple();
    expect(rolls).toHaveLength(2);
    rolls.forEach((roll) => {
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(die.getSides());
    });
});

test('toString returns a string in the format of "XdY"', () => {
    const die = new Die();
    const dieString = die.toString();
    expect(dieString).toMatch(/\d+d\d+/);
});

test('toJSON returns an object with the value and sides', () => {
    const die = new Die();
    const dieJSON = die.toJSON();
    expect(dieJSON).toHaveProperty('value');
    expect(dieJSON).toHaveProperty('sides');
    expect(dieJSON.value).toBe(die.getValue());
    expect(dieJSON.sides).toBe(die.getSides());
});