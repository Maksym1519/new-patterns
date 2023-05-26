//import { Interface } from "readline"
var AvadaMediaInterface = /** @class */ (function () {
    function AvadaMediaInterface(width) {
        this.sidebar = false;
        this.width = width;
    }
    AvadaMediaInterface.prototype.importHeader = function () {
        console.log("Header imported from ...");
    };
    AvadaMediaInterface.prototype.importMain = function () {
        console.log("Main imported from ...");
    };
    AvadaMediaInterface.prototype.importFooter = function () {
        console.log("Footer imported from ...");
    };
    AvadaMediaInterface.prototype.importImg = function () {
        console.log("Images imported from ...");
    };
    AvadaMediaInterface.prototype.check = function () {
        if (this.width > 375) {
            this.sidebar = true;
            console.log("".concat(this.sidebar));
        }
        else if (this.width < 375) {
            this.sidebar = false;
            console.log("".concat(this.sidebar));
        }
    };
    AvadaMediaInterface.prototype.makeOrder = function () {
        console.log("AvadaMedia: Your order add to ...");
    };
    return AvadaMediaInterface;
}());
var RozetkaInterface = /** @class */ (function () {
    function RozetkaInterface(width) {
        this.sidebar = false;
        this.width = width;
    }
    RozetkaInterface.prototype.importHeader = function () {
        console.log("Header imported from ...");
    };
    RozetkaInterface.prototype.importMain = function () {
        console.log("Main imported from ...");
    };
    RozetkaInterface.prototype.importFooter = function () {
        console.log("Footer imported from ...");
    };
    RozetkaInterface.prototype.importImg = function () {
        console.log("Images imported from ...");
    };
    RozetkaInterface.prototype.makeOrder = function () {
        console.log("Rozetka: Your order add to ...");
    };
    return RozetkaInterface;
}());
var SiteInterfaceFacade = /** @class */ (function () {
    function SiteInterfaceFacade(avada, rozetka) {
        this.avada = avada;
        this.rozetka = rozetka;
    }
    SiteInterfaceFacade.prototype.orderManager = function () {
        this.avada.makeOrder();
        this.rozetka.makeOrder();
    };
    SiteInterfaceFacade.prototype.setDesctop = function () {
        this.avada.importMain();
        this.avada.check();
        this.rozetka.importMain();
    };
    return SiteInterfaceFacade;
}());
var avada = new AvadaMediaInterface(320);
var rozetka = new RozetkaInterface(1440);
var siteFacade = new SiteInterfaceFacade(avada, rozetka);
console.log(siteFacade.orderManager());
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
