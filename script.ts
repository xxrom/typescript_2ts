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


console.log('End');
