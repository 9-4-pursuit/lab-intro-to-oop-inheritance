// Create class below

class Food { 
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }

    prepare() {
        return console.log(`${this.name} is being prepared`);
    }

    isFresh() {
        if (this.fresh) {
            return console.log(`There are ${this.daysToSpoil} left before ${this.name} spoils.`)
        } else {
            return console.log(`${this.daysToSpoil} or less days left, Item has spoiled.`)
        }

        
    }

    aDayPasses() {
        this.daysToSpoil -= 1;
    }
}

// Do not edit below this line
module.exports = Food;
