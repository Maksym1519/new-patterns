var SpaceLab = /** @class */ (function () {
    function SpaceLab() {
        this.news = '';
        this.students = [];
    }
    SpaceLab.prototype.setNews = function (news) {
        this.news = news;
    };
    SpaceLab.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    SpaceLab.prototype.removeStudent = function (student) {
        var index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    };
    SpaceLab.prototype.notifyStudent = function () {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var i = _a[_i];
            i.handlevent(this.news);
        }
    };
    return SpaceLab;
}());
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.handlevent = function (news) {
        return console.log("Spacelab news: ".concat(news));
    };
    return Student;
}());
var spacelab = new SpaceLab();
var maksym = new Student();
var marina = new Student();
spacelab.addStudent(maksym);
spacelab.addStudent(marina);
spacelab.setNews("New courses is available");
console.log(spacelab.notifyStudent());
