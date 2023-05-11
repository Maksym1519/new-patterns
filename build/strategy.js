//context--------------------------------------
class Calculator {
    setStrategy(functions) {
        this.functions = functions;
    }
    executeFunctions(a, b) {
        this.functions.execute(a, b);
    }
}
class Sum {
    execute(a, b) {
        return console.log(a + b);
    }
}
class Multiply {
    execute(a, b) {
        return console.log(a * b);
    }
}
class Subteract {
    execute(a, b) {
        return console.log(a - b);
    }
}
const calculator = new Calculator();
calculator.setStrategy(new Multiply());
console.log(calculator.executeFunctions(5, 7));
export {};
//# sourceMappingURL=strategy.js.map