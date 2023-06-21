// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = daysToSpoil > 0 ? true : false;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  isFresh() {
    if (this.daysToSpoil > 1 && this.fresh) {
      console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
    } else if (this.daysToSpoil === 1 && this.fresh) {
      console.log(`There is ${this.daysToSpoil} day left before ${this.name} spoils.`);
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }

  updateFreshnessToFalse() {
    this.fresh = false;
  }

  aDayPasses() {
    this.daysToSpoil--;
    if (this.daysToSpoil <= 0) this.updateFreshnessToFalse();
    this.isFresh();
  }
}

// Do not edit below this line
module.exports = Food;
