class Person {
  name: string; // default is public
  private type: string; // only here available
  protected age: number = 22; // child can have this parameter

  constructor(
    name: string,
    public username: string  // auto create public username in class
  ) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType('Old Guy');
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('Nikita', 'nikita');
console.log(person);

person.printAge();
person.setType("cool  2"); // error setType is private

// Inheritance
class Nikita extends Person {
  name = "NikitaKA"; // owerwrite Person name

  constructor(username: string) {
    super('NikitaAAAA', username); // call extends constructor Person

    this.age = 33; // can access in age
    // console.log(this.type); // undefined / don't have access
  }
}

const nikita = new Nikita('anna');
console.log(nikita);


// Getters & Setters
class Plant {
  private _species: string = 'Default'; // _ style

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "ab"; // length < 3
console.log(plant.species);
plant.species = "abcd"; // length >= 3
console.log(plant.species);


// Static Properties & Methods
class Helpers {
  static PI: number = 3.14; // always use this PI, without using new Helpers()
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));


// Abstract Classes
abstract class Project { // от abstract нельзя создать объект !!!! new Project() !!!
  projectName: string = 'Default';
  budget: number = 100;

  abstract changeName(name: string): void; // описали правило формирования
  // для метода ребенка, который extends Project

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

// let newProject = new Project(); // error
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('New name');
console.log(newProject);

// private constructors
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public readonly name: string) {} // readonly or only get withous setter

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('Only One Item!');
    }
    return OnlyOne.instance;
  }
}

let wrong = new OnlyOne('Two!'); // error: Constructor of class 'OnlyOne' is private
let right = OnlyOne.getInstance();

console.log(wrong); // works but with errors!
console.log(right); // correct



































