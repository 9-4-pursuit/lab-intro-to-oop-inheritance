// Create class below
class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = name;
    this.energy = energy || 9;
    this.full = full || 8;
    this.mood = mood || 6;
    this.sick = sick || false;
    this.rehomed = rehomed || false;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }

  status() {
    let isSick = "I am sick";
    if (this.sick === false) {
      isSick = "I am not sick";
    }
    console.log(
      "*******************",
      "\n",
      `My mood is: ${this.mood}`,
      "\n",
      `I am this full: ${this.full}`,
      "\n",
      `My energy is: ${this.energy}`,
      "\n",
      isSick,
      "*******************"
    );
  }

  eat() {
    this.full += 2;
    this.energy--;
    if(this.full > 10) {
        this.sick = true;
    }
  }

  medicate() {
    if (this.sick === true) {
        this.full = 9;
        this.energy -= 3;
        this.sick = false;
    } else {
        console.log('refusal to take medicine');
        this.energy--;
    }
  }

  play() {
    if (this.sick === true) {
        this.mood--;
        this.energy--;
    } else if (this.mood > 9) {
        this.energy -= 2;
        this.full--;
    } else if (this.energy <= 3) {
        console.log('I am too tired to play');
        this.energy--;
    } else {
        this.mood += 2;
        this.energy--;
        this.full--;
    }
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
