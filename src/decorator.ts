/*class Car {
    name: string
    price: number
    constructor() {
        this.name = "Car"
        this.price = 10000
    }
    getDescription() {
        return this.name
    }
    getPrice() {
        return this.price
    }
  }

class Tesla extends Car {
    constructor() {
        super()
        this.name = "Tesla"
        this.price = 25000
    }
}
class Autopilot extends Tesla {
    car: Tesla
    constructor(car: Tesla) {
        super()
        this.car = car
    }
    getPrice() {
        return this.car.getPrice() + 5000
    }
    getDescription() {
        return this.car.getDescription() + " " + 'autopilot'
    }
}
class Parktronic extends Tesla {
    car: any
    constructor(car: Car) {
        super()
        this.car = car
    }
    getPrice() {
        return this.car.getPrice() + 3000
    }
    getDescription() {
        return `${this.car.getDescription()} + parktronic`
    }
}
let tesla = new Tesla()
tesla = new Autopilot(tesla)
tesla = new Parktronic(tesla)
console.log(tesla.getPrice())
console.log(tesla.getDescription())*/
//-------------------------------------------------------------------------
abstract class Laptop {
     description: string = ''
    abstract getPrice(): number; 
    getDescription(): string {return this.description}
 }

class Samsung extends Laptop {
     description = 'Samsung RV508'
     getPrice(): number {
      return 1000
    }
        getDescription(): string {
        return this.description
    }
}
class Dell extends Laptop {
    description = 'Dell latittude'
     getPrice(): number {
        return 1200
    }
        getDescription(): string {
        return this.description
    }
   }
abstract class ExtraOptions extends Laptop {
    upgrade: Laptop
    constructor(laptop: Laptop) {
     super()   
     this.upgrade = laptop 
    }
    abstract getDescription(): string
    abstract getPrice(): number
}
class BatteryInforced extends ExtraOptions {
    getDescription(): string {
     return this.upgrade.getDescription() + " " + "inforced battery"
    }
    getPrice(): number {
     return this.upgrade.getPrice() + 100
     
    }
}
class SsdInstal extends ExtraOptions {
    getDescription(): string {
     return this.upgrade.getDescription() + "SSD instal"
    }
    getPrice(): number {
     return this.upgrade.getPrice() + 200
     
    }
}
let myLaptop = new Dell()
 myLaptop = new BatteryInforced(myLaptop)
console.log(myLaptop.getDescription(),myLaptop.getPrice())

 

/*interface House {
    getLevel(): number
    getInfo(): string
}

class OneLevelHose implements House {

    getLevel() {
        return 1
    }
    getInfo() {
        return `One level`
    }
}

class TwolevelHouse implements House {
    house: House
    constructor(house: House) {
        this.house = house
        }
    getLevel(): number {
      return this.house.getLevel() + 1
    }
    getInfo(): string {
        return `this two level house`
    }
}
class TreelevelHouse implements House {
    house: House
    constructor(house: House) {
        this.house = house
        }
    getLevel(): number {
      return this.house.getLevel() + 2
    }
    getInfo(): string {
        return `this three level house`
    }
}
const house = new OneLevelHose()
const two = new TwolevelHouse(house)
console.log(two.getLevel())
*/