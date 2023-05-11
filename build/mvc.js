//controler-----------------------------------------------------------
class Controller {
    constructor() {
        this.layer = new DbLayer();
        this.student = this.layer.getStudent();
        this.view = new ConsoleView();
    }
    execute() {
        this.view.showStudent(this.student);
    }
}
class DbLayer {
    getStudent() {
        return new Student();
    }
}
class Student {
    constructor() {
        this.name = 'Maksym';
        this.course = 'React';
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCourse() {
        return this.course;
    }
    setCourse(course) {
        this.course = course;
    }
}
class ConsoleView {
    showStudent(student) {
        console.log(`student name: ${student.getName()}; course: ${student.getCourse()}`);
    }
}
const controler = new Controller();
controler.execute();
export {};
//# sourceMappingURL=mvc.js.map