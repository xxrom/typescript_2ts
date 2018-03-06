var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username // auto create public username in class
    ) {
        this.username = username; // auto create public username in class
        this.age = 22; // child can have this parameter
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Old Guy');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Nikita', 'nikita');
console.log(person);
person.printAge();
person.setType("cool  2"); // error setType is private
// Inheritance
var Nikita = /** @class */ (function (_super) {
    __extends(Nikita, _super);
    function Nikita(username) {
        var _this = _super.call(this, 'NikitaAAAA', username) || this;
        _this.name = "NikitaKA"; // owerwrite Person name
        _this.age = 33; // can access in age
        return _this;
        // console.log(this.type); // undefined / don't have access
    }
    return Nikita;
}(Person));
var nikita = new Nikita('anna');
console.log(nikita);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default'; // _ style
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "ab"; // length < 3
console.log(plant.species);
plant.species = "abcd"; // length >= 3
console.log(plant.species);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14; // always use this PI, without using new Helpers()
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 100;
    }
    // для метода ребенка, который extends Project
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
// let newProject = new Project(); // error
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('New name');
console.log(newProject);
// private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    } // readonly or only get withous setter
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('Only One Item!');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne('Two!'); // error: Constructor of class 'OnlyOne' is private
var right = OnlyOne.getInstance();
console.log(wrong); // works but with errors!
console.log(right); // correct
