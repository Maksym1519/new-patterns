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
class Samsung {
    useTypeC() {
        console.log('it is succes, Im Using type-C port');
    }
}
class Iphone {
    useLightning() {
        console.log('it is success, Im using lightning port');
    }
}
class LightingToTypecAdapter extends Iphone {
    constructor() {
        super(...arguments);
        this.samsungDevice = new Samsung();
    }
    /*constructor(iphone: Iphone) {
      super()
      this.iphoneDevice = iphone
    }*/
    useLightning() {
        // console.log('If I want to use Type-C, I need converting it to Lightning....')
        return this.samsungDevice.useTypeC();
    }
}
const mobileWithLighting = new Iphone();
const mobileAdapter = new LightingToTypecAdapter();
console.log(mobileAdapter.useLightning());
export {};
//# sourceMappingURL=adapter.js.map