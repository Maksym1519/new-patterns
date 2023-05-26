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
class Handler {
    constructor() {
        this.name = '';
        this.volume = 0;
    }
    setNext(name) {
        return this.incomer = name;
    }
    load(weight) {
        if (this.canLoad(weight)) {
            return this.info();
        }
        else if (this.incomer) {
            return this.incomer.load(weight);
        }
        else {
            return null;
        }
    }
}
class Samsung extends Handler {
    canLoad(weight) {
        return weight <= 3;
    }
    info() {
        return "Washing with a Samsung";
    }
}
class LG extends Handler {
    canLoad(weight) {
        return weight <= 5;
    }
    info() {
        return "Washing with a LG";
    }
}
class Bosh extends Handler {
    canLoad(weight) {
        return weight <= 7;
    }
    info() {
        return "Washing with a Bosh";
    }
}
const samsung = new Samsung();
const lg = new LG();
const bosh = new Bosh();
samsung.setNext(lg).setNext(bosh);
console.log(samsung.load(2.5));
console.log(samsung.load(5.5));
console.log(samsung.load(6));
export {};
//# sourceMappingURL=chain.js.map