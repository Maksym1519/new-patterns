//import { AnyARecord } from "dns"
/*class CalcModel {
input1: number
input2: number
constructor(input1: number, input2: number) {
this.input1 = input1
this.input2 = input2
}
}

class CalcView {
    constructor() {}
        show(model: CalcModel) {
         console.log("Sun is:", model.input1 + model.input2)
        }
    
}

class CalcControler {
    model: CalcModel
    view: CalcView
    constructor(model: CalcModel, view: CalcView) {
    this.model = model
    this.view = view
    }
    setInput1(input: number) {
        this.model.input1 = input
    }
    setInput2(input: number) {
        this.model.input2 = input
    }
    
    updateView() {
        this.view.show(this.model)
    }
}
*/
// Model 
var CalculatorModel = /** @class */ (function () {
    function CalculatorModel() {
    }
    CalculatorModel.prototype.setNumbers = function (num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    };
    CalculatorModel.prototype.getSum = function () {
        return this.num1 + this.num2;
    };
    return CalculatorModel;
}());
// View 
var CalculatorView = /** @class */ (function () {
    function CalculatorView() {
        this.num1Input = document.getElementById("num1");
        this.num2Input = document.getElementById("num2");
        this.sumDisplay = document.getElementById("sumBtn");
    }
    CalculatorView.prototype.getNumbers = function () {
        var num1 = Number(this.num1Input.value);
        var num2 = Number(this.num2Input.value);
        return [num1, num2];
    };
    CalculatorView.prototype.setSum = function (sum) {
        this.sumDisplay.textContent = sum.toString();
    };
    return CalculatorView;
}());
// Controller
var CalculatorController = /** @class */ (function () {
    function CalculatorController(model, view) {
        this.model = model;
        this.view = view;
    }
    CalculatorController.prototype.init = function () {
        var sumBtn = document.getElementById("sumBtn");
        sumBtn.addEventListener("click", this.handler.bind(this));
    };
    CalculatorController.prototype.handler = function () {
        var _a = this.view.getNumbers(), num1 = _a[0], num2 = _a[1];
        this.model.setNumbers(num1, num2);
        var sum = this.model.getSum();
        this.view.setSum(sum);
    };
    return CalculatorController;
}());
// Использование
var model = new CalculatorModel();
var view = new CalculatorView();
var controller = new CalculatorController(model, view);
controller.init();
