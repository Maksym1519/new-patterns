/*class Driver {
    command: any
    constructor(command: any) {
     this.command = command
    }
    execute() {
        this.command.execute()
    }
}
class Engeen {
    state: string
    constructor() {
        this.state = "false"
    }
    on() {
        return this.state = "true"
    }
    off() {
        return this.state = "false"
    }
}
class OnStartCommand {
    engeen: Engeen
    constructor(engeen: Engeen) {
    this.engeen = engeen
    }
    execute() {
        this.engeen.on()
    }
}
class SwitchoffCommand {
    engeen: Engeen
    constructor(engeen: Engeen) {
    this.engeen = engeen
    }
    execute() {
        this.engeen.off()
    }
}*/
//-----------------------------------------------------------
interface Command {
    execute(): void
}
//receiver----------------------------------------
class Computer {
    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }
    reset() {
        console.log("reset")
    }
}
//Concrete command-----------------------------------
class StartCommand implements Command {
    computer: Computer
    constructor(computer: Computer) {
    this.computer = computer
    }
    execute() {
        this.computer.start()
    }
}
class StopCommand implements Command {
    computer: Computer
    constructor(computer: Computer) {
    this.computer = computer
    }
    execute() {
        this.computer.stop()
    }
}
class ResetCommand implements Command {
    computer: Computer
    constructor(computer: Computer) {
    this.computer = computer
    }
    execute() {
        this.computer.reset()
    }
}
//Invoker----------------------------------------------------
class User {
    start: Command
    stop: Command
    reset: Command
    constructor(start: Command,stop: Command,reset: Command) {
    this.start = start
    this.stop = stop
    this.reset = reset
    }
    startComputer() {
        this.start.execute()
    }
    stopComputer() {
        this.stop.execute()
    }
    resetComputer() {
        this.reset.execute()
    }
}

const comp = new Computer()
const user = new User(new StartCommand(comp),new StopCommand(comp),new ResetCommand(comp))
user.startComputer()
user.stopComputer()
user.resetComputer()