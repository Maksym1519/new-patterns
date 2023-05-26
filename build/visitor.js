class MobilePage {
    accept(visitor) {
        visitor.visitMobile(this);
    }
}
class ComputerPage {
    accept(visitor) {
        visitor.visitComputer(this);
    }
}
class NationalClient {
    visitMobile(mobile) {
        console.log(`Сторiнку Mobile переведено на украiнську мову`);
    }
    visitComputer(computer) {
        console.log(`Сторiнку Computer переведено на украiнську мову`);
    }
}
class ForeignerClient {
    visitMobile(mobile) {
        console.log("Page Mobile in English");
    }
    visitComputer(computer) {
        console.log("Page Computer in English");
    }
}
const comp = new ComputerPage();
const mobile = new MobilePage();
const national = new NationalClient();
const foreigner = new ForeignerClient();
console.log(mobile.accept(national));
console.log(comp.accept(national));
console.log(mobile.accept(foreigner));
console.log(comp.accept(foreigner));
export {};
//# sourceMappingURL=visitor.js.map