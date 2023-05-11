/*class CarAccess {
    open() {
        console.log('door is opened')
    }
    close() {
        console.log('door is closed')
    }
}

class SecuritySystem {
    door: any
    password: any
    constructor(door: object) {
    this.door = door
    }
    open(password: string) {
    if(this.auntificate(password)) {
     this.door.open()
    } else {
        console.log('Access is denied')
    }
    }
    auntificate(password: string) {
        return password === 'Maksym'
    }
    close(){
       this.door.close()
    }
}
const door = new SecuritySystem(new CarAccess())
console.log(door.open('Marina'))
console.log(door.open('Maksym'))
console.log(door.close())
*/
interface SystemUpdate {
    download(speed: number): void
    warning(): void
}

class Windows10 implements SystemUpdate {
    download(speed: number) {
        console.log("System is being updated")
    }
    warning() {
    console.log("Your system should be updated")
    }
}

class CheckSpeed implements SystemUpdate {
   private system: SystemUpdate
    constructor(system: SystemUpdate) {
        this.system = system
    }
    download(speed: number) {
        if(this.check(speed)) {
            this.system.download(speed)
        } else {
            console.log('Speed not enough')
        }
       }
         check(speed: number) {
            if(speed > 10) {
               return speed 
            }
        }
        warning() {
            this.system.warning()
        }
}

const download = new CheckSpeed(new Windows10())
console.log(download.download(11))
console.log(download.warning())