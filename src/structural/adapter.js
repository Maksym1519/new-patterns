/*class OldCalc {
    operations(t1: number,t2: number,operation: string) {
     switch(operation) {
        case "add": return t1 + t2
        case "sub": return t1 - t2
        default: return NaN
     }
    }
}

class NewCalc {
  add(t1: number,t2: number) {
    return t1 + t2
  }
  sub(t1: number,t2: number) {
    return t1 - t2
  }
}
class CalcAdapter {
    calc: NewCalc
    constructor() {
         this.calc = new NewCalc()
    }
    operations(t1: number,t2: number,operation: string) {
        switch(operation) {
            case "add": return this.calc.add(t1,t2)
            case "sub": return this.calc.sub(t1,t2)
            default: return NaN
         }
    }
}
const oldCalc = new OldCalc()
console.log(oldCalc.operations(10,5,'add'))
const newCalc = new NewCalc()
console.log(newCalc.add(10,10))
const adapter = new CalcAdapter()
console.log(adapter.operations(10,20,'add'))

 class Engine2 {
    simpleInterface() {
        console.log('br-br- engine2')
    }
 }
 class Engine8 {
    complicatedInterface() {
        console.log('boom boom- engine8')
    }
 }

 class engineAdapter {
    engine: any
    constructor(engine: any) {
        this.engine = engine
    }
    simpleInterface(engine: any) {
this.engine.complicatedInterface()
    }
 }

 class MyCar {
    startengine(engine: any) {
        engine.simpleInterface()
    }
 }

 const car = new MyCar()
 const engine2 = new Engine2()
 console.log(car.startengine(engine2))
 const engAdapter = new engineAdapter(new Engine8())
 console.log(engAdapter.simpleInterface(engine2))*/
//---------------------------------------------------------------------------------------
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
var Samsung = /** @class */ (function () {
    function Samsung() {
    }
    Samsung.prototype.useTypeC = function () {
        console.log('it is succes, Im Using type-C port');
    };
    return Samsung;
}());
var Iphone = /** @class */ (function () {
    function Iphone() {
    }
    Iphone.prototype.useLightning = function () {
        console.log('it is success, Im using lightning port');
    };
    return Iphone;
}());
var LightingToTypecAdapter = /** @class */ (function (_super) {
    __extends(LightingToTypecAdapter, _super);
    function LightingToTypecAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.samsungDevice = new Samsung();
        return _this;
    }
    /*constructor(iphone: Iphone) {
      super()
      this.iphoneDevice = iphone
    }*/
    LightingToTypecAdapter.prototype.useLightning = function () {
        // console.log('If I want to use Type-C, I need converting it to Lightning....')
        return this.samsungDevice.useTypeC();
    };
    return LightingToTypecAdapter;
}(Iphone));
var mobileWithLighting = new Iphone();
var mobileAdapter = new LightingToTypecAdapter();
console.log(mobileAdapter.useLightning());
