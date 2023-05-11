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
//context----------------------------
var TrafficLight = /** @class */ (function () {
    function TrafficLight(state) {
        this.state = state;
        this.change(state);
    }
    TrafficLight.prototype.change = function (state) {
        console.log("TrafficLight is changing in to the state ".concat((state).constructor.name, "."));
        this.state = state;
        this.state.setTraficLight(this);
    };
    TrafficLight.prototype.request = function () {
        this.state.handle();
    };
    return TrafficLight;
}());
var State = /** @class */ (function () {
    function State() {
        this.trafficlight = trafficlight;
    }
    State.prototype.setTraficLight = function (trafficlight) {
        this.trafficlight = trafficlight;
    };
    return State;
}());
var GreenLight = /** @class */ (function (_super) {
    __extends(GreenLight, _super);
    function GreenLight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreenLight.prototype.handle = function () {
        console.log("Green light will be changed on the yellow light");
        this.trafficlight.change(new YellowLight());
    };
    return GreenLight;
}(State));
var YellowLight = /** @class */ (function (_super) {
    __extends(YellowLight, _super);
    function YellowLight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YellowLight.prototype.handle = function () {
        console.log("Yellow light will be changed on the red light");
        this.trafficlight.change(new RedLight());
    };
    return YellowLight;
}(State));
var RedLight = /** @class */ (function (_super) {
    __extends(RedLight, _super);
    function RedLight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedLight.prototype.handle = function () {
        console.log("Red light will be changed on the green light");
        this.trafficlight.change(new GreenLight());
    };
    return RedLight;
}(State));
var trafficlight = new TrafficLight(new GreenLight());
trafficlight.request();
trafficlight.request();
