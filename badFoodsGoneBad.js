
class Food {
    constructor(name = "pizza", daysToSpoil = 20) {
      this.name = name;
      this.daysToSpoil = daysToSpoil;
      this.fresh = true;
    }
  
    isFresh() {
      return this.fresh;
    }
  
    prepare() {
      console.log(`Preparing ${this.name}...`);
    }
  
    fight(enemy) {
      if (this.isFresh()) {
        console.log(`${this.name} is ready for the fight!`);
      } else {
        console.log(`${this.name} has lost the battle.`);
      }
    }
  }
  
  class BadFood extends Food {
    constructor(name, daysToSpoil, fresh = true, weapons) {
      super(name, daysToSpoil);
      this.fresh = fresh;
      this.weapons = weapons;
    }
  }