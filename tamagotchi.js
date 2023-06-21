// Create class below

class Tamagotchi {
    constructor(name, energy, full, mood, sick, rehomed) {
        this.name = name;
        this.energy = energy || 9;
        this.full = full || 8;
        this.mood = mood || 6;
        this.sick = sick || false;
        this.rehomed = rehomed || false;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }

    status() {
        console.log(`******************** \n
        My mood is: ${this.mood}\n
        I am this full: ${this.full}\n
        My energy is: ${this.energy}\n
        I am not sick`);
    }

    eat() {
        this.full += 2;
        this.energy--;
        console.log(this.full, this.energy);

        this.full > 10 ? this.sick = true : null;
    }

    medicate() {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            this.energy--;
            console.log(`${this.name} won't take medicine.`)
        };
    }

    play() {
        if (!this.sick && this.mood <= 9 && this.energy > 3) {
            this.mood += 2;
            this.energy--;
            this.full--;
        } else if (this.sick) {
            this.mood--;
            this.energy--;
        } else if (this.mood > 9) {
            this.energy -= 2;
            this.full--;
        } else if (this.energy <= 3) {
            this.energy--;
            console.log("I am too tired to play.")
        }
    }

    sleep() {
        this.energy += 4;
        this.full -= 3;
    }

    timePasses() {
        if (!this.sick) {
            this.mood -= 2;
            this.full--;
            this.energy--;
        } else {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
    }
    badGuardian() {
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = true;
        }
        console.log(`${this.name} has ben rehomed.`)
            
    }
}



// Do not edit below this line
module.exports = Tamagotchi;
