class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }

    getBalance() {
        return this._balance;
    }

    displayBalance() {
        console.log (`Balance: ${this._balance}`);
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        } else {
            alert ('Deposit amount must be positive');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <+ this._balance) {
            this._balance -= amount;
        } else if (amount > this._balance) {
            alert(`Insufficient funds. Balance: ${this.getBalance()}, withdraw: ${amount}`);
        } else {
            alert(`Withdraw amount must be positive: ${amount}`);
        }
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000
account1.deposit(500);
account1.displayBalance();
//console.log(account1.getBalance()); // 1500
account1.withdraw(200);
account1.displayBalance();
//console.log(account1.getBalance()); // 1300

// const account2 = new BankAccount(30);
// account2.withdraw(100);
// account2.withdraw(-20);
// account2.deposit(-10);
// account2.displayBalance();
