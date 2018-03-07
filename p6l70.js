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
// если закоментили MyMath, то нужно в index.html добавить библиотеки
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCirmumference(10));
console.log(PI);
