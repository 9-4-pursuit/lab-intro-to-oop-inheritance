// Create class below
class Food {
  constructor(name, daysToSpoil = 0, fresh = true){
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare(){
    console.log(`${this.name} is being prepared`);
  }

  isFresh(){
    if (this.daysToSpoil <= 0){
      this.fresh = false;
    }

    this.fresh ? 
    console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`) :
    console.log(`${this.name} has spoiled.`);
  }

  aDayPasses(){
    this.daysToSpoil--;
    this.isFresh()
  }
}

class BadFood extends Food{
  constructor(name, weapons, daysToSpoil = 20, fresh = true){
    super(name, daysToSpoil);
    this.fresh = fresh; 
    this.weapons = weapons;
  }

  prepare(){
    let taunts = [
      `I am ${this.name} and my calories are too high to count!`,
      `I am ${this.name} and you are just a passing trend!`,
      `You're about to get burned!`
    ]

    console.log(taunts[Math.floor(Math.random() * taunts.length)])
  }



}

attacks = [
  {
    name: "Mouth Burn",
    hitPoints: 3,
  },
  {
    name: "Hot Pepper Storm",
    hitPoints: 4,
  },
  {
    name: "Cheese Grease",
    hitPoints: 5,
  },
];

// Do not edit below this line
module.exports = Food;