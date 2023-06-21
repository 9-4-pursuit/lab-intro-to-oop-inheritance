// Create class below

class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh
    }

    prepare() {
        console.log(`${this.name} is being prepared`)
    }


    isFresh() {
        if (this.daysToSpoil > 1) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        } else if (this.daysToSpoil === 1) {
            console.log(`There is 1 day left before ${this.name} spoils.`);
        } else if (this.daysToSpoil === 0) {
            console.log(`${this.name} has spoiled.`);
        }
    }


    aDayPasses() {
        this.daysToSpoil -= 1;
        this.isFresh();
      }
    
      simulateSpoiling() {
        while (this.daysToSpoil >= 0) {
          this.aDayPasses();
        }
      }
    }
    
    const icecream = new Food("icecream", 3, true);
    
    icecream.prepare();
    icecream.isFresh();
    icecream.simulateSpoiling(); 


// Do not edit below this line
module.exports = Food;
