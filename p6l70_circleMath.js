var MyMath;
(function (MyMath) {
    var PI = 3.14;
    // что бы функция была доступно, нужно экспортировать ее из области видимости
    function calculateCirmumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCirmumference = calculateCirmumference;
})(MyMath || (MyMath = {}));
