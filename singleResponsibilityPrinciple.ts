class SBI{
    private balance:number
    constructor(initialAmount:number){
        this.balance=initialAmount
    }
    
    deposite(amount:number):void{
      this.balance+=amount
    }
    withdraw(amount:number):void{
        if(amount<=this.balance){
            this.balance-=amount
        }else{
            console.log("insuffiecient account balance")
        }
    }
    
    getBalance():number{
        return this.balance
    }
}

class AccountDetails{
    print(bal:SBI){
        console.log(`balance:${bal.getBalance()}`)
    }
}

const amount=new SBI(100)
amount.deposite(50)
amount.withdraw(100)
const printer=new AccountDetails()
printer.print(amount)



// 🔹 1. Encapsulation

// balance in BankAccount is marked as private, so it cannot be directly accessed from outside the class.

// Instead, you use methods (deposit, withdraw, getBalance) to interact with it.

//  This hides the internal details and ensures controlled access.

// 🔹 2. Abstraction

// The user of BankAccount doesn’t need to know how balance is stored or updated.

// They just call deposit(50) or withdraw(30) without worrying about implementation details.

//  This is abstraction: showing only essential operations and hiding internal complexity.


// 🔹 3. Single Responsibility Principle (SRP) (from SOLID principles)

// BankAccount only manages money.

// AccountPrinter only handles printing.

//  Each class has one reason to change, making the code clean and modular.


// 🔹 4. Composition

// AccountPrinter depends on BankAccount (it uses it in print(account: BankAccount)).

// This is a form of has-a relationship (composition).

//  The printer doesn’t exist without an account to print.