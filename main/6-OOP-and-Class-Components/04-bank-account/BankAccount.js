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

const account1 = new BankAccount(0.01, 0)
const account2 = new BankAccount()

account1.deposit(5).deposit(4).deposit(3).withdrawal(0.50).yieldInterest().displayAccountInfo()

account1.deposit(5).deposit(4).withdrawal(3).withdrawal(0.50).yieldInterest().displayAccountInfo()