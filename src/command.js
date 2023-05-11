var Driver = /** @class */ (function () {
    function Driver(command) {
        this.command = command;
    }
    Driver.prototype.execute = function () {
        this.command.execute();
    };
    return Driver;
}());
var Engeen = /** @class */ (function () {
    function Engeen() {
        this.state = "false";
    }
    Engeen.prototype.on = function () {
        return this.state = "true";
    };
    Engeen.prototype.off = function () {
        return this.state = "false";
    };
    return Engeen;
}());
var OnStartCommand = /** @class */ (function () {
    function OnStartCommand(engeen) {
        this.engeen = engeen;
    }
    OnStartCommand.prototype.execute = function () {
        this.engeen.on();
    };
    return OnStartCommand;
}());
var OnSwitchoffCommand = /** @class */ (function () {
    function OnSwitchoffCommand(engeen) {
        this.engeen = engeen;
    }
    OnSwitchoffCommand.prototype.execute = function () {
        this.engeen.off();
    };
    return OnSwitchoffCommand;
}());
//receiver----------------------------------------
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.start = function () {
        console.log("start");
    };
    Computer.prototype.stop = function () {
        console.log("stop");
    };
    Computer.prototype.reset = function () {
        console.log("reset");
    };
    return Computer;
}());
//Concrete command-----------------------------------
var StartCommand = /** @class */ (function () {
    function StartCommand(computer) {
        this.computer = computer;
    }
    StartCommand.prototype.execute = function () {
        this.computer.start();
    };
    return StartCommand;
}());
var StopCommand = /** @class */ (function () {
    function StopCommand(computer) {
        this.computer = computer;
    }
    StopCommand.prototype.execute = function () {
        this.computer.stop();
    };
    return StopCommand;
}());
var ResetCommand = /** @class */ (function () {
    function ResetCommand(computer) {
        this.computer = computer;
    }
    ResetCommand.prototype.execute = function () {
        this.computer.reset();
    };
    return ResetCommand;
}());
//Invoker----------------------------------------------------
var User = /** @class */ (function () {
    function User(start, stop, reset) {
        this.start = start;
        this.stop = stop;
        this.reset = reset;
    }
    User.prototype.startComputer = function () {
        this.start.execute();
    };
    User.prototype.stopComputer = function () {
        this.stop.execute();
    };
    User.prototype.resetComputer = function () {
        this.reset.execute();
    };
    return User;
}());
var comp = new Computer();
var user = new User(new StartCommand(comp), new StopCommand(comp), new ResetCommand(comp));
user.startComputer();
user.stopComputer();
user.resetComputer();
