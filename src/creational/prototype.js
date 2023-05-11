/* interface Site {
 width: number;
 height: number;
 background: string;
 fontSize: number;
 create(width: number,height: number,background: string,fontSize: number):void
}

class SitePrototype implements Site {
 width: number;
 height: number;
 background: string;
 fontSize: number;
 constructor(width: number,height: number, background: string, fontSize: number) {
     this.width = width
     this.height = height
     this.background = background
     this.fontSize = fontSize
     }
 create(width: number,height: number,background: string,fontSize: number) {
     //return new SitePrototype(this.width,this.height,this.background,this.fontSize)
     let sitePrototype = Object.assign({},this.width,this.height,this.background,this.fontSize)
     return sitePrototype
 }
 }

 

//const prototypeSite = new SitePrototype(1440,100,"white",14)
//const wikipedia = Object.create(prototypeSite)
//wikipedia.fontSize = 18;
//console.log(wikipedia.create())
let prototype = new SitePrototype(1600,100,'white',14)
console.log(prototype);
let site1 = Object.create(prototype)
site1.fontSize = 18;
console.log(site1)
let site2 = Object.create(prototype)
site2.background = 'red'
console.log(site2)


//----------------------------------------------------------------------------------------
 interface Soldier {
 name: string;
 strength: number;
 weapon: boolean
}

class SoldierProto implements Soldier {
 name: string;
 strength: number;
 weapon: boolean
 constructor(name: string, strength: number,weapon: boolean) {
     this.name = name
     this.strength = strength
     this.weapon = weapon
 }
 clone() {
     let proto: any;
     proto = Object.assign(this.name,this.strength,this.weapon)
     return proto
 }
 
}
let soldierProto = new SoldierProto('capelan',20,false)
console.log(soldierProto)
let soldiier1 = Object.create(soldierProto)
soldiier1.weapon = true
console.log(soldiier1)
//-----------------------------------------------------------------
interface IPrototype {
 clone():IPrototype
}

class Car implements IPrototype {
 private name: string;
 private country: string;
 constructor(name: string, country: string) {
     this.name = name;
     this.country = country
 }
 clone() {
    // return Object.assign(Object.create(Object.getPrototypeOf(this)),this)
     return new Car(this.name,this.country)
 }
 getName(): string {
     return this.name
 }
 getCountry(): string {
     return this.country
 }
}
let protoTypeResult: any = ''
const car: Car = new Car('bmw','germany')
console.log(car)

const x5 = car.clone()
console.log(x5.getCountry())
*/
var Site = /** @class */ (function () {
    function Site(width, height, background, fontSize) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.fontSize = fontSize;
    }
    Site.prototype.clone = function () {
        return new Site(this.width, this.height, this.background, this.fontSize);
    };
    return Site;
}());
var site1 = new Site(1440, 100, 'white', 14);
console.log(site1);
var site2 = site1.clone();
console.log(site2);
site2.background = 'grey';
console.log(site2);
var site3 = site2.clone();
site3.fontSize = 16;
console.log(site3);
