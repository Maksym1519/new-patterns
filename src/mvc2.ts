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
class CalculatorModel {
  private num1: number;
  private num2: number;

  setNumbers(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  getSum(): number {
    return this.num1 + this.num2;
  }
}

// View 
class CalculatorView {
  private num1Input: HTMLInputElement;
  private num2Input: HTMLInputElement;
  private sumDisplay: HTMLSpanElement;

  constructor() {
    this.num1Input = document.getElementById("num1") as HTMLInputElement;
    this.num2Input = document.getElementById("num2") as HTMLInputElement;
    this.sumDisplay = document.getElementById("sumBtn") as HTMLSpanElement;
  }

  getNumbers(): [number, number] {
    const num1 = Number(this.num1Input.value);
    const num2 = Number(this.num2Input.value);
    return [num1, num2];
  }

  setSum(sum: number) {
   this.sumDisplay.textContent = sum.toString();
  }
}

// Controller
class CalculatorController {
  private model: CalculatorModel;
  private view: CalculatorView;
  constructor(model: CalculatorModel, view: CalculatorView) {
    this.model = model;
    this.view = view;
  }

  init() {
    const sumBtn = document.getElementById("sumBtn") as HTMLElement;
    sumBtn.addEventListener("click", this.handler.bind(this));
  }

  handler() {
    const [num1, num2] = this.view.getNumbers();
    this.model.setNumbers(num1, num2);
    const sum = this.model.getSum();
    this.view.setSum(sum);
  }
}

// Использование

const model = new CalculatorModel();
const view = new CalculatorView();
const controller = new CalculatorController(model, view);


controller.init();



