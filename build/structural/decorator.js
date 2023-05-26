/*class Car {
    name: string
    price: number
    constructor() {
        this.name = "Car"
        this.price = 10000
    }
    getDescription() {
        return this.name
    }
    getPrice() {
        return this.price
    }
  }

class Tesla extends Car {
    constructor() {
        super()
        this.name = "Tesla"
        this.price = 25000
    }
}
class Autopilot extends Tesla {
    car: Tesla
    constructor(car: Tesla) {
        super()
        this.car = car
    }
    getPrice() {
        return this.car.getPrice() + 5000
    }
    getDescription() {
        return this.car.getDescription() + " " + 'autopilot'
    }
}
class Parktronic extends Tesla {
    car: any
    constructor(car: Car) {
        super()
        this.car = car
    }
    getPrice() {
        return this.car.getPrice() + 3000
    }
    getDescription() {
        return `${this.car.getDescription()} + parktronic`
    }
}
let tesla = new Tesla()
tesla = new Autopilot(tesla)
tesla = new Parktronic(tesla)
console.log(tesla.getPrice())
console.log(tesla.getDescription())*/
//-------------------------------------------------------------------------
class Laptop {
    constructor() {
        this.description = '';
    }
    getDescription() { return this.description; }
}
class Samsung extends Laptop {
    constructor() {
        super(...arguments);
        this.description = 'Samsung RV508';
    }
    getPrice() {
        return 1000;
    }
    getDescription() {
        return this.description;
    }
}
class Dell extends Laptop {
    constructor() {
        super(...arguments);
        this.description = 'Dell latittude';
    }
    getPrice() {
        return 1200;
    }
    getDescription() {
        return this.description;
    }
}
class ExtraOptions extends Laptop {
    constructor(laptop) {
        super();
        this.upgrade = laptop;
    }
}
class BatteryInforced extends ExtraOptions {
    getDescription() {
        return this.upgrade.getDescription() + " " + "inforced battery";
    }
    getPrice() {
        return this.upgrade.getPrice() + 100;
    }
}
class SsdInstal extends ExtraOptions {
    getDescription() {
        return this.upgrade.getDescription() + "SSD instal";
    }
    getPrice() {
        return this.upgrade.getPrice() + 200;
    }
}
let myLaptop = new Dell();
myLaptop = new BatteryInforced(myLaptop);
console.log(myLaptop.getDescription(), myLaptop.getPrice());
export {};
/*interface House {
    getLevel(): number
    getInfo(): string
}

class OneLevelHose implements House {

    getLevel() {
        return 1
    }
    getInfo() {
        return `One level`
    }
}

class TwolevelHouse implements House {
    house: House
    constructor(house: House) {
        this.house = house
        }
    getLevel(): number {
      return this.house.getLevel() + 1
    }
    getInfo(): string {
        return `this two level house`
    }
}
class TreelevelHouse implements House {
    house: House
    constructor(house: House) {
        this.house = house
        }
    getLevel(): number {
      return this.house.getLevel() + 2
    }
    getInfo(): string {
        return `this three level house`
    }
}
const house = new OneLevelHose()
const two = new TwolevelHouse(house)
console.log(two.getLevel())
*/ 
//# sourceMappingURL=decorator.js.map