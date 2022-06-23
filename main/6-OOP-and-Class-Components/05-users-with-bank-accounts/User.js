class BankAccount {
  constructor(intRate, balance=0) {
    this.intRate = intRate
    this.balance = balance
  }
  deposit(amount) {
    this.balance += amount
    return this
  }
  withdrawal(amount) {
    if (this.balance >= amount) {
      this.balance -= amount
    } else {
      console.log('Insufficient funds: Charging a $5 fee')
      this.balance -= 5
    }
    return this
  }
  displayAccountInfo() {
    console.log(`Balance: $${this.balance}`)
    return this
  }
  yieldInterest() {
    if (this.balance>0) {
      this.balance += this.intRate*this.balance
    }
    return this
  }
}

// const account1 = new BankAccount(0.01, 0)
// const account2 = new BankAccount()

// account1.deposit(5).deposit(4).deposit(3).withdrawal(0.50).yieldInterest().displayAccountInfo()

// account1.deposit(5).deposit(4).withdrawal(3).withdrawal(0.50).yieldInterest().displayAccountInfo()

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.account = new BankAccount()
  }
  makeDeposit(amount) {
    this.account.balance += amount
    return this
  }
  makeWithdrawal(amount) {
    this.account.balance -= amount
    return this
  }
  displayBalance() {
    console.log(this.account.displayAccountInfo())
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