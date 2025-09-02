abstract class BankAccount {
  protected balance: number;

  constructor(initialValue: number) {
    this.balance = initialValue;
  }

  deposite(amount: number): void {
    this.balance += amount;
  }
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

class savingAcc extends BankAccount {
  private Limit: number = 2000;

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance && amount <= this.Limit) {
      this.balance -= amount;
    } else {
      console.log("withdrwing failed");
    }
  }
}

class currentAcc extends BankAccount {
  private Draft: number = 4000;
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance + this.Draft) {
      this.balance -= amount;
    } else {
      console.log("withdrwing failed");
    }
  }
}

const accounts: BankAccount[] = [new savingAcc(10000), new currentAcc(3000)];

accounts.forEach((acc) => {
  acc.withdraw(1000);
  console.log(`balance: ${acc.getBalance()}`);
});

//      1. Method Overriding (Run-time Polymorphism)

// Happens when a child class redefines a method from the parent class with the same method name, parameters, and return type.

// It allows the subclass to provide a specific implementation while keeping the method signature the same.

// Decided at runtime (dynamic dispatch).

// 2. Method Overloading (Compile-time Polymorphism)

// Happens when multiple methods in the same class have the same name but different parameter types/number of parameters.

// TypeScript supports function overloading using multiple declarations.

// Decided at compile time.

class BankAccounts {
  private Balance: number;

  constructor(initialValue: number) {
    this.Balance = initialValue;
  }

  deposit(amount: number): void;

  deposit(amount: number, note?: string): void;

  deposit(amount: number, note?: string): void {
    this.Balance += amount;
    if (note) {
      console.log(`deposited amount ${amount} ,${note}`);
    } else {
      console.log(`deposited amount ${amount}`);
    }
  }
  getBalance(): number {
    return this.Balance;
  }
}

const acc = new BankAccounts(1000);
acc.deposit(500);
acc.deposit(1000, "Salary");
console.log(acc.getBalance());



// Overriding → Same method name, same parameters, different implementation in subclass (runtime).

// Overloading → Same method name, different parameter list, within the same class (compile-time).
