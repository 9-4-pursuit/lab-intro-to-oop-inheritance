// Create class below
class Food{
    constructor(name, daysToSpoil ) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = true;
    }
    prepare(name){
        console.log(`${this.name} is being prepared`)
    }
isFresh(name, daysToSpoil){
   
    if (this.daysToSpoil > 0){
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils`)
    } else if (daysToSpoil <= 0){
        console.log(`${this.name} has spoiled`)
    }
}
aDayPasses(name, daysToSpoil, isFresh){
if (this.daysToSpoil > 0){
    this.daysToSpoil--
    console.log(name.isFresh())
}
}


}

//instance
const otherFood = new Food("Grape", 5)
console.log(otherFood.prepare())
console.log(otherFood.name)
console.log(otherFood.isFresh())
console.log(otherFood.aDayPasses())


// Do not edit below this line
module.exports = Food;
