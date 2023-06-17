class Eq {
    stack: Array<string> = []
    checkBrackets(eq: string): boolean {
     for(let i = 0; i <= eq.length; i++) {
        const char = eq[i]
        if (char === "(") {
            this.stack.push(char)
        } else if (char === ")") {
          if (this.stack.length === 0 || this.stack.pop() !== "(") {
            return false
          }
        }
     }
     return this.stack.length === 0
    }
}
const equation = new Eq()
const eq = String(prompt("Введите уравнение"))
if (eq !== null) {
    const isValid = equation.checkBrackets(eq)
    if (isValid) {
        console.log("Скобки расположены правильно")
    } else {
        console.log("Скобки расположены неправильно")
    }
}
/*
const equationCheck = function checkEq(ar: string) {
for(let i = 0; i <= ar.length; i++) {
if (ar.indexOf("(") < ar.indexOf(")") && ar[i] === "(" ) {
    return true
} 
    }
}

const ar = String(prompt("Введите уравнение"))

if(equationCheck(ar)) {
console.log("Скобки расположены правильно")
} else {
    console.log("Скобки расположены неправильно")
}
*/