// Create class below
class Food {
    constructor(name, daysToSpoil, fresh) {
        this.name = name || ""
        this.daysToSpoil = daysToSpoil || 0
        this.fresh = fresh || true
    }

    prepare() {
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        console.log(this.daysToSpoil > 0 ? `There are ${this.daysToSpoil} days left before ${this.name} spoils.` : `${this.name} has spoiled.`)
    }

    aDayPasses() {
        this.daysToSpoil--
        this.isFresh()
    }

}


// Do not edit below this line
module.exports = Food;
