// Create class below

class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }

    status() {
        console.log(`My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}`);
        this.sick ? console.log('I am sick') : console.log('I am not sick');
    }

    eat() {
        this.energy--;
        this.full += 2;
        this.full > 10 ? this.sick = true : null;
    }

    medicate() {
        if (this.sick) {
            this.sick = false;
            this.full = 9;
            this.energy -= 3;
        } else {
            console.log('refusal to take medicine');
            this.energy--;
        }
    }

    play() {
        if (this.sick) {
            this.mood--;
            this.energy--;
        } else if (this.mood > 9) {
            this.energy -= 2;
            this.full--;
        } else if (this.energy < 4) {
            console.log('I am too tired to play');
            this.energy--;
        }
    }
}

const hercules = new Tamagotchi('Hercules');

hercules.greet();
hercules.status();
hercules.eat();
hercules.medicate();

// Do not edit below this line
module.exports = Tamagotchi;
