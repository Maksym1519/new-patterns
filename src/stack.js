"use strict";
class Stack {
    constructor() {
        this.stackArray = [];
    }
    push(element) {
        this.stackArray.push(element);
    }
    pop() {
        return this.stackArray.pop();
    }
    peek() {
        return this.stackArray[this.stackArray.length - 1];
    }
    isempty() {
        return this.stackArray.length === 0;
    }
}
const stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.peek());
console.log(stack);
