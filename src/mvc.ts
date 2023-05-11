//controler-----------------------------------------------------------
class Controller {
    layer: ModelLayer = new DbLayer()
    student: Student = this.layer.getStudent()
    view: View = new ConsoleView()
    execute() {
     this.view.showStudent(this.student)
    }
}
//model------------------------------------------------------------
interface ModelLayer {
    getStudent(): Student
}
class DbLayer implements ModelLayer {
    getStudent(): Student {
        return new Student()
    }
}
class Student {
    name: string = 'Maksym'
    course: string = 'React'
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name
    }
    getCourse(): string {
        return this.course
    }
    setCourse(course: string): void {
        this.course = course
    }
}
//view-------------------------------------------------
interface View {
    showStudent(student: Student): void
}
class ConsoleView implements View {
    showStudent(student: Student): void {
        console.log(`student name: ${student.getName()}; course: ${student.getCourse()}`)
    }
}

const controler = new Controller()
controler.execute()
 