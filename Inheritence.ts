
// Parent class (BankAccount)

// Defines core features like balance, deposit(), withdraw(), and getBalance().

// The balance property is marked as protected, so child classes can access it but outside code cannot.

// Child class (Interest)

// Extends the BankAccount class, meaning it inherits its properties and methods.

// Adds its own property interest and a method addInterest() that uses the parent’s balance and deposit functionality.

// Usage

// When you create const savings = new Interest(1000, 5), it first calls the parent constructor with super(initialValue).

// addInterest() calculates interest on the balance and deposits it.

// Finally, you call getBalance() from the parent to check the updated balance.

// So yes —  it demonstrates inheritance properly:

// Parent class → general functionality

// Child class → extra specialization


class BankAccount{
    protected balance:number
    constructor(initialValue:number){
        this.balance=initialValue
    }
    
    deposite(amount:number):void{
        this.balance+=amount
    }
    withdraw(amount:number):void{
        if(amount>0 && amount<this.balance){
            this.balance-=amount
        }else{
            console.log('insufficient balance')
        }
    }
    
    getBalance():number{
        return this.balance
    }
}

class Interest extends BankAccount{
    private interest:number
    constructor(initialValue:number,interest:number){
        super(initialValue)
        this.interest=interest
    }
    
    addInterest():void{
        const interest=this.balance*(this.interest/100)
        this.deposite(interest)
        console.log(`the interest amount ${interest} added`)
    }
}


const savings=new Interest(1000,5)
savings.addInterest()
console.log(savings .getBalance())