type Bank = {
  money: number,
  deposit: (val: number) => void
};

let bankAccount: Bank = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: {
  name: string,
  bankAccount: Bank,
  hobbies: string[]
} = {
  name: "Nikita",
  bankAccount: bankAccount,
  hobbies: ['Sport', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);