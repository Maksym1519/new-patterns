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
    notifyStudent(): void
    }
    class SpaceLab implements Observed {
        news: string = ''
        students: Array<Student> = []
        setNews(news: string) {
            this.news = news
        }
        addStudent(student: Observer) {
         this.students.push(student)
        }
        removeStudent(student: Observer) {
            const index = this.students.indexOf(student);
            if (index !== -1) {
            this.students.splice(index, 1);
    }
        }
            notifyStudent() {
            for(let i of this.students) {
         i.handlevent(this.news)
            }
        }
    }
    interface Observer {
     handlevent(news: string): void
    }

    class Student implements Observer {
            handlevent(news: string) {
            return  console.log(`Spacelab news: ${news}`)
        }
    }

    const spacelab = new SpaceLab()
    const maksym = new Student()
    const marina = new Student()
    spacelab.addStudent(maksym)
    spacelab.addStudent(marina)
    spacelab.setNews("New courses is available")
    console.log(spacelab.notifyStudent())
   
   
  