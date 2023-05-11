class ConcreteAggregator {
    constructor() {
        this.tasks = ["Header", "Main", "Footer"];
    }
    getIterator() {
        return new TaskIterator(this);
    }
}
class TaskIterator {
    constructor(concreteAgregate) {
        this.index = 0;
        this.concreteAgregate = concreteAgregate;
    }
    hasNext() {
        if (this.index <= this.concreteAgregate.tasks.length) {
            return true;
        }
        return false;
    }
    next() {
        return this.concreteAgregate.tasks[this.index++];
    }
}
const concreteAgregate = new ConcreteAggregator();
const iterator = concreteAgregate.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
export {};
//# sourceMappingURL=iterator.js.map