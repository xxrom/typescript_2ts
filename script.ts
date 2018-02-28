console.log('Hello');

let myName = 'Max';

// myName = 28;

let myAge = 27.2;
// myAge = 'Max';

let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types;
let myRealAge2; // Any by default
myRealAge2 = 27;
myRealAge2 = '27'

let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
// let hobbies = ["Cooking", "Sports"];
// hobbies = [100]; // error
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100]; // no error
// hobbies = ['hello']; // no Error
console.log(typeof hobbies[0]);



// typles
let address: [string, number] = ['Super', 99];


console.log('End');
