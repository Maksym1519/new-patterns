/*class AutoNews {
    
    news: string
    actions: Array<string>
    
    constructor() {
        this.news = ''
        this.actions = []
         
    }
    setNews(text: string) {
     this.news = text
     this.notifyAll()
    }
    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this))
    }
    register(observer: any) {
        this.actions.push(observer)
    }
    unregister(observer: any) {
      this.actions = this.actions.filter(el => !(el instanceof observer))
    }
}
class Jack {
    inform(message: string) {
        console.log(`Jack has been informed about: ${message.news}`)
    }
}
class Maksym {
    inform(message: string) {
        console.log(`Maksym has been informed about: ${message.news}`)
    }
}
const autonews = new AutoNews()
autonews.register(new Jack())
autonews.register(new Maksym())
 
 autonews.setNews('New release Tesla')
 */
    interface Observed {
    addStudent(student: Observer): void
    removeStudent(student: Observer): void
    notifyStudent(): void
    }
    class SpaceLab implements Observed {
        news: string = ''
        students: Array<any> = []
        setNews(news: string) {
            this.news = news
        }
        addStudent(student: Observer) {
         this.students.push(student)
        }
        removeStudent(student: any) {
            this.students.filter(el => !(el instanceof student))
        }
        notifyStudent() {
            for(let i of this.students) {
             i.handlevent(this.news)
            }
        }
    }
    interface Observer {
     handlevent(news: string): any
    }

    class Student implements Observer {
            handlevent(news: string) {
            console.log(`Spacelab news: ${news}`)
        }
    }

    const spacelab = new SpaceLab()
    spacelab.addStudent(new Student())
    spacelab.setNews("New courses is available")
    console.log(spacelab.notifyStudent())
  