// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`)
    }

    status() {
        let sicky = ""

        if(this.sick === false){
            sicky = 'I am not sick'
        }else {
            sicky = 'I am sick'
        }

        console.log(`My mood is: ${this.mood}`)
        console.log(`I am this full: ${this.full}`)
        console.log(`My energy is: ${this.energy}`)
        console.log(sicky)
    }
    
    eat() {
        this.full += 2
        this.energy--

        if(this.full > 10){
            this.sick = true
        }
    }

    medicate() {
        if(this.sick === true) {
            this.full = 9
            this.energy -= 3
        }else {
            console.log('I dont want medicine')
            this.energy--
        }
    }

    sleep() {
        this.energy += 4
        this.full -= 3

    }
    
    timePases() {
        if(this.sick === true) {
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        }else {
            this.mood -= 2
            this.full -= 2
            this.energy -= 2
        }
    }
}

const pika = new Tamagotchi ('Pikachu')
console.log(pika.timePases())
console.log(pika)



