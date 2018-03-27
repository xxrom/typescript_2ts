define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PI = 3.14;
    function calcCirumference(diameter) {
        return diameter * exports.PI;
    }
    exports.calcCirumference = calcCirumference;
});
