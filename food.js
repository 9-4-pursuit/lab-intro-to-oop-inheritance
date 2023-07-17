// Create class below

class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name; //name || ''
        this.daysToSpoil = daysToSpoil; //might need to fix, looks uncalled
        this.fresh = fresh;
    }

    prepare() {
        console.log(`${this.name} is being prepared`);
    }

    isFresh() {
        if (this.isFresh = true) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }

        else {
            console.log(`${this.name} has spoiled.`)
        }
    }

    aDayPasses() {
        this.daysToSpoil--; // --

        //isFresh();

        //this.isFresh(); //might need to incorporate this. if no work 
    }
}

// Do not edit below this line
module.exports = Food;
