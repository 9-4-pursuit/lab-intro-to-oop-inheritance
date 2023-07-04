// Create class below

class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  greet = () => console.log(`Hello, I'm ${this.name}`);
  status = () => {
    console.log(
      `energy: ${this.energy}, full:${this.full}, mood: ${this.mood}, sick: ${this.sick}`
    );
  };
  eat = () => {
    this.full++;
    this.full > 10 ? (this.sick = true) : this.sick;
  };

  medicate = () => {
    if (this.sick === true) {
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log("refusal to take medicine");
      this.energy--;
    }
  };
  play = () => {
    this.mood += 2;
    this.energy--;
    this.full--;
  };
}
// Do not edit below this line
module.exports = Tamagotchi;
