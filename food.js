// Create class below

class Food {
    constructor(name, daysToSpoil) {
      this.name = name;
      this.daysToSpoil = daysToSpoil;
      this.fresh = true;
    }
  
    prepare() {
      console.log(`Preparing ${this.name}...`);
    }
  
    isFresh() {
      if (this.daysToSpoil > 0) {
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
      } else {
        console.log(`${this.name} has spoiled.`);
      }
    }
  
    aDayPasses() {
      this.daysToSpoil -= 1;
      this.isFresh();
    }
  }

  // Create a new instance of Food
const iceCream = new Food('Ice Cream', 3);

// Call the prepare method
iceCream.prepare(); // Output: Preparing Ice Cream...

// Call the isFresh method
iceCream.isFresh(); // Output: There are 3 days left before Ice Cream spoils.

// Call the aDayPasses method
iceCream.aDayPasses(); // Output: There are 2 days left before Ice Cream spoils.


module.exports = Food;
