//context----------------------------
class TrafficLight {
   private state: State
   constructor(state: State)  {
    this.state = state
    this.change(state)
   }
   change(state: State): void {
    console.log(`TrafficLight is changing in to the state ${(<any>state).constructor.name}.`)
    this.state = state
    this.state.setTraficLight(this)
   }
   
   request():void {
    this.state.handle()
   }
   }
abstract class State {
protected trafficlight: TrafficLight
setTraficLight(trafficlight: TrafficLight) {
    this.trafficlight = trafficlight
}
abstract handle(): void
}
class GreenLight extends State {
    handle(): void {
        console.log("Green light will be changed on the yellow light")
        this.trafficlight.change(new YellowLight())
    }
   }
class YellowLight extends State {
    handle(): void {
        console.log("Yellow light will be changed on the red light")
        this.trafficlight.change(new RedLight())
   }
}
class RedLight extends State {
    handle(): void {
        console.log("Red light will be changed on the green light")
        this.trafficlight.change(new GreenLight())
    }
   }
const trafficlight = new TrafficLight(new GreenLight())
 trafficlight.request()
 trafficlight.request()
 

