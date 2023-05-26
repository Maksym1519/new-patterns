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
/*interface HandlerInterface {
  load(weight: number): void
  canLoad(weight: number): void
  setNext(name: Handler): void
}
class Handler implements HandlerInterface {
    name: string = ''
    volume: number = 0
    incomer: Handler
    load(weight: number) {
     if(this.canLoad(weight)) {
        console.log(`loaded ${weight} using ${this.name}`)
     } else if(this.incomer) {
        console.log(`Can't load using ${this.name}`)
        this.incomer.load(weight)
     } else {
        console.log("Unfortunatly not enough volume")
     }
    }
    canLoad(weight: number): boolean {
      return this.volume >= weight
    }
    setNext(name: Handler): Handler {
      return this.incomer = name
    }
}
class Samsung extends Handler {
    constructor(volume: number) {
      super()
      this.volume = volume
      this.name = "Samsung: 3kg"
    }
}
class LG extends Handler {
    constructor(volume: number) {
      super()
      this.volume = volume
      this.name = "LG: 5kg"
    }
}
class Bosh extends Handler {
    constructor(volume: number) {
      super()
      this.volume = volume
      this.name = "Bosh: 7kg"
    }
}
const samsung = new Samsung(3)
const lg = new LG(5)
const bosh = new Bosh(7)
samsung.setNext(lg)
lg.setNext(bosh)
console.log(samsung.load(5.2))
//--------------------------------------------------------------------------
*/
var Handler = /** @class */ (function () {
    function Handler() {
        this.name = '';
        this.volume = 0;
    }
    Handler.prototype.setNext = function (name) {
        return this.incomer = name;
    };
    Handler.prototype.load = function (weight) {
        if (this.canLoad(weight)) {
            return this.info();
        }
        else if (this.incomer) {
            return this.incomer.load(weight);
        }
        else {
            return null;
        }
    };
    return Handler;
}());
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Samsung.prototype.canLoad = function (weight) {
        return weight <= 3;
    };
    Samsung.prototype.info = function () {
        return "Washing with a Samsung";
    };
    return Samsung;
}(Handler));
var LG = /** @class */ (function (_super) {
    __extends(LG, _super);
    function LG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LG.prototype.canLoad = function (weight) {
        return weight <= 5;
    };
    LG.prototype.info = function () {
        return "Washing with a LG";
    };
    return LG;
}(Handler));
var Bosh = /** @class */ (function (_super) {
    __extends(Bosh, _super);
    function Bosh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bosh.prototype.canLoad = function (weight) {
        return weight <= 7;
    };
    Bosh.prototype.info = function () {
        return "Washing with a Bosh";
    };
    return Bosh;
}(Handler));
var samsung = new Samsung();
var lg = new LG();
var bosh = new Bosh();
samsung.setNext(lg).setNext(bosh);
console.log(samsung.load(2.5));
console.log(samsung.load(5.5));
console.log(samsung.load(6));
