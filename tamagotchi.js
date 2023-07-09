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
    this.name = name
    this.energy = energy
    this.full = full
    this.mood = mood
    this.sick = sick
    this.rehomed = rehomed
  }
  greet() {
    console.log(`Hello I'm ${this.name}`)
  }

  status() {
    console.log(
      `********************
      My mood is: \t${this.mood} \n
      I am this full: \t${this.full}\n
      My energy is: \t${this.energy} \n
      ${sick ? 'I am sick' : 'I am not sick'}\n
      ********************`
    )
  }
  eat() {
    this.full += 2
    this.energy -= 1
    if (this.full > 10) {
      this.sick = true
    }
  }

  medicate() {
    if (this.sick) {
      this.full = 9
      this.energy -= 3
      this.sick = false
    } else {
      console.log(`${this.name} refuses to take the medicine.`)
      --this.energy
    }
  }

  play() {
    if (this.sick) {
      this.mood--
      this.energy--
    }else if(this.mood>9){
        this.energy-=2
        this.full--
    }else if(this.energy<=3){
        console.log("I'm too tired to play.")
        this.energy--
    }else{
        this.mood += 2
        this.full--
        this.energy--
    }
 }
  sleep(){
    this.energy+=4
    this.full-=3
  }
  timePasses(){
    if(this.sick){
        this.mood-=3
        this.full-=2
        this.energy-=2
    }else{
        this.mood-=2
        this.full--
        this.energy--
    }
  }

  badGuardian(){
    if(this.energy<=0 || this.mood<=0 || this.full <=0){
        this.rehomed = true
    }
    if(this.rehomed){
        console.log(`${this.name} has been rehomed! Do better!`)
    }
  }
}

module.exports = Tamagotchi
