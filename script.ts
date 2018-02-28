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
let address: [string, number] = ['Super', 99]; // only two elements

// enum
enum Color {
  Gray, // 0
  Green = 100, // 100 next would be 101
  Blue = 2 // 2
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any , try to avoid it =)
let car: any = 'BMW';
console.log(car);
car = { brand: 'bmw', series: 2};
console.log(car);


// functions
function returnMyName(): FunctionStringCallback {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Void!');
  // return 0; // error void
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 'Max')); // NaN
console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // error function
// myMultiply(); // error function
myMultiply = multiply;
console.log(myMultiply(5, 2));


// objects
let userData: { name: string, age: number } = {
  name: 'Nikita',
  age: 26
};

// userData = { // порядок параметров не важен в объекте!
//   a: 'hello', // error param name
//   b: 22
// };


// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
};
// complex= {};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
};


console.log('End');
