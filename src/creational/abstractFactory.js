var GermanEngine = /** @class */ (function () {
    function GermanEngine() {
    }
    GermanEngine.prototype.releaseEngine = function () {
        console.log('and German engine');
    };
    return GermanEngine;
}());
var AmericanEngine = /** @class */ (function () {
    function AmericanEngine() {
    }
    AmericanEngine.prototype.releaseEngine = function () {
        console.log('and American engine');
    };
    return AmericanEngine;
}());
var GermanCar = /** @class */ (function () {
    function GermanCar() {
    }
    GermanCar.prototype.releaseCar = function (engine) {
        console.log('This is the German car');
        engine.releaseEngine();
    };
    return GermanCar;
}());
var AmericanCar = /** @class */ (function () {
    function AmericanCar() {
    }
    AmericanCar.prototype.releaseCar = function (engine) {
        console.log('This is an American car');
        engine.releaseEngine();
    };
    return AmericanCar;
}());
var GermanFactory = /** @class */ (function () {
    function GermanFactory() {
    }
    GermanFactory.prototype.createEngine = function () {
        return new GermanEngine();
    };
    GermanFactory.prototype.createCar = function () {
        return new GermanCar();
    };
    return GermanFactory;
}());
var AmericanFactory = /** @class */ (function () {
    function AmericanFactory() {
    }
    AmericanFactory.prototype.createEngine = function () {
        return new AmericanEngine;
    };
    AmericanFactory.prototype.createCar = function () {
        return new AmericanCar();
    };
    return AmericanFactory;
}());
/*let FactoryBMW = new GermanFactory()
let carBMW = FactoryBMW.createCar()
let engineBMW = FactoryBMW.createEngine()
 carBMW.releaseCar(engineBMW)
let FactoryFord = new AmericanFactory()
let carFord = FactoryFord.createCar()
let engineFord = FactoryFord.createEngine()
carFord.releaseCar(engineFord)*/
function clientCode(factory) {
    var auto = factory.createCar();
    var motor = factory.createEngine();
    console.log(auto.releaseCar(motor));
}
clientCode(new GermanFactory());
clientCode(new AmericanFactory());
