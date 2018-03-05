// let & const
let variable = "test";
console.log(variable);
variable = "another value";
console.log(variable);

const maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99; // Won't work

// Block scope
function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// Arrow function
console.log('Arrow Function');
const addNumber = function(number1: number, number2: number): number {
  return number1 + number2;
}
console.log(addNumber(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
  console.log('Hello!');
}
greet();

const greetFritend = friend => console.log(friend);
greetFritend(' Hello Friend ');

// Default Parameters
console.log('Default Parameters');
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log('Done! ', start);
}
countdown();

// Rest & Spread
console.log('Rest & Spread');
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers)); // spread data

function makeArray(name: string, ...args: number[]) { // turn it in array
  return args;
}
console.log(makeArray("Nikita", 1, 2));

// Descturucturing
console.log("Desctructuring");
const myHobbies = ["cooking", 'sport'];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const [hobby1, hobby2]= myHobbies;
console.log(hobby1, hobby2);

const userData = { userName: "nikita", age: 25, test: { hello: 'hello'}};
const { userName: myName, age, test: {hello}} = userData;

console.log(myName, age, hello);

// Template Literals
const userName = 'Nikitka';
const greeting = `test
   === ${userName}`;
console.log(greeting);

