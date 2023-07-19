// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet() {
        return console.log(`Hello, I'm ${this.name}`)
    }

    status() {
        return console.log(`📊 Status 📊\n--------------\nMy mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}\n${this.sick ? `I am sick` : `I am not sick`}\n--------------`)
    }

    eat(){
        this.full += 2;
        this.energy -=1;
        if(this.full >= 10 ) {
            this.sick = true;
        }
    }

    medicate() {
        if(this.sick) {
            this.sick = false
            this.full = 9;
            this.energy -= 3;
        }
    }

    isFresh() {

        console.log(this.isFresh)
    }

    play() {
        if(this.sick) {
            this.mood -= 1;
            this.energy -= 1;
        } 
        else if (this.energy <= 3) {
            this.energy -= 1
            console.log("I am too tired to play")
        } 
        else if (this.mood > 9) {
            this.energy -= 2;
            this.full -= 1;
        } 
        else {
            this.mood += 2
            this.energy -+ 1
        }
    }

    sleep() {
        this.energy += 4;
        this.full -= 3;
    }

    timePasses() {
        if (!this.sick) {
            this.mood -= 2
            this.full -= 1
            this.energy -= 1
        }
    }

    badGuardian() {
    
        if(this.energy <= 0){
            this.rehomed = true
        }

        if(this.mood <= 0) {
            this.rehomed = true
        }

        if (this.full <= true) {
            this.rehomed = true
        }
    }

    eat() {
        this.full += 2;
        this.energy -= 1;
        if( this.full > 10) {
            this.sick = true
        }
    }
}

let Oliver = new Tamagotchi('Oliver')


Oliver.status()

// Do not edit below this line
module.exports = Tamagotchi;
