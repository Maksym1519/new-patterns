interface InternetShop {
    accept(visitor: Client): void
}
interface Client {
    visitMobile(mobile: MobilePage): void
    visitComputer(computer: ComputerPage): void
}

class MobilePage implements InternetShop {
accept(visitor: Client): void {
    visitor.visitMobile(this)
}
}
class ComputerPage implements InternetShop {
accept(visitor: Client): void {
    visitor.visitComputer(this)
}
}
class NationalClient implements Client {
    visitMobile(mobile: MobilePage) {
    console.log(`Сторiнку Mobile переведено на украiнську мову`)
    }
    visitComputer(computer: ComputerPage) {
    console.log(`Сторiнку Computer переведено на украiнську мову`)
    }
 }
class ForeignerClient implements Client {
    visitMobile(mobile: MobilePage) {
    console.log("Page Mobile in English")
    }
    visitComputer(computer: ComputerPage) {
    console.log("Page Computer in English")
    }
 }
 const comp = new ComputerPage()
 const mobile = new MobilePage()
 const national = new NationalClient()
 const foreigner = new ForeignerClient()
 console.log(mobile.accept(national))
 console.log(comp.accept(national))