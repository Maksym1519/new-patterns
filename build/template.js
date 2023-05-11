class CreatePage {
    templateMethod() {
        this.setHeader();
        this.setMain();
        this.setFooter();
        this.setFontSize();
        this.setFonts();
    }
    setHeader() {
        console.log("Header set up");
    }
    setMain() {
        console.log("Main set up");
    }
    setFooter() {
        console.log("Footer set up");
    }
}
class MainPage extends CreatePage {
    setFonts() {
        console.log("Main page font is Times...");
    }
    setFontSize() {
        console.log("Main page font is 14px");
    }
}
class GalleryPage extends CreatePage {
    setFonts() {
        console.log("Gallery page font is Arial...");
    }
    setFontSize() {
        console.log("Gallery page font is 16px");
    }
}
const site = new MainPage();
console.log(site.templateMethod());
export {};
//# sourceMappingURL=template.js.map