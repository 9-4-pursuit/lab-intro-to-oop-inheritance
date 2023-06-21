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
        if (this.sick === true) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log(`${this.name} does not think it needs medicine!`);
            this.energy -= 1;
        }
    }
    play() {
        if (this.sick === true) {
            this.mood -= 1;
            this.energy -= 1;
            console.log(`${this.name} is too sick to play and is now grumpier and tireder.`);
        } else if (this.mood > 9) {
            this.energy -= 2;
            this.full -= 1;
            console.log(`${this.name} will not play; its mood is too high!  Runs around some though.`);
        } else if (this.energy <= 3) {
            this.energy -= 1;
            console.log("I am too tired to play");
        } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
        }
    }
    sleep() {
        this.energy += 4;
        this.full -= 3;
        console.log(`Up and at 'em!  ${this.name} has awoken refreshed and hungry!`)
    }
    timePasses() {
        if (this.sick === false) {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        } else {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
    }
    badGuardian() {
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            this.rehomed = true;
        }
        console.log(`${this.name} has been rehomed!`)
    }
    //name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false
}
const hamzilla = new Tamagotchi("Hamzilla");
hamzilla.medicate();
console.log(hamzilla);
// Do not edit below this line
module.exports = Tamagotchi;
