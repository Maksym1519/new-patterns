class Stack <T> {
    private stackArray: T []
    constructor() {
        this.stackArray = []
    }
    push(element: T): void {
        this.stackArray.push(element)
    }
    pop(): T | undefined {
    return this.stackArray.pop()
    }
    peek():T | undefined {
        return this.stackArray[this.stackArray.length -1]
    }
    isempty(): boolean {
        return this.stackArray.length === 0
    }
}
const stack = new Stack()
stack.push(0)
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)
console.log(stack.pop())
console.log(stack)
console.log(stack.peek())
console.log(stack)


 
