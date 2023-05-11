var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Page = /** @class */ (function () {
    function Page(color) {
        this.color = color;
    }
    Page.prototype.paint = function () { };
    return Page;
}());
var Color = /** @class */ (function () {
    function Color(type) {
        this.type = type;
    }
    Color.prototype.get = function () {
        return this.type;
    };
    return Color;
}());
var WhiteColor = /** @class */ (function (_super) {
    __extends(WhiteColor, _super);
    function WhiteColor() {
        return _super.call(this, "white") || this;
    }
    return WhiteColor;
}(Color));
var GreyColor = /** @class */ (function (_super) {
    __extends(GreyColor, _super);
    function GreyColor() {
        return _super.call(this, "grey") || this;
    }
    return GreyColor;
}(Color));
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage(color) {
        return _super.call(this, color) || this;
    }
    MainPage.prototype.paint = function () {
        return "Page: Main page, background color ".concat(this.color.get());
    };
    return MainPage;
}(Page));
var GalleryPage = /** @class */ (function (_super) {
    __extends(GalleryPage, _super);
    function GalleryPage(color) {
        return _super.call(this, color) || this;
    }
    GalleryPage.prototype.paint = function () {
        return "Page: Gallery page, background color ".concat(this.color.get());
    };
    return GalleryPage;
}(Page));
var mainPage = new MainPage(new WhiteColor());
var galleryPage = new GalleryPage(new GreyColor());
console.log(mainPage.paint());
console.log(galleryPage.paint());
