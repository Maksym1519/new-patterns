//receiver----------------------------------------
class Computer {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    reset() {
        console.log("reset");
    }
}
//Concrete command-----------------------------------
class StartCommand {
    constructor(computer) {
        this.computer = computer;
    }
    execute() {
        this.computer.start();
    }
}
class StopCommand {
    constructor(computer) {
        this.computer = computer;
    }
    execute() {
        this.computer.stop();
    }
}
class ResetCommand {
    constructor(computer) {
        this.computer = computer;
    }
    execute() {
        this.computer.reset();
    }
}
//Invoker----------------------------------------------------
class User {
    constructor(start, stop, reset) {
        this.start = start;
        this.stop = stop;
        this.reset = reset;
    }
    startComputer() {
        this.start.execute();
    }
    stopComputer() {
        this.stop.execute();
    }
    resetComputer() {
        this.reset.execute();
    }
}
const comp = new Computer();
const user = new User(new StartCommand(comp), new StopCommand(comp), new ResetCommand(comp));
user.startComputer();
user.stopComputer();
user.resetComputer();
export {};
//# sourceMappingURL=command.js.map