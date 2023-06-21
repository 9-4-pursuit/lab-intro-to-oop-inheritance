// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = daysToSpoil > 0 ? true : false;
  }

  updateFreshnessToFalse() {
    this.fresh = false;
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

  aDayPasses() {
    this.daysToSpoil--;
    if (this.daysToSpoil <= 0) this.updateFreshnessToFalse();
    this.isFresh();
  }
}

class BadFood extends Food {
  constructor(name, weapons = [], daysToSpoil = 20, fresh) {
    super(name, daysToSpoil, fresh);
    this.weapons = weapons;
  }

  updateDaysToSpoil(daysToSpoil) {
    this.daysToSpoil = daysToSpoil;
  }

  prepare() {
    const taunts = [
      `I am ${this.name} and my calories are too high to count!`,
      `I am ${this.name} and you are just a passing trend!`
    ];

    console.log(taunts[Math.floor(Math.random() * taunts.length)]);
  }

  fight(enemy){
    const attack = this.weapons[Math.floor(Math.random() * this.weapons.length)];
    this.updateDaysToSpoil(enemy.daysToSpoil - attack.hitPoints);

    console.log(`
      ${this.name} used ${attack.name} attack against ${enemy.name}.
      ${enemy.name} is down ${enemy.daysToSpoil}, but ${this.name} is still up ${this.daysToSpoil}!
    `);
  }
}

// Do not edit below this line
module.exports = Food;
