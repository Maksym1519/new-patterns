var Memento = /** @class */ (function () {
    function Memento(value) {
        this.value = value;
    }
    return Memento;
}());
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.save = function (val) {
        return new Memento(val);
    };
    Creator.prototype.restore = function (memento) {
        return memento.value;
    };
    return Creator;
}());
var CareTaker = /** @class */ (function () {
    function CareTaker() {
        this.values = [];
    }
    CareTaker.prototype.addMemento = function (memento) {
        this.values.push(memento);
    };
    CareTaker.prototype.getMemento = function (index) {
        return this.values[index];
    };
    return CareTaker;
}());
var careTaker = new CareTaker();
var creator = new Creator();
var firstState = careTaker.addMemento(creator.save("Максим"));
var secondState = careTaker.addMemento(creator.save("Максим Сергеевич"));
var thirdState = careTaker.addMemento(creator.save("Максим Сергеевич Коростелев"));
console.log(careTaker.values);
console.log(creator.restore(careTaker.getMemento(0)));
/*careTaker.addMemento(creator.save("Hello"))
careTaker.addMemento(creator.save("Hello world !"))
careTaker.addMemento(creator.save("Hello world !!!"))
console.log(creator.restore(careTaker.getMemento(1)))

/*class Game {
   private level: string = ''
   private time: number = 0
    set (level: string, time: number) {
        this.level = level
        this.time = time
    }
    load(save: Save) {
        this.level = save.getLevel()
        this.time = save.getTime()
    }
    save(): Save {
        return new Save(this.level, this.time)
    }
}
class Save {
    save: Save
    private level: string
    private time: number
    constructor (level: string, time: number) {
        this.level = level
        this.time = time
    }
    getLevel() {
        return this.level
    }
    getTime() {
        return this.time
    }
}
class File  {
    save: Save
    getSave(): Save {
        return this.save
    }
    setSave(save: Save) {
        this.save = this.save
    }
}
const game = new Game()
game.set("Level: 2",1000)
console.log(game)
const file = new File()
file.setSave(game.save())
game.set("Level: 3",4000)
game.load(file.getSave())
console.log(game)
/*const creator: any = {
    save: (val: string) => new Memento(val),
    restore: (memento: Memento) => memento.value
}*/
