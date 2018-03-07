namespace MyMath { // общая область видимости MyMath
  const PI = 3.14
  // что бы функция была доступно, нужно экспортировать ее из области видимости
  export function calculateCirmumference(diameter: number) {
    return diameter * PI;
  }
}