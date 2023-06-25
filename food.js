class Food {
    constructor(name, daysToSpoil, fresh = true){
        this.name = name || "banana";
        this.daysToSpoil = daysToSpoil || 10;
        this.fresh = fresh;
    }

    prepare() {
        console.log(`${this.name} is being prepared`);
    }

    isFresh() {
        if (this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        } else {
            console.log(`${this.name} has spoiled.`);
        }
    }

    aDayPasses(){
        this.daysToSpoil--; 
        this.isFresh();
    }
}

// Do not edit below this line
module.exports = Food;

// Create an instance and run each method at least once
let banana = new Food('Banana', 7);
banana
