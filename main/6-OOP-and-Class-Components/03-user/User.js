class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.accountBalance = 0
  }
  makeDeposit(amount) {
    this.accountBalance += amount
  }
  makeWithdrawal(amount) {
    this.accountBalance -= amount
  }
  displayBalance() {
    console.log(this.accountBalance)
  }
  transferMoney(otherUser, amount) {
    this.makeWithdrawal(amount)
    otherUser.makeDeposit(amount)
  }
}

const guido = new User("Guido van Rossum", "guido@python.com")
const monty = new User("Monty Python", "monty@python.com")
const ralph = new User("Monty Python", "monty@python.com")

guido.makeDeposit(30)
guido.makeDeposit(20)
guido.makeDeposit(10)
guido.makeWithdrawal(5)
guido.displayBalance()

monty.makeDeposit(30)
monty.makeDeposit(20)
monty.makeWithdrawal(10)
monty.makeWithdrawal(5)
monty.displayBalance()

ralph.makeDeposit(30)
ralph.makeWithdrawal(20)
ralph.makeWithdrawal(10)
ralph.makeWithdrawal(5)
ralph.displayBalance()

console.log("Guido and Ralph's balances after all deposits, withdrawals, and transfers:")
guido.transferMoney(ralph, 30)
guido.displayBalance()
monty.displayBalance()