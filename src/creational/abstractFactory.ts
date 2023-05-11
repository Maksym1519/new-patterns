/*abstract class Dell {
    showInfo() {};
}

class DellVostro extends Dell {
               showInfo() {
               console.log('Vostro: start produce')
           }
           
   }

class DellLatitude extends Dell {
           showInfo() {
           console.log('Latitude: start produce')
       }
       };

   abstract class DellFactory {
   createVostro(type: string):void {};
   createLatitude(type: string):void {}
};

class VostroFactory extends DellFactory {
     produceVostro() {
       return new DellVostro()
     }
};
class LatitudeFactory extends DellFactory {
      produceLatitude() {
       return new DellLatitude()
      }
};

const vostroMaker = new VostroFactory();
const latittudeMaker = new LatitudeFactory();
const vostro = vostroMaker.produceVostro();
const latitude = latittudeMaker.produceLatitude();
vostro.showInfo()
latitude.showInfo()



interface Water {
   info()
}
class Cola implements Water {
    info() {
        console.log('This is Cola made by Cola factory')
    }
}

class Pepsi implements Water {
    info() {
        console.log('This is Pepsi made by Pepsi factory')
    }
}

interface SoftDrinkProduser {
    producePepsi() 
    produceCola()
}

class WaterMaker implements SoftDrinkProduser {
    producePepsi() {
        return new Pepsi()
    }
    produceCola() {
        return new Cola()
    }
}

const waterFactory = new WaterMaker();
waterFactory.produceCola().info()

   */
//-----------------------------------------------------------
interface Engine {
    releaseEngine():void
}

class GermanEngine implements Engine {
    releaseEngine() {
        console.log('and German engine')
    }
}

class AmericanEngine implements Engine {
    releaseEngine() {
        console.log('and American engine')
    }
}

interface Car {
    releaseCar(engine: Engine):void
}

class GermanCar implements Car {
    releaseCar(engine: Engine) {
        console.log('This is the German car')
        engine.releaseEngine()
    }
   
}
class AmericanCar implements Car {
    releaseCar(engine: Engine) {
        console.log('This is an American car')
       engine.releaseEngine()
    }
}

interface CarFactory {
    createEngine():Engine
    createCar():Car
}

class GermanFactory implements CarFactory {
    createEngine() {
        return new GermanEngine()
    }
    createCar() {
        return new GermanCar()
        }
}

class AmericanFactory implements CarFactory {
    createEngine() {
        return new AmericanEngine
    }
    createCar() {
        return new AmericanCar()
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

    function clientCode(factory:any) {
    const auto = factory.createCar()
    const motor = factory.createEngine()
    console.log(auto.releaseCar(motor))
    }
clientCode(new GermanFactory())
clientCode(new AmericanFactory())