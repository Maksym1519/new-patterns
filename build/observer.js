class SpaceLab {
    constructor() {
        this.news = '';
        this.students = [];
    }
    setNews(news) {
        this.news = news;
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        this.students.filter(el => !(el instanceof student));
    }
    notifyStudent() {
        for (let i of this.students) {
            i.handlevent(this.news);
        }
    }
}
class Student {
    handlevent(news) {
        console.log(`Spacelab news: ${news}`);
    }
}
const spacelab = new SpaceLab();
spacelab.addStudent(new Student());
spacelab.setNews("New courses is available");
console.log(spacelab.notifyStudent());
export {};
//# sourceMappingURL=observer.js.map