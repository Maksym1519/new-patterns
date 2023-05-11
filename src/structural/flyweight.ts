//import { Console } from "console"


class Gallery {
    private name: string
    private format: string
    constructor(name: string, format: string) {
    this.name = name
    this.format = format
    }
} 

class CreateGallery {
    private images: Array<any>
    constructor() {
    this.images = []
    }
    create(name: string, format: string) {
     let candidate = this.getImg(name)
     //console.log(candidate)
     if(candidate) {
        return candidate
     }
     const newImg = new Gallery(name,format)
     this.images.push(newImg)
     return newImg
    }
    getImg(name: string) {
        return this.images.find(img => img.name === name)
    }
}
const gallery = new CreateGallery()
const headerBG = gallery.create('header','webp')
const mainBG = gallery.create('main','webp')
const footerBG = gallery.create('footer','webp')
const mainMobileBG = gallery.create('main','png')
const mainTabletBG = gallery.create('main','svg')
console.log(headerBG)
console.log(mainBG)
console.log(footerBG)
console.log(mainMobileBG)
console.log(mainTabletBG)