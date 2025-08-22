// Classes should be open for extension, but closed for modification.
// Meaning: you should be able to add new features without changing existing code.

// Problems........
// AccountPrinter has only one way to print (console log).
// If later you want to print in JSON format or export to a file, you’d need to modify AccountPrinter.
//  This violates OCP.

// solution:
//  Use Abstraction (Interface/Polymorphism)
// We make a Printer interface and allow multiple printer implementations.


class SBI{
    private balance:number

    constructor(initialAmount:number){
        this.balance=initialAmount;
    }

    deposit(amount:number):void{
        this.balance+=amount
    }
    withdraw(amount:number):void{
        if(amount<=this.balance){
            this.balance-=amount
        }else{
            console.log("insuficient bank balance")
        }
    }
    getBalance():number{
        return this.balance
    }
}

export interface Print{
    printer(detail:SBI):void
}

 class ConsolePrinter implements Print{
    printer(detail:SBI):void{
        console.log(detail.getBalance())
    }
}

class JsonPrinter implements Print{
    printer(detail:SBI):void{
        console.log(JSON.stringify({amt:detail.getBalance()}))
    }
}


const amount=new SBI(100)
amount.deposit(50)
amount.withdraw(20)

const consoleP=new ConsolePrinter()
consoleP.printer(amount)

const jsonP=new JsonPrinter()
jsonP.printer(amount)
