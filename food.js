// Create class below
class Food {
    constructor(name, daysToSpoil) {
      this.name = name;
      this.daysToSpoil = daysToSpoil;
      this.fresh = true;
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
  
    aDayPasses() {
      this.daysToSpoil -= 1;
      this.isFresh();
    }
  }
  
  // Example usage:
  
  const iceCream = new Food("Ice Cream", 3);
  iceCream.prepare(); // Output: Preparing Ice Cream...
  iceCream.isFresh(); // Output: There are 3 days left before Ice Cream spoils.
  
  iceCream.aDayPasses(); // Output: There are 2 days left before Ice Cream spoils.
  iceCream.aDayPasses(); // Output: There is 1 day left before Ice Cream spoils.
  iceCream.aDayPasses(); // Output: Ice Cream has spoiled.
  


// Do not edit below this line
module.exports = Food;
