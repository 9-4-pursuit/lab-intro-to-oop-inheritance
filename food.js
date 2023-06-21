// Create class below

class Food {
    constructor(name, daysToSpoil, fresh){
        this.name = name || "Default food";
        this.daysToSpoil = daysToSpoil || 10;
        this.fresh = fresh || daysToSpoil > 0 ? true : false;
    }

    prepare(){
        console.log(`${this.name} is being prepared`);
    }

    isFresh(){
        if(this.fresh){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`)
        };
    }

    aDayPasses(){
        this.daysToSpoil--;
        if(this.daysToSpoil < 1){
            this.fresh = !this.fresh;
        };
        console.log(this.daysToSpoil)
        this.isFresh();
    }
}

const tacos = new Food("Tacos", 1, true)
// console.log(tacos);
tacos.prepare();
tacos.isFresh();
tacos.aDayPasses();

// Do not edit below this line
module.exports = Food;
