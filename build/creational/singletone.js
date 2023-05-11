/*class Singletone {
  private static instance: Singletone;
  private logger: string[] = [];

     private constructor() {};
      static getInstance() {
      if(!this.instance) {
        this.instance = new Singletone();
      }
      return this.instance
  }
      pushLogger(data: string): void {
      this.logger.push(data)
     }
      getLogger(): string[] {
    return this.logger
   }
  }

  let instance1 = Singletone.getInstance();
  let instance2 = Singletone.getInstance();
  instance1.pushLogger('Maksym')
  console.log(instance1.getLogger())
  if(instance1 === instance2) {
    console.log('Singleton is working')
  } else {
    console.log('Somthing went wrong')
  }

  
//-----------------------------------------------------------------------------

  class Ukraine {
//name: 'Ukraine'
  };

  let a = new Ukraine();
  let b = new Ukraine();

  if(a === b) {
    console.log('this objects are even')
  } else {
    console.log('This objects not even')
  }

let instance: any;
  class Counter {
    constructor() {
      if(!instance) instance = this
      instance.count = 0;
      return instance
    }
    getCount() {
      return instance.count
    }
    increaseCount()  {
      return instance.count++
    }
  }
  const myCount1 = new Counter()
  const myCount2 = new Counter()
  myCount1.increaseCount()
  myCount1.increaseCount()
  myCount2.increaseCount()
  myCount2.increaseCount()
  console.log(myCount1.getCount())
  console.log(myCount2.getCount())

 
   
  class Singl {
    private static instance: Singl
    private constructor() {}
    static getInstance(): Singl {
     if(!Singl.instance) {
      Singl.instance = new Singl()
     }
     return Singl.instance
    }
    someLogic(): void {}
  }

  const singlCheck = (): any => {
    const inst1 = Singl.getInstance()
    const inst2 = Singl.getInstance()
    if(inst1 === inst2) {
      console.log('is working')
    } else {
      console.log('false')
    }
  }
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
class FuelTank {
    constructor(fuel) {
        if (FuelTank.exists) {
            return FuelTank.instance;
        }
        FuelTank.instance = this;
        FuelTank.exists = true;
        this.fuel = fuel;
    }
    getFuel() {
        return this.fuel;
    }
}
const gas = new FuelTank(95);
const gas2 = new FuelTank(80);
console.log(gas);
console.log(gas === gas2);
console.log(gas2.getFuel());
export {};
//# sourceMappingURL=singletone.js.map