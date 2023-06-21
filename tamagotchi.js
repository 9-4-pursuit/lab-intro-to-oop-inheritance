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
        const star = '*';
        console.log(`${star.repeat(20)}\nMy mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}\nI am ${this.sick ? "sick" : "not sick"}\n${star.repeat(20)}`)
    }
    eat() {
        this.full += 2;
        this.energy -= 1;
        if (this.full > 10) {
            this.sick = true;
        }
    }
    medicate() {
        if (this.sick = true) {
            this.full = 9;
            this.energy -= 3;
        } else {
            console.log(`${this.name} does not think it needs medicine!`);
            this.energy -= 1;
        }
    }
}
const hamzilla = new Tamagotchi("Hamzilla");
hamzilla.greet();
hamzilla.status();
// Do not edit below this line
module.exports = Tamagotchi;
