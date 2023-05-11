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
var CreatePage = /** @class */ (function () {
    function CreatePage() {
    }
    CreatePage.prototype.templateMethod = function () {
        this.setHeader();
        this.setMain();
        this.setFooter();
        this.setFontSize();
        this.setFonts();
    };
    CreatePage.prototype.setHeader = function () {
        console.log("Header set up");
    };
    CreatePage.prototype.setMain = function () {
        console.log("Main set up");
    };
    CreatePage.prototype.setFooter = function () {
        console.log("Footer set up");
    };
    return CreatePage;
}());
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainPage.prototype.setFonts = function () {
        console.log("Main page font is Times...");
    };
    MainPage.prototype.setFontSize = function () {
        console.log("Main page font is 14px");
    };
    return MainPage;
}(CreatePage));
var GalleryPage = /** @class */ (function (_super) {
    __extends(GalleryPage, _super);
    function GalleryPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GalleryPage.prototype.setFonts = function () {
        console.log("Gallery page font is Arial...");
    };
    GalleryPage.prototype.setFontSize = function () {
        console.log("Gallery page font is 16px");
    };
    return GalleryPage;
}(CreatePage));
var site = new MainPage();
console.log(site.templateMethod());
