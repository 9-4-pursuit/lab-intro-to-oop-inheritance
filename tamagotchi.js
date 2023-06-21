// Create class below
class Tamagotchi {
  constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  updateEnergy(newEnergy) {
    this.energy = newEnergy;
  }

  updateFull(newFull) {
    this.full = newFull;
  }

  updateMood(newMood) {
    this.mood = newMood;
  }

  updateSick(newSick) {
    this.sick = newSick;
  }

  updateRehomed(newRehomed) {
    this.rehomed = newRehomed;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }

  status() {
    console.log(`
      My mood is: ${this.mood}
      I am this full: ${this.full}
      My energy is: ${this.energy}
      I am ${this.sick ? "sick" : "not sick"}
    `);
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
