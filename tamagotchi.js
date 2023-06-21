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
}
// Do not edit below this line
module.exports = Tamagotchi;
