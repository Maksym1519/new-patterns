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
    notifyStudent() {
        for (let i of this.students) {
            i.handlevent(this.news);
        }
    }
}
class Student {
    handlevent(news) {
        return console.log(`Spacelab news: ${news}`);
    }
}
const spacelab = new SpaceLab();
const maksym = new Student();
const marina = new Student();
spacelab.addStudent(maksym);
spacelab.addStudent(marina);
spacelab.setNews("New courses is available");
console.log(spacelab.notifyStudent());
export {};
//# sourceMappingURL=observer.js.map