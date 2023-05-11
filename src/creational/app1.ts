/*export {

};*/


//factory method------------------------------------------------------
/*class FurniturePlant {
    produce(type: string) {
        let furniture: any;
        if(type === 'chair') {
            furniture = new ChairFurniture();
        } else if(type === 'table') {
            furniture = new TableFurniture();
        } else if(type === 'sofa') {
            furniture = new SofaFurniture();
        }
        furniture.type = type;
        furniture.make = function () {
            console.log(`${this.type} = ${this.wood} + ${this.glue} + ${this.paint}`)
        }
        return furniture;
    }
};

 interface Furniture {
    type: string;
    glue: string;
    paint: string;
    wood: string;
 };
 
 class ChairFurniture implements Furniture {
    type: string;
    glue: string;
    paint: string;
    wood: string;
    constructor() {
        this.type = 'Chair';
        this.glue = 'PVA';
        this.wood = 'pine';
        this.paint = 'white'
    }
 };

 class TableFurniture implements Furniture {
    type: string;
    glue: string;
    paint: string;
    wood: string;
    constructor() {
        this.type = 'Table';
        this.glue = 'PVA';
        this.wood = 'oak';
        this.paint = 'polish';
       }
 };
 class SofaFurniture implements Furniture {
    type: string;
    glue: string;
    paint: string;
    wood: string;
    constructor() {
        this.type = 'Sofa';
        this.glue = 'moment';
        this.wood = 'pine';
        this.paint = 'mix';
       }
 };

 const plant = new FurniturePlant();

 let chair = plant.produce('chair');
 let table = plant.produce('table');
 let sofa = plant.produce('sofa')
 chair.make();
 table.make();
 sofa.make();
*/
//abstract factory--------------------------------------------------------

    interface Tank {
    name: string;
    calibr: number;
    country: string
 };

 class Leopard implements Tank {
        name = 'Leopard';
        calibr = 120;
        country = 'German';
        leopardInfo(): void {
            console.log(`${this.name}: calibr ${this.calibr}, country-maker: ${this.country}`)
        }
   };

   class Challenger implements Tank {
        name = 'Chalenger';
        calibr = 120;
        country = 'Great Britain';
        chalengerInfo(): void {
            console.log(`${this.name}: calibr ${this.calibr}, country-maker: ${this.country}`)
        }
   };

   abstract class TankPlant {
    creatLeopard(): void {};
    createChalenger(): void {};
   };

   class TankCreate extends TankPlant {
    creatLeopard(): any {
        return new Leopard;
    };
    createChalenger(): any {
        return new Challenger
    }
   };

   const tankPlant = new TankCreate();

   const leopard = tankPlant.creatLeopard();
   leopard.leopardInfo();

   const chalenger = tankPlant.createChalenger();
   chalenger.chalengerInfo()

    
   //factory method---------------------------------------------
   


//abstarct factory------------------------------------

    