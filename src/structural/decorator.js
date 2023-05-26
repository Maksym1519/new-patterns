var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Laptop = /** @class */ (function () {
    function Laptop() {
        this.description = '';
    }
    Laptop.prototype.getDescription = function () { return this.description; };
    return Laptop;
}());
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Samsung RV508';
        return _this;
    }
    Samsung.prototype.getPrice = function () {
        return 1000;
    };
    Samsung.prototype.getDescription = function () {
        return this.description;
    };
    return Samsung;
}(Laptop));
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Dell latittude';
        return _this;
    }
    Dell.prototype.getPrice = function () {
        return 1200;
    };
    Dell.prototype.getDescription = function () {
        return this.description;
    };
    return Dell;
}(Laptop));
var ExtraOptions = /** @class */ (function (_super) {
    __extends(ExtraOptions, _super);
    function ExtraOptions(laptop) {
        var _this = _super.call(this) || this;
        _this.upgrade = laptop;
        return _this;
    }
    return ExtraOptions;
}(Laptop));
var BatteryInforced = /** @class */ (function (_super) {
    __extends(BatteryInforced, _super);
    function BatteryInforced() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryInforced.prototype.getDescription = function () {
        return this.upgrade.getDescription() + " " + "inforced battery";
    };
    BatteryInforced.prototype.getPrice = function () {
        return this.upgrade.getPrice() + 100;
    };
    return BatteryInforced;
}(ExtraOptions));
var SsdInstal = /** @class */ (function (_super) {
    __extends(SsdInstal, _super);
    function SsdInstal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SsdInstal.prototype.getDescription = function () {
        return this.upgrade.getDescription() + "SSD instal";
    };
    SsdInstal.prototype.getPrice = function () {
        return this.upgrade.getPrice() + 200;
    };
    return SsdInstal;
}(ExtraOptions));
var myLaptop = new Dell();
myLaptop = new BatteryInforced(myLaptop);
console.log(myLaptop.getDescription(), myLaptop.getPrice());
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
