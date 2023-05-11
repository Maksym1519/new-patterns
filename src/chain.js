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
var Handler = /** @class */ (function () {
    function Handler() {
        this.name = '';
        this.volume = 0;
    }
    Handler.prototype.load = function (weight) {
        if (this.canLoad(weight)) {
            console.log("loaded ".concat(weight, " using ").concat(this.name));
        }
        else if (this.incomer) {
            console.log("Can't load using ".concat(this.name));
            this.incomer.load(weight);
        }
        else {
            console.log("Unfortunatly not enough volume");
        }
    };
    Handler.prototype.canLoad = function (weight) {
        return this.volume >= weight;
    };
    Handler.prototype.setNext = function (name) {
        this.incomer = name;
    };
    return Handler;
}());
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung(volume) {
        var _this = _super.call(this) || this;
        _this.volume = volume;
        _this.name = "Samsung: 3kg";
        return _this;
    }
    return Samsung;
}(Handler));
var LG = /** @class */ (function (_super) {
    __extends(LG, _super);
    function LG(volume) {
        var _this = _super.call(this) || this;
        _this.volume = volume;
        _this.name = "LG: 5kg";
        return _this;
    }
    return LG;
}(Handler));
var Bosh = /** @class */ (function (_super) {
    __extends(Bosh, _super);
    function Bosh(volume) {
        var _this = _super.call(this) || this;
        _this.volume = volume;
        _this.name = "Bosh: 7kg";
        return _this;
    }
    return Bosh;
}(Handler));
var samsung = new Samsung(3);
var lg = new LG(5);
var bosh = new Bosh(7);
samsung.setNext(lg);
lg.setNext(bosh);
console.log(samsung.load(5.2));
//--------------------------------------------------------------------------
