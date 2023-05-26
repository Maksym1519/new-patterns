//import { Interface } from "readline"
class AvadaMediaManager {
    constructor(width) {
        this.sidebar = false;
        this.width = width;
    }
    importHeader() {
        console.log("Header imported from ...");
    }
    importMain() {
        console.log("Main imported from ...");
    }
    importFooter() {
        console.log("Footer imported from ...");
    }
    importImg() {
        console.log("Images imported from ...");
    }
    check() {
        if (this.width > 375) {
            this.sidebar = true;
            console.log(`${this.sidebar}`);
        }
        else if (this.width < 375) {
            this.sidebar = false;
            console.log(`${this.sidebar}`);
        }
    }
    makeOrder() {
        console.log("AvadaMedia: Your order add to ...");
    }
}
class RozetkaManager {
    constructor(width) {
        this.sidebar = false;
        this.width = width;
    }
    importHeader() {
        console.log("Header imported from ...");
    }
    importMain() {
        console.log("Main imported from ...");
    }
    importFooter() {
        console.log("Footer imported from ...");
    }
    importImg() {
        console.log("Images imported from ...");
    }
    makeOrder() {
        console.log("Rozetka: Your order add to ...");
    }
}
class SiteInterfaceFacade {
    constructor(avada, rozetka) {
        this.avada = avada;
        this.rozetka = rozetka;
    }
    orderManager() {
        this.avada.makeOrder();
        this.rozetka.makeOrder();
    }
    setDesctop() {
        this.avada.importMain();
        this.avada.check();
        this.rozetka.importMain();
    }
}
const avada = new AvadaMediaManager(320);
const rozetka = new RozetkaManager(1440);
const siteFacade = new SiteInterfaceFacade(avada, rozetka);
console.log(siteFacade.orderManager());
export {};
//console.log(siteFacade.setDesctop())
/*class Complaints {
     complaints: Array<any>
    constructor() {
        this.complaints = []
    }
    reply(complaint: any) {
    }
    add(complaint: any) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}
class ProductComplaints extends Complaints {
    id: number = 0
    customer: string = ''
    details: string =''
    reply({id: number,customer,details}) {
    return `Product: ${this.id}, ${this.customer}, ${this.details}`
    }
}
class SeviceComplaints extends Complaints {
    id: number
    customer: string
    details: string
    reply({id,customer,details}) {
    return `Sevice: ${this.id}, ${this.customer}, ${this.details}`
    }
}

class ComplaintRegistry extends Complaints {
     register(customer: string,type: string,details: string) {
    const id = Date.now()
    let complaint: any
    if(type === 'service') {
        complaint = new SeviceComplaints()
    } else {
        complaint = new ProductComplaints()
    }
    return complaint.add({id,customer,details})
    }
}
const registry = new ComplaintRegistry()
console.log(registry.register('Maksym','service','late'))
*/ 
//# sourceMappingURL=facade.js.map