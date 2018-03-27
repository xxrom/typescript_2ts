/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

// import CircleMath = MyMath.Circle;

// const PI = 2.99;

// console.log(MyMath.calculateRectangle(10, 20));
// console.log(MyMath.Circle.calculateCircumference(4));
// console.log(CircleMath.calculateCircumference(4));
// console.log(PI);

// next import method
import { PI, calcCirumference } from './math/circle';
console.log(PI);
console.log(calcCirumference(3));










// создаем один бандл и его загружаем в index.html
// tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts


// через референс если указать файлы, то можно одной командой
// /// <reference path="rectangleMath.ts" />
// tsc app.ts --outFile app.js





