//context--------------------------------------
class Calculator {
 private functions: Functions 
 setStrategy(functions: Functions) {
    this.functions = functions
 }
 executeFunctions(a: number, b: number) {
  this.functions.execute(a,b)
 }
}
interface Functions {
 execute(a: number,b: number): void
}
class Sum implements Functions {
    execute(a: number, b: number) {
        return console.log(a + b)
    }
}
class Multiply implements Functions {
    execute(a: number, b: number) {
        return console.log(a * b)
    }
}
class Subteract implements Functions {
    execute(a: number, b: number) {
        return console.log(a - b)
    }
}

const calculator = new Calculator()
calculator.setStrategy(new Multiply())
console.log(calculator.executeFunctions(5,7)) 