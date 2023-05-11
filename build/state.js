//context----------------------------
class TrafficLight {
    constructor(state) {
        this.state = state;
        this.change(state);
    }
    change(state) {
        console.log(`TrafficLight is changing in to the state ${state.constructor.name}.`);
        this.state = state;
        this.state.setTraficLight(this);
    }
    request() {
        this.state.handle();
    }
}
class State {
    setTraficLight(trafficlight) {
        this.trafficlight = trafficlight;
    }
}
class GreenLight extends State {
    handle() {
        console.log("Green light will be changed on the yellow light");
        this.trafficlight.change(new YellowLight());
    }
}
class YellowLight extends State {
    handle() {
        console.log("Yellow light will be changed on the red light");
        this.trafficlight.change(new RedLight());
    }
}
class RedLight extends State {
    handle() {
        console.log("Red light will be changed on the green light");
        this.trafficlight.change(new GreenLight());
    }
}
const trafficlight = new TrafficLight(new GreenLight());
trafficlight.request();
trafficlight.request();
export {};
//# sourceMappingURL=state.js.map