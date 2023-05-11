interface Iterator {
    hasNext(): boolean
    next(): Object
}
interface Aggregator {
    getIterator(): Iterator
}
class ConcreteAggregator implements Aggregator {
    tasks: Array<string> = ["Header","Main","Footer"]
    getIterator(): Iterator {
        return new TaskIterator(this)
    }
 }
 class TaskIterator implements Iterator {
   private concreteAgregate: ConcreteAggregator
    index: number = 0
    constructor(concreteAgregate: ConcreteAggregator) {
    this.concreteAgregate = concreteAgregate
    }
     hasNext():boolean {
     if(this.index <= this.concreteAgregate.tasks.length) {
        return true
     } return false
    }
    next(): Object {
    return this.concreteAgregate.tasks[this.index++]
    }
 }
 
 const concreteAgregate = new ConcreteAggregator()
 const iterator = concreteAgregate.getIterator()
  
 while(iterator.hasNext()) {
   console.log(iterator.next())
 }
   