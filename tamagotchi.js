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

}

let Oliver = new Tamagotchi('Oliver')
Oliver.greet()
Oliver.status()

// Do not edit below this line
module.exports = Tamagotchi;
