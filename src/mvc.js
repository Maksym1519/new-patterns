//controler-----------------------------------------------------------
var Controller = /** @class */ (function () {
    function Controller() {
        this.layer = new DbLayer();
        this.student = this.layer.getStudent();
        this.view = new ConsoleView();
    }
    Controller.prototype.execute = function () {
        this.view.showStudent(this.student);
    };
    return Controller;
}());
var DbLayer = /** @class */ (function () {
    function DbLayer() {
    }
    DbLayer.prototype.getStudent = function () {
        return new Student();
    };
    return DbLayer;
}());
var Student = /** @class */ (function () {
    function Student() {
        this.name = 'Maksym';
        this.course = 'React';
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getCourse = function () {
        return this.course;
    };
    Student.prototype.setCourse = function (course) {
        this.course = course;
    };
    return Student;
}());
var ConsoleView = /** @class */ (function () {
    function ConsoleView() {
    }
    ConsoleView.prototype.showStudent = function (student) {
        console.log("student name: ".concat(student.getName(), "; course: ").concat(student.getCourse()));
    };
    return ConsoleView;
}());
var controler = new Controller();
controler.execute();
