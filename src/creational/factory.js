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
var ModelBusiness = /** @class */ (function () {
    function ModelBusiness() {
    }
    ModelBusiness.prototype.info = function (name, price) {
        console.log("This is ".concat(name, " and its price ").concat(price));
    };
    return ModelBusiness;
}());
var ModelGame = /** @class */ (function () {
    function ModelGame() {
    }
    ModelGame.prototype.info = function (name, price) {
        console.log("This is ".concat(name, " and its price ").concat(price));
    };
    return ModelGame;
}());
var ComputerFactory = /** @class */ (function () {
    function ComputerFactory() {
    }
    ComputerFactory.prototype.createComuter = function () { };
    return ComputerFactory;
}());
var BussinesFactory = /** @class */ (function (_super) {
    __extends(BussinesFactory, _super);
    function BussinesFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BussinesFactory.prototype.createComuter = function () {
        return new ModelBusiness();
    };
    return BussinesFactory;
}(ComputerFactory));
var GameFactory = /** @class */ (function (_super) {
    __extends(GameFactory, _super);
    function GameFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameFactory.prototype.createComuter = function () {
        return new ModelGame();
    };
    return GameFactory;
}(ComputerFactory));
var PcBussinesFactory = new BussinesFactory();
var PcGamaFactory = new GameFactory();
var bs = PcBussinesFactory.createComuter();
var gm = PcGamaFactory.createComuter();
bs.info('lenovo bussines pc', 1000);
gm.info('lenovo game pc', 1200);
