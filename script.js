"use strict";
console.log('Hello');
var myName = 'Max';
// myName = 28;
var myAge = 27.2;
// myAge = 'Max';
var hasHobbies = false;
// hasHobbies = 1;
// assign types;
var myRealAge2; // Any by default
myRealAge2 = 27;
myRealAge2 = '27';
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
// let hobbies = ["Cooking", "Sports"];
// hobbies = [100]; // error
var hobbies = ["Cooking", "Sports"];
hobbies = [100]; // no error
// hobbies = ['hello']; // no Error
console.log(typeof hobbies[0]);
// typles
var address = ['Super', 99]; // only two elements
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any , try to avoid it =)
var car = 'BMW';
console.log(car);
car = { brand: 'bmw', series: 2 };
console.log(car);
// functions
function returnMyName() {
    return myAge;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Void!');
    // return 0; // error void
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max')); // NaN
console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello; // error function
// myMultiply(); // error function
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Nikita',
    age: 26
};
// userData = { // порядок параметров не важен в объекте!
//   a: 'hello', // error param name
//   b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
// let myRealRealAge: any = 27;
// myRealRealAge = '27';
var myRealRealAge = 27;
myRealRealAge = '27';
// myRealRealAge = true; // error
// check types
var finalValue = 'A string';
if (typeof finalValue === 'string') {
    console.log('Final value a number');
}
// never
function neverReturns() {
    throw new Error('An error');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null; // tsconfig strinctNullChecks: false => no error , if : true => error
var canAlsoBeNull; // undefined
canAlsoBeNull = null;
var canThisBeAny = null; // only be null!
canThisBeAny = 12; // error
console.log('End');
