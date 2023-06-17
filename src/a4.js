var Eq = /** @class */ (function () {
    function Eq() {
        this.stack = [];
    }
    Eq.prototype.checkBrackets = function (eq) {
        for (var i = 0; i <= eq.length; i++) {
            var char = eq[i];
            if (char === "(") {
                this.stack.push(char);
            }
            else if (char === ")") {
                if (this.stack.length === 0 || this.stack.pop() !== "(") {
                    return false;
                }
            }
        }
        return this.stack.length === 0;
    };
    return Eq;
}());
var equation = new Eq();
var eq = String(prompt("Введите уравнение"));
if (eq !== null) {
    var isValid = equation.checkBrackets(eq);
    if (isValid) {
        console.log("Скобки расположены правильно");
    }
    else {
        console.log("Скобки расположены неправильно");
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
