"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Nikita",
    bankAccount: bankAccount,
    hobbies: ['Sport', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
