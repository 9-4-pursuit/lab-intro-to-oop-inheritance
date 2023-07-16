// Create class below
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }

  status() {
    console.log(`My moods is: ${this.mood}`);
    console.log(`I am this full: ${this.full}`);
    console.log(`My energy is: ${this.energy}`);
    console.log(`${this.sick ? "I am sick" : "I am not sick"}`);
  }

  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick) {
      this.sick = false;
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log(`Refusal to take medicine`);
      this.energy--;
    }
  }

}

// Do not edit below this line
module.exports = Tamagotchi;
