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
        console.log(`Energy: ${this.energy}, Fullness: ${this.full}, Mood: ${this.mood}, Sick: ${this.sick}`);
      }

    eat() {
        if (!this.rehomed) {
          this.full += 2;
          this.energy -= 1;
    
          if (this.full > 10) {
            this.sick = true;
          }
        }
      }

      medicate() {
        if (!this.rehomed) {
          if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            if (this.energy < 0) {
              this.energy = 0;
            }
            this.sick = false; // Healing the Tamagotchi
          } else {
            console.log("Refusal to take medicine");
            this.energy -= 1;
            if (this.energy < 0) {
              this.energy = 0;
            }
          }
        }
      }


    play() {
        if (!this.rehomed) {
          this.energy -= 1;
          this.full -= 1;
          this.mood += 2;
          if (this.mood > 10) {
            this.mood = 10;
          }
        }
      }
    
      sleep() {
        if (!this.rehomed) {
          this.energy += 4;
          this.full -= 3;
          if (this.energy > 10) {
            this.energy = 10;
          }
          if (this.full < 0) {
            this.full = 0;
          }
        }
      }

      timePasses() {
        if (!this.rehomed) {
          if (!this.sick) {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
          } else {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
          }
    
          if (this.mood < 0) {
            this.mood = 0;
          }
          if (this.full < 0) {
            this.full = 0;
          }
          if (this.energy < 0) {
            this.energy = 0;
          }
        }
      }

      badGuardian() {
        console.log(`Tamagotchi ${this.name} has been rehomed due to neglect.`);
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
          this.rehomed = true;
        }
      }



    }

// Do not edit below this line
module.exports = Tamagotchi;
