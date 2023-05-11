var Singletone = /** @class */ (function () {
    function Singletone() {
        this.logger = [];
    }
    ;
    Singletone.getInstance = function () {
        if (!this.instance) {
            this.instance = new Singletone();
        }
        return this.instance;
    };
    Singletone.prototype.pushLogger = function (data) {
        this.logger.push(data);
    };
    Singletone.prototype.getLogger = function () {
        return this.logger;
    };
    return Singletone;
}());
var instance1 = Singletone.getInstance();
var instance2 = Singletone.getInstance();
instance1.pushLogger('Maksym');
console.log(instance1.getLogger());
if (instance1 === instance2) {
    console.log('Singleton is working');
}
else {
    console.log('Somthing went wrong');
}
//-----------------------------------------------------------------------------
var Ukraine = /** @class */ (function () {
    function Ukraine() {
    }
    return Ukraine;
}());
;
var a = new Ukraine();
var b = new Ukraine();
if (a === b) {
    console.log('this objects are even');
}
else {
    console.log('This objects not even');
}
var instance;
var Counter = /** @class */ (function () {
    function Counter() {
        if (!instance)
            instance = this;
        instance.count = 0;
        return instance;
    }
    Counter.prototype.getCount = function () {
        return instance.count;
    };
    Counter.prototype.increaseCount = function () {
        return instance.count++;
    };
    return Counter;
}());
var myCount1 = new Counter();
var myCount2 = new Counter();
myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();
console.log(myCount1.getCount());
console.log(myCount2.getCount());
var Singl = /** @class */ (function () {
    function Singl() {
    }
    Singl.getInstance = function () {
        if (!Singl.instance) {
            Singl.instance = new Singl();
        }
        return Singl.instance;
    };
    Singl.prototype.someLogic = function () { };
    return Singl;
}());
var singlCheck = function () {
    var inst1 = Singl.getInstance();
    var inst2 = Singl.getInstance();
    if (inst1 === inst2) {
        console.log('is working');
    }
    else {
        console.log('false');
    }
};
//----------------------------------------------------
/* class FuelTank {
  private static instance: FuelTank;
  private fuel: number = 0
   constructor(fuel: number) {
   if(typeof FuelTank.instance === 'object') {
     return FuelTank.instance
   }
   FuelTank.instance = this
  this.fuel = fuel
  }
  getFuel(): any {
    return this.fuel
  }
  }
 const checkFuel = new FuelTank(95)
 const checkFuel2 = new FuelTank(80)
 console.log(checkFuel.getFuel())
 console.log(checkFuel2.getFuel())
 console.log(checkFuel===checkFuel2)

 const hfgf = new FuelTank(34)

 console.log(hfgf.getFuel())
 console.log(checkFuel === hfgf)
 
*/
var FuelTank = /** @class */ (function () {
    function FuelTank(fuel) {
        if (FuelTank.exists) {
            return FuelTank.instance;
        }
        FuelTank.instance = this;
        FuelTank.exists = true;
        this.fuel = fuel;
    }
    FuelTank.prototype.getFuel = function () {
        return this.fuel;
    };
    return FuelTank;
}());
var gas = new FuelTank(95);
var gas2 = new FuelTank(80);
console.log(gas === gas2);
console.log(gas2.getFuel());


 