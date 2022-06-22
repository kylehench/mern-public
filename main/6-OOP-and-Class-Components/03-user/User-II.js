class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.accountBalance = 0
  }
  makeDeposit(amount) {
    this.accountBalance += amount
    return this
  }
  makeWithdrawal(amount) {
    this.accountBalance -= amount
    return this
  }
  displayBalance() {
    console.log(this.accountBalance)
    return this
  }
  transferMoney(otherUser, amount) {
    this.makeWithdrawal(amount)
    otherUser.makeDeposit(amount)
    return this
  }
}

const guido = new User("Guido van Rossum", "guido@python.com")
const monty = new User("Monty Python", "monty@python.com")
const ralph = new User("Monty Python", "monty@python.com")

guido.makeDeposit(30).makeDeposit(20).makeDeposit(10).makeWithdrawal(5).displayBalance()

monty.makeDeposit(30).makeDeposit(20).makeWithdrawal(10).makeWithdrawal(5).displayBalance()

ralph.makeDeposit(30).makeWithdrawal(20).makeWithdrawal(10).makeWithdrawal(5).displayBalance()

console.log("Guido and Ralph's balances after all deposits, withdrawals, and transfers:")
guido.transferMoney(ralph, 30)
guido.displayBalance()
monty.displayBalance()