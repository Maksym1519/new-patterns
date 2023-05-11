/*export {

};*/
;
class Leopard {
    constructor() {
        this.name = 'Leopard';
        this.calibr = 120;
        this.country = 'German';
    }
    leopardInfo() {
        console.log(`${this.name}: calibr ${this.calibr}, country-maker: ${this.country}`);
    }
}
;
class Challenger {
    constructor() {
        this.name = 'Chalenger';
        this.calibr = 120;
        this.country = 'Great Britain';
    }
    chalengerInfo() {
        console.log(`${this.name}: calibr ${this.calibr}, country-maker: ${this.country}`);
    }
}
;
class TankPlant {
    creatLeopard() { }
    ;
    createChalenger() { }
    ;
}
;
class TankCreate extends TankPlant {
    creatLeopard() {
        return new Leopard;
    }
    ;
    createChalenger() {
        return new Challenger;
    }
}
;
const tankPlant = new TankCreate();
const leopard = tankPlant.creatLeopard();
leopard.leopardInfo();
const chalenger = tankPlant.createChalenger();
chalenger.chalengerInfo();
export {};
//factory method---------------------------------------------
//abstarct factory------------------------------------
//# sourceMappingURL=app1.js.map