
class Handler {
    name: string = ''
    volume: number = 0
    incomer: any
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
    canLoad(weight: number) {
      return this.volume >= weight
    }
    setNext(name: any) {
     this.incomer = name
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
