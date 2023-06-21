// Create class below


class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }

    prepare() { console.log(`${this.name} is being prepared`) };
    isFresh() { this.daysToSpoil>=0 ? console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`) : console.log(`${this.name} has spoiled.`) }
    aDayPasses() {
        this.daysToSpoil--; this.isFresh()
    }
}

const matchaIceCream = new Food("Match Ice Cream", 2, true);
matchaIceCream.prepare();
matchaIceCream.isFresh();
matchaIceCream.aDayPasses();


// class Tamagotchi {
//     constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
//         this.name = name;
//         this.energy = energy;
//         this.full = full;
//         this.mood = mood;
//         this.sick = sick;
//         this.rehomed = rehomed

//     }
//     greet() { console.log(`Hello, I'm ${this.name}`) }

//     status() { console.log(`My energy is: ${this.energy}. I am this full:${this.full}. ${this.sick ? "I am not sick" : "I am sick"}`) };

//     eat() { this.full += 2; this.energy -= 1 };

//     medicate() {
//         if (this.full > 10) {
//             this.sick = true
//         }
//         if (this.sick) {
//             this.full = 9
//         }

//         if (!this.sick) {
//             console.log("Refuses to take medicine.")
//             this.energy -= 1
//         }

//     }
// play(){
//     let x=play()
//     if(this.sick){console.log("will not play"); this.mood-=1;this.energy-=1}
//    if(this.mood>9){this.energy-=2;this.full-=1}
    
//     if(this.energy<=3){
// console.log("I am too tired to play"); this.energy-=1
//     }

// }

// sleep(){this.energy+=4;this.full-=3}

// }

// timePasses(){
//     if(this.sick===false){
//         this.mood-=2;
//         this.full-=1;
//         this.energy-=1;
//     }
//     if(this.sick===true){
// this.mood-=3;
// this.full-=2;
// this.energy-=2;
//     }
// }


// badGuardian(){
//     if(this.energy<=0){rehomed=true};
//     if(this.full<=0){rehomed=true};
//     if(this.mood<=0){rehomed=true};
//     if(this.full<=0){rehomed=true};
//     console.log("tamagotchi has been rehomed");

// }

// // this.eat > 10 ? this.sick = true : null 






// // Do not edit below this line
module.exports = Food;
