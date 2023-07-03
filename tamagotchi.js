// Create class below
class Tamagotchi{
    constructor(name, energy, full, mood, sick, rehomed){
        this.name = name
        this.energy = energy
        this.full = full
        this.mood = mood
        this.sick = false
        this.rehomed = false
    }
    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }

    status(){
        console.log(`My mood is: ${this.mood}, I am this full: ${this.full}, My energy is: ${this.energy} and I am ${this.sick ? "sick" : "not sick"}`)
    }

    eat(){
        if (this.full < 8){
            this.full += 1
            this.mood += 1
            console.log(`${this.name} is eating`)
        } else {
            console.log(`${this.name} is full`)
        }
    }

    medicate() {
        if (this.sick === true){
            this.full = 9;
            this.energy -= 3
        }else{
            console.log(`${this.name}, refused to take medicine.`)
            this.energy -= 1
        }
    }

    play(){
        if (this.sick === true){
            console.log(`${this.name} is sick and does not want to play.`)
            this.mood -= 1
            this.energy -=1
        }else if (this.mood > 9){
            console.log(`${this.name} is happy and does not want to play.`)
            this.energy -= 2
            this.full -=1
        }else if (this.energy <=3) {
            console.log(`${this.name} is too tired to play`)
            this.energy -= 1
        }
    }

    sleep() {
        if (this.energy < 9) {
            this.energy += 4
            this.full -= 3
            console.log(`${this.name} is sleeping`)
        }else {
            console.log(`${this.name} is not tired`)
        }
    }

        timePasses(){
            if (this.sick !== true){
                this.mood -= 2
                this.full -= 1
                this.energy -= 1
            } else{
                this.mood -= 3
                this.full -= 2
                this.energy -= 2
            }
        }

        badGuardian() {
            console.log(`${this.name} has been rehomed.`)
            if (this.energy <= 0 || this.full <= 0 || this.mood <= 0){
                this.rehomed = true
            }
        }
}


// Do not edit below this line
module.exports = Tamagotchi;
