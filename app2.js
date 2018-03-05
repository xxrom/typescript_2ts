"use strict";
// let & const
var variable = "test";
console.log(variable);
variable = "another value";
console.log(variable);
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99; // Won't work
// Block scope
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow function
console.log('Arrow Function');
var addNumber = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumber(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log('Hello!');
};
greet();
var greetFritend = function (friend) { return console.log(friend); };
greetFritend(' Hello Friend ');
// Default Parameters
console.log('Default Parameters');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('Done! ', start);
};
countdown();
// Rest & Spread
console.log('Rest & Spread');
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers)); // spread data
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Nikita", 1, 2));
// Descturucturing
console.log("Desctructuring");
var myHobbies = ["cooking", 'sport'];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = { userName: "nikita", age: 25, test: { hello: 'hello' } };
var myName = userData.userName, age = userData.age, hello = userData.test.hello;
console.log(myName, age, hello);
// Template Literals
var userName = 'Nikitka';
var greeting = "test\n   === " + userName;
console.log(greeting);
