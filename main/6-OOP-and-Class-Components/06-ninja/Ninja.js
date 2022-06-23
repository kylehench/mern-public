class Ninja {
  constructor(name, health) {
    this.name = name
    this.health = health
    this.speed = 3
    this.strength = 3
  }
  sayName() {
    console.log(this.name)
  }
  showStats(){
    console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`)
  }
  drinkSake() {
    this.health += 10
  }
}

const kyle = new Ninja('Kyle', 5)
kyle.showStats()