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
var StudentModel = /** @class */ (function () {
    function StudentModel(name, course) {
        this.name = name;
        this.course = course;
    }
    return StudentModel;
}());
//view------------------------------------------------------
var StudentView = /** @class */ (function () {
    function StudentView() {
    }
    StudentView.prototype.render = function (student) {
        console.log("Name: ".concat(student.name, "; Course: ").concat(student.course));
    };
    return StudentView;
}());
//controler--------------------------------------------------
var StudentControler = /** @class */ (function () {
    function StudentControler(model, view) {
        this.model = model;
        this.view = view;
    }
    StudentControler.prototype.setName = function (name) {
        this.model.name = name;
    };
    StudentControler.prototype.setCourse = function (course) {
        this.model.course = course;
    };
    StudentControler.prototype.updateView = function () {
        this.view.render(this.model);
    };
    return StudentControler;
}());
var user = new StudentModel("Maksym", "React");
var view = new StudentView();
var controller = new StudentControler(user, view);
controller.setName("Marina");
controller.setCourse("React");
controller.updateView();
