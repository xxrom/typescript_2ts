// namespace MyMath { // создаем свою область видимости
//   const PI = 3.14

//   // что бы функция была доступно, нужно экспортировать ее из области видимости
//   export function calculateCirmumference(diameter: number) {
//     return diameter * PI;
//   }
//   export function  calculateRectangle(width: number, length: number) {
//     return width * length;
//   }
// }
// если закоментили MyMath, то нужно либо 1 варинат либо 2 вариант
// 1 вариант: в index.html добавить библиотеки
// tsc -w p6l70.ts p6l70_circleMath.ts p6l70_rectangleMath.ts
// 2 вариант: tsc --outFile p6l70_app.js p6l70_rectangleMath.ts p6l70_circleMath.ts p6l70.ts


// import namespaces
/// <reference path='./p6l70_circleMath.ts' />
/// <reference path='./p6l70_rectangleMath.ts' />
const PI = 2.99;

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCirmumference(10));

console.log(PI);