//  Wrapping data & methods inside a class, restricting direct access.

class Encap{
    private balance:number
    constructor(initialValue:number){
        this.balance=initialValue
    }
    
    deposite(amount:number):void{
        this.balance+=amount
    }
    withdraw(amount:number):void{
        if(amount<this.balance){
            this.balance-=amount
        }else{
            console.log("Insufficient balance")
        }
    }
    getBalance():number{
        return this.balance
    }
}
const bank=new Encap(1000)
bank.deposite(200)
bank.withdraw(100)
console.log(bank.getBalance())