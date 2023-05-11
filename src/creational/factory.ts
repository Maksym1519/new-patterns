
/*interface Furniture {
    color: string,
    glue: string,
    wood: string,
    };

 class Table implements Furniture {
     color: string;
     glue: string;
     wood: string;
         constructor(type: string,color: string,glue: string,wood: string) {
         this.color = color
         this.glue = glue
         this.wood = wood
         }
 };

 class Chair implements Furniture {
         color: string;
         glue: string;
         wood: string;
         constructor(type: string,color: string,glue: string,wood: string) {
         this.color = color
         this.glue = glue
         this.wood = wood
      }
 };

 class Sofa implements Furniture {
         color: string;
         glue: string;
         wood: string;
         constructor(type: string,color: string,glue: string,wood: string) {
         this.color = color
         this.glue = glue
         this.wood = wood
      }
 };
class FurniturePlant {
        create(type: string): any {
         if(type === 'table') {
         return new Table(type,'polish','pva','pine')
         } else if(type === 'chair') {
         return new Chair(type,'white','moment','pine')
        } else if(type === 'sofa') {
         return new Sofa(type,'polish','pva','oak')
        }
      }
     
     }
 
 

 let Plant = new FurniturePlant();
 let table = Plant.create('table');
 console.log(table)
 let chair = Plant.create('chair');
 console.log(chair)
 let sofa = Plant.create('sofa')
 console.log(sofa)
 //----------------------------------------------------------------------------------------------------------
/* class HeaderMain {
    color: string
    fontSize: number
    constructor(color: string, fontSize: number) {
        this.color = color
        this. fontSize = fontSize
    }
 }
 class HeaderGallery {
    color: string
    fontSize: number
    constructor(color: string, fontSize: number) {
        this.color = color
        this. fontSize = fontSize
    }
 }
 class HeaderContacts {
    color: string
    fontSize: number
    constructor(color: string, fontSize: number) {
        this.color = color
        this. fontSize = fontSize
    }
 }

 class HeaderCreate {
    static list: {main: object,gallery: object,contacts: object} = {
    main: HeaderMain,
    gallery: HeaderGallery,
    contacts: HeaderContacts,
     }
    create(color: string,fontSize: number, type: string): any {
        const HeaderType = HeaderCreate.list[type];
        const header = new HeaderType(color,fontSize);
        header.info = function(): void {
        console.log(`${this.color} ${this.fontSize}`)
        }
        return header
    }
 }

 const headerMain = new HeaderCreate()
 console.log(headerMain.create('white',14,'main'))
 
//----------------------------------------------------------------
class Footer {
    background: string
    width: number
    height: string
    fontSize: number
constructor(background: string, width: number, height: string, fontSize: number) {
    this.background = background
    this.width = width
    this.height = height
    this.fontSize = fontSize
}
}

class FooterCreate {
    create(type: string) {
if (type  === 'main') {
    return new Footer('white',1440,'auto',14)
} else if (type === 'gallery') {
    return new Footer('grey',1600,'auto',16)
    }
}
    }

    const FooterFabric = new FooterCreate()
    const main = FooterFabric.create('main')
    const gallery = FooterFabric.create('gallery')
    console.log(main)
    console.log(gallery)
*/
    //-----------------------------------------------------------
    interface Lenovo {
       info(name: string,price: number):any;
    }

    class ModelBusiness implements Lenovo {
         info (name: string,price: number) {
            console.log(`This is ${name} and its price ${price}`)
        }
    }
    class ModelGame implements Lenovo {
         info (name: string,price: number) {
            console.log(`This is ${name} and its price ${price}`)
        }
    }

   abstract class ComputerFactory {
        createComuter() {}
    }

    class BussinesFactory extends ComputerFactory {
        createComuter(): Lenovo {
            return new ModelBusiness()
        }
    }
    
    class GameFactory extends ComputerFactory {
        createComuter(): Lenovo {
            return new ModelGame()
        }
    }

    const PcBussinesFactory = new BussinesFactory()
    const PcGamaFactory = new GameFactory()
    const bs = PcBussinesFactory.createComuter()
    const gm = PcGamaFactory.createComuter()
    bs.info('lenovo bussines pc',1000)
    gm.info('lenovo game pc',1200)

    
    
    