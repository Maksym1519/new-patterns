//import { Console } from "console"
var Gallery = /** @class */ (function () {
    function Gallery(name, format) {
        this.name = name;
        this.format = format;
    }
    return Gallery;
}());
var CreateGallery = /** @class */ (function () {
    function CreateGallery() {
        this.images = [];
    }
    CreateGallery.prototype.create = function (name, format) {
        var candidate = this.getImg(name);
        //console.log(candidate)
        if (candidate) {
            return candidate;
        }
        var newImg = new Gallery(name, format);
        this.images.push(newImg);
        return newImg;
    };
    CreateGallery.prototype.getImg = function (name) {
        return this.images.find(function (img) { return img.name === name; });
    };
    return CreateGallery;
}());
var gallery = new CreateGallery();
var headerBG = gallery.create('header', 'webp');
var mainBG = gallery.create('main', 'webp');
var footerBG = gallery.create('footer', 'webp');
var mainMobileBG = gallery.create('main', 'png');
var mainTabletBG = gallery.create('main', 'svg');
console.log(headerBG);
console.log(mainBG);
console.log(footerBG);
console.log(mainMobileBG);
console.log(mainTabletBG);
