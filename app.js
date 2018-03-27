/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
define(["require", "exports", "./math/circle", "./math/rectangle"], function (require, exports, circle_1, rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    rectangle_1 = __importDefault(rectangle_1);
    console.log(circle_1.PI); // 3.14
    console.log(circle_1.calcCirumference(3)); // 9.42
    console.log(rectangle_1.calculateRectangle(2, 3)); // 6
    console.log(rectangle_1.default());
});
// создаем один бандл и его загружаем в index.html
// tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts
// через референс если указать файлы, то можно одной командой
// /// <reference path="rectangleMath.ts" />
// tsc app.ts --outFile app.js
