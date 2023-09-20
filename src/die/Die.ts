export class Die {
    private sides: number;
    private value!: number;
    constructor(sides: number = 20) {
        if (this.isValidSides(sides)) {
            this.sides = sides;
        } else {
            this.sides = 20;
        }
        this.roll();
    }

    private isValidSides(sides: number): boolean {
        return this.sides > 0 && this.sides <= 20;
    }
    
    roll(): number {
        this.value = Math.floor(Math.random() * this.sides) + 1;
        return this.value;
    }

    rollMultiple(times: number = 2): number[] {
        if (times < 1 || times > 100) {
            throw new Error('Invalid number of rolls, must be between 1 and 100');
        }
        const rolls: number[] = [];
        for (let i = 0; i < times; i++) {
            rolls.push(this.roll());
        }
        this.value = rolls[rolls.length - 1] || this.value;
        return rolls;
    }

    getSides(): number {
        return this.sides;
    }

    getValue(): number {
        return this.value;
    }

    toString(): string {
        return `${this.value}d${this.sides}`;
    }

    toJSON(): { value: number; sides: number } {
        return {
            value: this.value,
            sides: this.sides,
        };
    }
}