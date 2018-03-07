"use strict";
// Exercise 1
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;
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
//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };
//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }
console.log('1 ========================');
// 1 my
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
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
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
console.log('2 ========================');
// 2 my
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        if (width === void 0) { width = 0; }
        if (length === void 0) { length = 0; }
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle2 = new Rectangle();
console.log(rectangle2.calcSize());
rectangle2.width = 5;
rectangle2.length = 4;
console.log(rectangle2.calcSize());
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
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = '';
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            if (firstName.length > 3) {
                this._firstName = firstName;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person2 = new Person();
console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);
