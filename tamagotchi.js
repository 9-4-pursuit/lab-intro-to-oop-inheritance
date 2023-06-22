// Create class below


class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name 
        this.energy = energy 
        this.full = full 
        this.mood = mood 
        this.sick = sick 
        this.rehomed = rehomed
    }

    greet(){
        console.log(`Hello I'm ${this.name}!`);
    }

    status(){
        console.log(this.energy, this.full, this.mood, this.sick);
    }

    eat(){
         this.full = ((this.full)+2); 
        this.energy = this.energy - 1;
        if(this.full > 10){
            this.sick = true
        }
    }

    medicate(){
        if(this.sick === true){
            this.full = 9;
            this.energy = this.energy - 3
            this.sick = false
        } else {
            console.log("refusal to take medicine");
            this.energy = this.energy -1
        }
    }

    play(){
        if(this.sick === true){
            this.mood = this.mood - 1
            this.energy = this.energy - 1
        }
        else if(this.energy <= 3){
            console.log("I am too tired to play");
            this.energy = this.energy - 1
        }else if(this.mood > 9){
            this.energy = this.energy - 2
            this.full = this.full -1
        }else if(!this.sick) {
        this.mood = this.mood + 2
        this.energy = this.energy - 1
        this.full = this.full - 1
        }
    }

    sleep(){
        this.energy = this.energy + 4
        this.full = this.full - 3
    }

}

const tommy = new Tamagotchi()
tommy.eat()
console.log(tommy.full);


// Do not edit below this line
module.exports = Tamagotchi;
