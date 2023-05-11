 /*class Model {
    color: any;
    constructor(color: any) {
        this.color = color
    }
 }
 class Color {
    type: any;
    constructor(type: any) {
        this.type = type
    }
    get(type: any) {
     return this.type
    }
 }

 class BlackColor extends Color {
    constructor() {
        super("dark-black")
    }
 }
 class SilbrigColor extends Color {
    constructor() {
        super("Silbermetallic")
    }
 }
 class Audi extends Model {
    constructor(color: any) {
        super(color)
    }
    paint() {
     return `Auto: Audi, color ${this.color.get()}`
    }
 }
 class Bmw extends Model {
    constructor(color: any) {
        super(color)
    }
    paint() {
      return  `Auto: BMW, color ${this.color.get()}`
    }
 }

 const blackBmw = new Bmw(new BlackColor())
 console.log(blackBmw.paint()*/
 //----------------------------------------------------------------------------
abstract class Page {
    color: Color
    constructor(color: Color) {
        this.color = color
    }
    paint() {}
}
class Color {
    type: string
    constructor(type: string) {
        this.type = type
    }
    get() {
      return this.type
    }
}
class WhiteColor extends Color {
    constructor() {
        super("white")
    }
}
class GreyColor extends Color {
    constructor() {
        super("grey")
    }
}

class MainPage extends Page {
    constructor(color: Color) {
        super(color)
    }
    paint() {
        return `Page: Main page, background color ${this.color.get()}`
    }
}
class GalleryPage extends Page {
    constructor(color: Color) {
        super(color)
    }
    paint() {
        return `Page: Gallery page, background color ${this.color.get()}`
    }
}
const mainPage = new MainPage(new WhiteColor())
const galleryPage = new GalleryPage(new GreyColor())
console.log(mainPage.paint())
console.log(galleryPage.paint())

