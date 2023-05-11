var Windows10 = /** @class */ (function () {
    function Windows10() {
    }
    Windows10.prototype.download = function (speed) {
        console.log("System is being updated");
    };
    Windows10.prototype.warning = function () {
        console.log("Your system should be updated");
    };
    return Windows10;
}());
var CheckSpeed = /** @class */ (function () {
    function CheckSpeed(system) {
        this.system = system;
    }
    CheckSpeed.prototype.download = function (speed) {
        if (this.check(speed)) {
            this.system.download(speed);
        }
        else {
            console.log('Speed not enough');
        }
    };
    CheckSpeed.prototype.check = function (speed) {
        if (speed > 10) {
            return speed;
        }
    };
    CheckSpeed.prototype.warning = function () {
        this.system.warning();
    };
    return CheckSpeed;
}());
var download = new CheckSpeed(new Windows10());
console.log(download.download(9));
console.log(download.warning());
