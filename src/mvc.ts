/*
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
 */

//model-----------------------------------------------
class StudentModel {
    name: string
    course: string
    constructor(name: string, course: string) {
    this.name = name
    this.course = course
    }
}
//view------------------------------------------------------
class StudentView {
    constructor() {}
    render(student: StudentModel) {
        console.log(`Name: ${student.name}; Course: ${student.course}`)
    }
}
//controler--------------------------------------------------
class StudentControler {
    model: StudentModel
    view: StudentView
    constructor(model: StudentModel, view: StudentView) {
    this.model = model
    this.view = view
    }
    setName(name: string) {
        this.model.name = name
    }
    setCourse(course: string) {
        this.model.course = course
    }
    updateView() {
        this.view.render(this.model)
    }
}
const user = new StudentModel("Maksym","React")
const view = new StudentView()
const controller = new StudentControler(user,view)
controller.setName("Marina") 
controller.setCourse("React")
controller.updateView()