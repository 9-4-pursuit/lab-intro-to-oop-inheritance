// Create class below

class Food {
    constructor(name, daysToSpoil, fresh) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh || daysToSpoil > 0 ? true : false;
    }
    prepare() {
        console.log(`${this.name} is being prepared`);
    }

    isFresh() {
        this.fresh ?
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        :
            console.log(`${this.name} has spoiled.`);
    }

    aDayPasses() {
        this.daysToSpoil--;
        this.daysToSpoil < 1 ? this.fresh = !this.fresh : null;
        this.isFresh();
}
}

// Do not edit below this line
module.exports = Food;
