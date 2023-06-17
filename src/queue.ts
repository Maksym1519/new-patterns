class Queue<T> {
    private queue: T[];
  
    constructor() {
      this.queue = [];
    }
  
    adqueue(item: T): void {
      this.queue.push(item);
    }
  
    dequeue(): T | undefined {
      return this.queue.shift();
    }
  
    front(): T | undefined {
      return this.queue[0];
    }
  
    isEmpty(): boolean {
      return this.queue.length === 0;
    }
  
    size(): number {
      return this.queue.length;
    }
  }
  const queue = new Queue()
  queue.adqueue(0)
  queue.adqueue(1)
  queue.adqueue(2)
  queue.adqueue(3)
  console.log(queue)
  queue.dequeue()
  console.log(queue)
  const front = queue.front()
  console.log(front)
  console.log(queue.size())