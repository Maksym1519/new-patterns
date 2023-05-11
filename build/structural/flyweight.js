//import { Console } from "console"
class Gallery {
    constructor(name, format) {
        this.name = name;
        this.format = format;
    }
}
class CreateGallery {
    constructor() {
        this.images = [];
    }
    create(name, format) {
        let candidate = this.getImg(name);
        //console.log(candidate)
        if (candidate) {
            return candidate;
        }
        const newImg = new Gallery(name, format);
        this.images.push(newImg);
        return newImg;
    }
    getImg(name) {
        return this.images.find(img => img.name === name);
    }
}
const gallery = new CreateGallery();
const headerBG = gallery.create('header', 'webp');
const mainBG = gallery.create('main', 'webp');
const footerBG = gallery.create('footer', 'webp');
const mainMobileBG = gallery.create('main', 'png');
const mainTabletBG = gallery.create('main', 'svg');
console.log(headerBG);
console.log(mainBG);
console.log(footerBG);
console.log(mainMobileBG);
console.log(mainTabletBG);
export {};
//# sourceMappingURL=flyweight.js.map