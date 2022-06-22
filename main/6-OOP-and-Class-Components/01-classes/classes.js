class Pet {
  constructor(name, type, age, energyLevel=10) {
    this.name = name
    this.type = type
    this.age = age
    this.energyLevel = energyLevel
    this.hungerLevel = 1
  }

  incrementHunger() {
    this.hungerLevel++
  }
  decrementHunger() {
    this.hungerLevel--
  }
}

let fluffy = new Pet('Fluffy', 'dog', 14, 8)
let tommy = new Pet('Tommy', 'turtle', 34)

class Dog extends Pet {
  constructor(name, type, age, energyLevel) {
    super(name, type, age, energyLevel)
    this.legs = 4
    this.wetNose = true
  }
}

console.log(fluffy.name)