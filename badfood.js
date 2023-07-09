const Food = require('./food')

/*
- Attributes
  - name: (inherited) string
  - daysToSpoil:(inherited) start with 20 days, these will go down when the food is attacked (think of this like hit points)
  - fresh: boolean (when the food is knocked out (days to spoil is less than or equal to 0), change this property.) This food will have lost the battle if it is no longer fresh
  - weapons: an array of 3 objects that have hit points of 3, 4 an 5
- Methods
  - isFresh: (inherited) - use this to check the status of your bad food
  - prepare: overwrite this method so that instead it console logs a fight preparation method by taunting the other food `I am <name> and my calories are too high to count!` or `I am <name> and you are just a passing trend!`
  - fight: takes in an instance of a `BadFood`, selects a random fight method and decreases the hit points by the number from the selected fight method. Finally, console logs a message with both `daysToSpoil` properties
  `<pizza> is down <pizza.daysToSpoil> , but I am still up <donut.daysToSpoil> !`
 */
class Badfood extends Food {
  constructor(name, daysToSpoil, fresh, weapons) {
    super(name,daysToSpoil,fresh)
    this.weapons = weapons
  }
  prepare() {
    const phrase = Math.floor(Math.random() * 3)
    if (phrase === 0) {
      console.log(`I am ${this.name} and you are just a passing trend!`)
    } else if (phrase === 1) {
      console.log('Bring it on stale crumbs!')
    } else if (phrase === 2) {
      console.log(`I am ${this.name} and my calories are too high to count!`)
    }
  }
  fight(opp) {
    const attack = Math.floor(Math.random() * 3)
    opp.daysToSpoil -= this.weapons[attack].hitPoints
    console.log(
      `${this.name} attacks ${opp.name} with ${this.weapons[attack].name}.\n${opp.name} has ${opp.daysToSpoil} days and ${this.name} has ${this.daysToSpoil} left`
    )
  }
}
weapons = [
  [
    {
      name: 'Mouth Burn',
      hitPoints: 3,
    },
    {
      name: 'Hot Pepper Storm',
      hitPoints: 4,
    },
    {
      name: 'Cheese Grease',
      hitPoints: 5,
    },
  ],
  [
    {
      name: 'Knotted Knuckles',
      hitPoints: 3,
    },
    {
      name: 'Burnt Crust Dust',
      hitPoints: 4,
    },
    {
      name: 'Garlic Galore',
      hitPoints: 5,
    },
  ],
]

const pizza = new Badfood('Stale pizza',25,true, weapons[0])
const garlicKnots = new Badfood("GarlicKnots", 25, true, weapons[1])
pizza.prepare()
garlicKnots.prepare()
pizza.fight(garlicKnots)
