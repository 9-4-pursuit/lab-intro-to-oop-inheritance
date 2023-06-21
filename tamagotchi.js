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

  eat() {
    this.updateFull(this.full + 2);
    this.updateEnergy(this.energy - 1);
    if (this.full > 10) this.updateSick(true);
  }

  medicate() {
    if (this.sick) {
      this.updateFull(9);
      this.updateEnergy(this.energy - 3);
      this.updateSick(false);
    } else {
      console.log("No need for medication");
      this.updateEnergy(this.energy - 1);
    }
  }

  play() {
    if (this.sick) {
      this.updateMood(this.mood - 1);
      this.updateEnergy(this.energy - 1);
    } else if (this.mood > 9) {
      this.updateFull(this.full - 1);
      this.updateEnergy(this.energy - 2);
    } else if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.updateEnergy(this.energy - 1);
    } else {
      this.updateMood(this.mood + 2);
      this.updateFull(this.full - 1);
      this.updateEnergy(this.energy - 1);
    }
  }

  sleep() {
    this.updateFull(this.full - 3);
    this.updateEnergy(this.energy + 4);
  }

  timePasses() {
    if (this.sick) {
      this.updateMood(this.mood - 3);
      this.updateFull(this.full - 2);
      this.updateEnergy(this.energy - 2);
    } else {
      this.updateMood(this.mood - 2);
      this.updateFull(this.full - 1);
      this.updateEnergy(this.energy - 1);
    }
  }
  
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.updateRehomed(true);
      console.log(`Your Tamagotchi ${this.name} has been rehomed.`);
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
