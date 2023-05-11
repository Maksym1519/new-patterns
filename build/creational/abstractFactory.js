class GermanEngine {
    releaseEngine() {
        console.log('and German engine');
    }
}
class AmericanEngine {
    releaseEngine() {
        console.log('and American engine');
    }
}
class GermanCar {
    releaseCar(engine) {
        console.log('This is the German car');
        engine.releaseEngine();
    }
}
class AmericanCar {
    releaseCar(engine) {
        console.log('This is an American car');
        engine.releaseEngine();
    }
}
class GermanFactory {
    createEngine() {
        return new GermanEngine();
    }
    createCar() {
        return new GermanCar();
    }
}
class AmericanFactory {
    createEngine() {
        return new AmericanEngine;
    }
    createCar() {
        return new AmericanCar();
    }
}
/*let FactoryBMW = new GermanFactory()
let carBMW = FactoryBMW.createCar()
let engineBMW = FactoryBMW.createEngine()
 carBMW.releaseCar(engineBMW)
let FactoryFord = new AmericanFactory()
let carFord = FactoryFord.createCar()
let engineFord = FactoryFord.createEngine()
carFord.releaseCar(engineFord)*/
function clientCode(factory) {
    const auto = factory.createCar();
    const motor = factory.createEngine();
    console.log(auto.releaseCar(motor));
}
clientCode(new GermanFactory());
clientCode(new AmericanFactory());
export {};
//# sourceMappingURL=abstractFactory.js.map