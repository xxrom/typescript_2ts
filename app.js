/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
define(["require", "exports", "./math/circle"], function (require, exports, circle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(circle_1.PI);
    console.log(circle_1.calcCirumference(3));
});
// создаем один бандл и его загружаем в index.html
// tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts
// через референс если указать файлы, то можно одной командой
// /// <reference path="rectangleMath.ts" />
// tsc app.ts --outFile app.js
