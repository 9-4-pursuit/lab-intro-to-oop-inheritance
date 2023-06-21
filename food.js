// Create class below

class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }

    prepare() {
        // prepare: console logs the food name is being prepared
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        // this.fresh ? console.log(`There are ${this.daysToSpoil} days before ${this.name} spoils.`) : console.log(`${this.name} has spoiled`)

        if (this.fresh === true) {
            console.log(`There are ${this.daysToSpoil} days before ${this.name} spoils.`)
        }else {
            console.log(`${this.name} has spoiled`)
        }
    }

    aDayPasses() {
        this.daysToSpoil--;
        this.isFresh()
    }
}

const platano = new Food('Platanos', 4)


// Do not edit below this line
module.exports = Food;
