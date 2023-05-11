var MobilePage = /** @class */ (function () {
    function MobilePage() {
    }
    MobilePage.prototype.accept = function (visitor) {
        visitor.visitMobile(this);
    };
    return MobilePage;
}());
var ComputerPage = /** @class */ (function () {
    function ComputerPage() {
    }
    ComputerPage.prototype.accept = function (visitor) {
        visitor.visitComputer(this);
    };
    return ComputerPage;
}());
var NationalClient = /** @class */ (function () {
    function NationalClient() {
    }
    NationalClient.prototype.visitMobile = function (mobile) {
        console.log("\u0421\u0442\u043E\u0440i\u043D\u043A\u0443 Mobile \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0430 \u0443\u043A\u0440\u0430i\u043D\u0441\u044C\u043A\u0443 \u043C\u043E\u0432\u0443");
    };
    NationalClient.prototype.visitComputer = function (computer) {
        console.log("\u0421\u0442\u043E\u0440i\u043D\u043A\u0443 Computer \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0430 \u0443\u043A\u0440\u0430i\u043D\u0441\u044C\u043A\u0443 \u043C\u043E\u0432\u0443");
    };
    return NationalClient;
}());
var ForeignerClient = /** @class */ (function () {
    function ForeignerClient() {
    }
    ForeignerClient.prototype.visitMobile = function (mobile) {
        console.log("Page Mobile in English");
    };
    ForeignerClient.prototype.visitComputer = function (computer) {
        console.log("Page Computer in English");
    };
    return ForeignerClient;
}());
var comp = new ComputerPage();
var mobile = new MobilePage();
var national = new NationalClient();
var foreigner = new ForeignerClient();
console.log(mobile.accept(national));
console.log(comp.accept(national));
