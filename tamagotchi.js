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
            this.sick = false
        }else {
            console.log('I dont want medicine')
            this.energy--
        }
    }

    sleep() {
        this.energy += 4
        this.full -= 3

    }
    
    timePasses() {
        if(this.sick === true) {
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        }else {
            this.mood -= 2
            this.full -= 1
            this.energy -= 1
        }
    }

    play() {

        if(this.sick === true){
            this.mood--
            this.energy--
        }else if(this.mood > 9) {
            this.energy -= 2
            this.full--
        }else if(this.energy <= 3) {
            this.energy--
            console.log('I am too tired to play')
        }else {
            this.mood += 2
            this.energy--
            this.full--

        }

    }

    badGuardian() {
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = true
            console.log('has been removed')
        }
    
    }
}

module.exports = Tamagotchi;

// const pika = new Tamagotchi ('Pikachu')
// const elias = new Tamagotchi ('Elias', 0, 4, 3, false, false) 
// console.log(pika.timePases())
// console.log(pika)
// console.log(elias.badGuardian())
// console.log(elias)





