var ConcreteAggregator = /** @class */ (function () {
    function ConcreteAggregator() {
        this.tasks = ["Header", "Main", "Footer"];
    }
    ConcreteAggregator.prototype.getIterator = function () {
        return new TaskIterator(this);
    };
    return ConcreteAggregator;
}());
var TaskIterator = /** @class */ (function () {
    function TaskIterator(concreteAgregate) {
        this.index = 0;
        this.concreteAgregate = concreteAgregate;
    }
    TaskIterator.prototype.hasNext = function () {
        if (this.index <= this.concreteAgregate.tasks.length) {
            return true;
        }
        return false;
    };
    TaskIterator.prototype.next = function () {
        return this.concreteAgregate.tasks[this.index++];
    };
    return TaskIterator;
}());
var concreteAgregate = new ConcreteAggregator();
var iterator = concreteAgregate.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
