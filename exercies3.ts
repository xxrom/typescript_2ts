// Exercise 1
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }

console.log('1 ========================');
// 1 my
class Car {
  public name: string;
  public acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk(): void {
    console.log("Toooooooooot!");
  }
  accelerate(speed: number): void {
    this.acceleration += speed;
  }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2
var baseObject = {
  width: 0,
  length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 4;
rectangle.calcSize = function() {
  return this.width * this.length;
};
console.log(rectangle.calcSize());

console.log('2 ========================');
// 2 my
class BaseObject {
  width: number;
  length: number;
  constructor(width: number = 0, length: number = 0) {
    this.width = width;
    this.length = length;
  }
}

class Rectangle extends BaseObject{
  constructor(width: number, length: number) {
    super(width, length);
  }
  calcSize(): number {
    return this.width * this.length;
  }
}

var rectangle2 = new Rectangle();
console.log(rectangle2.calcSize())
rectangle2.width = 5;
rectangle2.length = 4;
console.log(rectangle2.calcSize())

console.log('3 ========================');
// // Exercise 3
var person = {
  _firstName: ""
};
Object.defineProperty(person, "firstName", {
  get: function () {
      return this._firstName;
  },
  set: function (value) {
      if (value.length > 3) {
          this._firstName = value;
      }
      else {
          this._firstName = "";
      }
  },
  enumerable: true,
  configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);

class Person {
  private _firstName: string = '';

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName: string) {
    if (firstName.length > 3) {
      this._firstName = firstName;
    } else {
      this._firstName = '';
    }
  }
}

const person2 = new Person();
console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);
