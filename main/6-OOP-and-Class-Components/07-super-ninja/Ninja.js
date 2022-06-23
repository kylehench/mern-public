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

class SuperNinja extends Ninja {
  constructor(name) {
    super(name, 200)
    this.strength = 10
    this.wisdom = 10
  }
  speakWisdom() {
    this.drinkSake()
    console.log('What one programmer can do in one month, two programmers can do in two months.')
  }
}

const kyle = new SuperNinja('Kyle')
kyle.speakWisdom()
kyle.showStats()