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
      console.log(`Hello, I'm ${this.name}!`);
    }
  
    status() {
      console.log(`Energy: ${this.energy}`);
      console.log(`Fullness: ${this.full}`);
      console.log(`Mood: ${this.mood}`);
      console.log(`Sick: ${this.sick}`);
    }
  
    eat() {
      this.full += 2;
      this.energy -= 1;
  
      if (this.full > 10) {
        this.sick = true;
      }
    }
  
    medicate() {
      if (this.sick) {
        this.full = 9;
        this.energy -= 3;
        this.sick = false;
      } else {
        console.log("Refusal to take medicine.");
        this.energy -= 1;
      }
    }
  
    play() {
      if (this.sick) {
        this.mood -= 1;
        this.energy -= 1;
      } else if (this.mood > 9) {
        console.log("I am too happy to play!");
        this.energy -= 2;
        this.full -= 1;
      } else if (this.energy <= 3) {
        console.log("I am too tired to play!");
        this.energy -= 1;
      } else {
        this.mood += 2;
        this.energy -= 1;
        this.full -= 1;
      }
    }
  
    sleep() {
      this.energy += 4;
      this.full -= 3;
    }
  
    timePasses() {
      if (!this.sick) {
        this.mood -= 2;
        this.full -= 1;
        this.energy -= 1;
      } else {
        this.mood -= 3;
        this.full -= 2;
        this.energy -= 2;
      }
    }
  
    badGuardian() {
      if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
        this.rehomed = true;
        console.log(`Oh no! ${this.name} has been rehomed!`);
      }
    }
  }
  
  // Example usage:
  
  const myTamagotchi = new Tamagotchi("Tama");
  myTamagotchi.greet(); // Output: Hello, I'm Tama!
  myTamagotchi.status(); // Output: Energy: 9, Fullness: 8, Mood: 6, Sick: false
  
  myTamagotchi.eat();
  myTamagotchi.status(); // Output: Energy: 8, Fullness: 10, Mood: 6, Sick: true
  
  myTamagotchi.medicate();
  myTamagotchi.status(); // Output: Energy: 5, Fullness: 9, Mood: 6, Sick: false
  
  myTamagotchi.play();
  myTamagotchi.status(); // Output: Energy: 4, Fullness: 8, Mood: 8, Sick: false
  
  myTamagotchi.sleep();
  myTamagotchi.status(); // Output: Energy: 8, Fullness: 5, Mood: 8, Sick: false
  
  myTamagotchi.timePasses();
  myTamagotchi.status(); // Output: Energy: 7, Fullness: 4, Mood: 6, Sick: false
  
  myTamagotchi.badGuardian(); // No output
  
  myTamagotchi.energy = 0;
  myTamagotchi.badGuardian(); // Output: Oh no! Tama has been rehomed!
  
// Do not edit below this line
module.exports = Tamagotchi;
