// Abstraction means hiding the implementation details and showing only the essential features.

// There are mainly two ways to achieve abstraction


// 1️⃣ Using Abstract Classes

// An abstract class is a class that cannot be instantiated directly.

// It may contain abstract methods (methods without implementation) and concrete methods (methods with implementation).

// Subclasses must implement the abstract methods.

// Example:


abstract class BankAccount{
    protected balance:number
    constructor(initialValue:number){
        this.balance=initialValue
    }
    
    deposite(amount:number):void{
        this.balance+=amount
    }
   abstract  withdraw(amount:number):void
    
    getBalance():number{
        return this.balance
    }
}

class savingAccount extends BankAccount{
    withdraw(amount:number):void{
        if(this.balance>0 && amount<=this.balance){
            this.balance-=amount
        }else{
            console.log('insuffiecient balance')
        }
    }
}

const savings =new savingAccount(1000)
savings.deposite(2000)
savings.withdraw(3000)
console.log(savings.getBalance())






// 2️⃣ Using Interfaces

// An interface defines a contract (only method signatures).

// Classes that implement the interface must provide definitions for those methods.

// It ensures what should be done, but not how it should be done.



interface IBankAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  getBalance(): number;
}

class CurrentAccount implements IBankAccount {
  private balance: number;

  constructor(initialValue: number) {
    this.balance = initialValue;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}


const saving=new CurrentAccount(1000)
saving.deposit(2000)
savings.withdraw(200)
console.log(savings.getBalance())




// Abstract class → partial abstraction (can have implemented + unimplemented methods).

// Interface → full abstraction (only method signatures, no implementation).






















