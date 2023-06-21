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
}

const hercules = new Tamagotchi('Hercules');

hercules.status()

// Do not edit below this line
module.exports = Tamagotchi;
