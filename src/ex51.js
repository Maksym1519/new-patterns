var NodeM = /** @class */ (function () {
    function NodeM(value) {
        this.value = value;
        this.next = null;
    }
    return NodeM;
}());
var LinkedListm = /** @class */ (function () {
    function LinkedListm() {
        this.head = null;
        this.tail = null;
    }
    //-------------------------------------------------------------------------------
    LinkedListm.prototype.add = function (value) {
        var newNodeM = new NodeM(value);
        if (this.head === null) {
            this.head = newNodeM;
            this.tail = newNodeM;
        }
        else {
            this.tail.next = newNodeM;
            this.tail = newNodeM;
        }
        if (newNodeM.value === 999999) {
            console.log(newNodeM.value);
        }
    };
    LinkedListm.prototype.last = function () {
        return this.tail !== null ? this.tail.value : null;
    };
    //---------------------------------------------------------------------------
    LinkedListm.prototype.addAtIndex = function (index, value) {
        if (index === 0) {
            var newNodeM = new NodeM(value);
            newNodeM.next = this.head;
            this.head = newNodeM;
            if (this.tail === null) {
                this.tail = newNodeM;
            }
        }
        else {
            var currentNodeM = this.head;
            var currentIndexM = 0;
            while (currentNodeM !== null && currentIndexM < index - 1) {
                currentNodeM = currentNodeM.next;
                currentIndexM++;
            }
            if (currentNodeM !== null) {
                var newNodeM = new NodeM(value);
                newNodeM.next = currentNodeM.next;
                currentNodeM.next = newNodeM;
                if (currentNodeM === this.tail) {
                    this.tail = newNodeM;
                }
            }
        }
    };
    LinkedListm.prototype.addToStart = function (value) {
        var newNodeM = new NodeM(value);
        if (this.head === null) {
            this.head = newNodeM;
            this.tail = newNodeM;
        }
        else {
            newNodeM.next = this.head;
            this.head = newNodeM;
        }
    };
    //-------------------------------------------------------------------------
    LinkedListm.prototype.getAtIndex = function (index) {
        var currentNode = this.head;
        var currentIndex = 0;
        while (currentNode !== null && currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode !== null ? currentNode.value : null;
    };
    LinkedListm.prototype.getFromStart = function () {
        if (this.head !== null) {
            return this.head.value;
        }
        return null;
    };
    //-----------------------------------------------------------------------
    LinkedListm.prototype.removeLast = function () {
        var _a;
        if (this.head === null) {
            return null;
        }
        if (this.head === this.tail) {
            var value = this.head.value;
            this.head = null;
            this.tail = null;
            return value;
        }
        var currentNode = this.head;
        while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) !== this.tail) {
            currentNode = (_a = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) !== null && _a !== void 0 ? _a : null;
        }
        if (currentNode !== null && this.tail !== null) {
            var value = this.tail.value;
            currentNode.next = null;
            this.tail = currentNode;
            return value;
        }
        else {
            return null;
        }
    };
    //-----------------------------------------------------------------------
    LinkedListm.prototype.removeAtIndex = function (index) {
        if (index < 0) {
            throw new Error('Индекс должен быть положительным числом');
        }
        if (this.head === null) {
            throw new Error('Список пустой');
        }
        if (index === 0) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return;
        }
        var currentNode = this.head;
        var currentIndex = 0;
        var previousNode = null;
        while (currentNode !== null && currentIndex < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        if (currentNode === null) {
            throw new Error('Индекс выходит за пределы списка');
        }
        if (previousNode !== null) {
            previousNode.next = currentNode.next;
            if (previousNode.next === null) {
                this.tail = previousNode;
            }
        }
    };
    LinkedListm.prototype.removeFromStart = function () {
        if (this.head !== null) {
            this.head = this.head.next;
        }
        if (this.head === null) {
            this.tail = null;
        }
    };
    return LinkedListm;
}());
//генерация чисел--------------------------------------------------------
var linkedListm = new LinkedListm();
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//создание списка
for (var i = 1; i <= 1000000; i++) {
    var randomNumber = getRandomNumber(1, 1000000);
    linkedListm.add(randomNumber);
}
//замер времени на добавление, получение и удаление из конца списка
var startTimeAddLast = Date.now();
linkedListm.add(999999);
var endTimeAddLast = Date.now();
var addLastTimeExecution = (endTimeAddLast - startTimeAddLast) / 1000;
console.log("\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u043D\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043A\u043E\u043D\u0435\u0446 \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 ".concat(addLastTimeExecution));
var startTimeGetLast = Date.now();
var lastElement = linkedListm.last();
var endTimeGetLast = Date.now();
var getLastTime = (endTimeGetLast - startTimeGetLast) / 1000;
console.log("\u0412\u0440\u0435\u043C\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0437 \u043A\u043E\u043D\u0446\u0430 \u0441\u043F\u0438\u0441\u043A\u0430: ".concat(getLastTime, " \u0441"));
console.log("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442: ".concat(lastElement));
var startTimeRemoveLast = Date.now();
linkedListm.removeLast();
var endTimeRemoveLast = Date.now();
var removeLastTimeExecution = (endTimeAddLast - startTimeAddLast) / 1000;
console.log("\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u043D\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0438\u0437 \u043A\u043E\u043D\u0446\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 ".concat(removeLastTimeExecution));
//замер времени на добавление, получение и удаление из середины списка
var startTimeAddMiddle = Date.now();
linkedListm.addAtIndex(500000, 654321);
var endTimeAddMiddle = Date.now();
var addMiddleExecution = (endTimeAddMiddle - startTimeAddMiddle) / 1000;
console.log("\u0412\u0440\u0435\u043C\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0443 \u0441\u043F\u0438\u0441\u043A\u0430: ".concat(addMiddleExecution, " \u0441"));
var startTimeGetMiddle = Date.now();
var middleElement = linkedListm.getAtIndex(500000);
var endTimeGetMiddle = Date.now();
var getMiddleExecution = (endTimeGetMiddle - startTimeGetMiddle) / 1000;
console.log("\u0412\u0440\u0435\u043C\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0437 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u044B \u0441\u043F\u0438\u0441\u043A\u0430: ".concat(getMiddleExecution, " \u0441"));
console.log("\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u0437 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u044B \u0441\u043F\u0438\u0441\u043A\u0430 ".concat(middleElement));
var startTimeRemoveIndex = Date.now();
linkedListm.removeLast();
var endTimeRemoveIndex = Date.now();
var removeIndexTimeExecution = (endTimeRemoveIndex - startTimeRemoveIndex) / 1000;
console.log("\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u043D\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0438\u0437 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u044B \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 ".concat(removeIndexTimeExecution, " \u0441"));
//замер времени на добавление, получение и удаление из начала списка
var startTimeAddFirst = Date.now();
linkedListm.addToStart(30);
var endTimeAddFirst = Date.now();
var addFirstTimeExecution = (endTimeAddLast - startTimeAddLast) / 1000;
console.log("\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u043D\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043D\u0430\u0447\u0430\u043B\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 ".concat(addFirstTimeExecution));
var startTimeGetFirst = Date.now();
var firstElement = linkedListm.getFromStart();
var endTimeGetFirst = Date.now();
var getFirstTimeExecution = (endTimeGetFirst - startTimeGetFirst) / 1000;
console.log("\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 \u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 ".concat(getFirstTimeExecution, " c"));
console.log("\u041F\u0435\u0440\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442: ".concat(firstElement));
var startTimeRemoveFirst = Date.now();
linkedListm.getFromStart();
var endTimeRemoveFirst = Date.now();
var removeFirstTimeExecution = (endTimeRemoveFirst - startTimeRemoveFirst) / 1000;
console.log("\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u043D\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0438\u0437 \u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 ".concat(removeFirstTimeExecution, " c"));
