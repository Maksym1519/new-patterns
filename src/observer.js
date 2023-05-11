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
        this.students.filter(function (el) { return !(el instanceof student); });
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
        console.log("Spacelab news: ".concat(news));
    };
    return Student;
}());
var spacelab = new SpaceLab();
spacelab.addStudent(new Student());
spacelab.setNews("New courses is available");
console.log(spacelab.notifyStudent());
