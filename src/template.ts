abstract class CreatePage {
    templateMethod(): void {
     this.setHeader()
     this.setMain()
     this.setFooter()
     this.setFontSize()
     this.setFonts()
     }
    protected setHeader() {
        console.log("Header set up")
    }
    protected setMain() {
        console.log("Main set up")
    }
    protected setFooter() {
        console.log("Footer set up")
    }
    protected abstract setFonts():void 
    protected abstract setFontSize():void 
}

class MainPage extends CreatePage {
    protected setFonts(): void {
        console.log("Main page font is Times...")
    }
    protected setFontSize(): void {
        console.log("Main page font is 14px")
    }
}
class GalleryPage extends CreatePage {
    protected setFonts(): void {
        console.log("Gallery page font is Arial...")
    }
    protected setFontSize(): void {
        console.log("Gallery page font is 16px")
    }
}
const site = new MainPage()
console.log(site.templateMethod())

   