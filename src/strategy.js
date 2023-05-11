//context--------------------------------------
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.setStrategy = function (functions) {
        this.functions = functions;
    };
    Calculator.prototype.executeFunctions = function (a, b) {
        this.functions.execute(a, b);
    };
    return Calculator;
}());
var Sum = /** @class */ (function () {
    function Sum() {
    }
    Sum.prototype.execute = function (a, b) {
        return console.log(a + b);
    };
    return Sum;
}());
var Multiply = /** @class */ (function () {
    function Multiply() {
    }
    Multiply.prototype.execute = function (a, b) {
        return console.log(a * b);
    };
    return Multiply;
}());
var Subteract = /** @class */ (function () {
    function Subteract() {
    }
    Subteract.prototype.execute = function (a, b) {
        return console.log(a - b);
    };
    return Subteract;
}());
var calculator = new Calculator();
calculator.setStrategy(new Multiply());
console.log(calculator.executeFunctions(5, 7));
