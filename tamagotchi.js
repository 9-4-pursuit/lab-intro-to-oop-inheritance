// Create class below
class Tamagotchi {
    constructor(name, energy, full, mood, sick, rehomed) {
        this.name = name
        this.energy = energy || 9
        this.full = full || 8
        this.mood = mood || 6
        this.sick = sick || false
        this.rehomed = rehomed || false
    }

    greet() {
        console.log(`Hello, I'm ${this.name}!`)
    }

    status() {
        console.log(
            `My mood is: ${this.mood}
            I am this full: ${this.full}
            My energy is: ${this.energy}
            ${this.sick ? 'I am not sick' : 'I am sick'} `
        )
    }

    eat() {
        this.full++
        this.full++
        this.energy--
        (this.full > 10 ? this.sick = true : this.sick)
    }

    medicate() {
        if (this.sick) {
            this.full = 9
            this.energy = this.energy - 3
            this.sick = false
        } else {
            console.log('refusal to take medicine')
            this.energy--
        }
    }

    play() {
        if (this.sick == false && this.mood <= 9 && this.energy > 3) {
            this.mood += 2
            this.energy--
            this.full--
        } else if (this.sick) {
            this.mood--
            this.energy--
        } else if (this.mood > 9) {
            this.energy -= 2
            this.full--
        } else if (this.energy <= 3) {
            console.log("I am too tired to play")
            this.energy--
        }

    }

    sleep() {
        this.energy += 4
        this.full -= 3
    }

    timePasses() {
        if (this.sick) {
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        } else {
            this.mood -= 2
            this.full--
            this.energy--
        }
    }
    badGuardian() {
        console.log(this.rehomed ? `${this.name} has been rehomed` : null)
        this.energy <= 0 ? this.rehomed = true : this.rehomed
        this.mood <= 0 ? this.rehomed = true : this.rehomed
        this.full <= true ? this.rehomed = true : this.rehomed
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
