class Queue {
    constructor() {
        this.queue = [];
    }
    adqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        return this.queue.shift();
    }
    front() {
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    size() {
        return this.queue.length;
    }
}
const queue = new Queue();
queue.adqueue(0);
queue.adqueue(1);
queue.adqueue(2);
queue.adqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);
const front = queue.front();
console.log(front);
console.log(queue.size());
export {};
//# sourceMappingURL=queue.js.map