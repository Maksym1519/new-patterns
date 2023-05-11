class Windows10 {
    download(speed) {
        console.log("System is being updated");
    }
    warning() {
        console.log("Your system should be updated");
    }
}
class CheckSpeed {
    constructor(system) {
        this.system = system;
    }
    download(speed) {
        if (this.check(speed)) {
            this.system.download(speed);
        }
        else {
            console.log('Speed not enough');
        }
    }
    check(speed) {
        if (speed > 10) {
            return speed;
        }
    }
    warning() {
        this.system.warning();
    }
}
const download = new CheckSpeed(new Windows10());
console.log(download.download(11));
console.log(download.warning());
export {};
//# sourceMappingURL=proxy.js.map