/*interface Person {
    personalNumber: number
    name: string
    surname: string
    age: number
}

class ImplPerson implements Person {
    constructor(personalNumber: number, name: string, surname: string, age: number) {}
    
}
let people: Person[] = [
    new ImplPerson(1,"Anton","Antonov",30)
]
*/
var PersonImpl = /** @class */ (function () {
    function PersonImpl(personalNumber, name, surname, age) {
        this.personalNumber = personalNumber;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    return PersonImpl;
}());
var people = [
    new PersonImpl(2, "Klaus", "Meine", 75),
    new PersonImpl(3, "Mathias", "Jabs", 58),
    new PersonImpl(7, "Ralph", "Rickerman", 52),
    new PersonImpl(1, "Rudolph", "Schenker", 75),
    new PersonImpl(4, "Mickey", "Dee", 57),
    new PersonImpl(8, "German", "Rarebel", 74),
    new PersonImpl(9, "Francis", "Buhgolz", 68),
    new PersonImpl(5, "Pawel", "Machiwoda", 55),
    new PersonImpl(6, "James", "Kottack", 54),
    new PersonImpl(10, "Uli", "Roth", 68),
];
people.sort(function (person1, person2) { return person1.personalNumber - person2.personalNumber; });
console.log(people);
var PersonC = /** @class */ (function () {
    function PersonC(persName, name, surname, age) {
        this.persName = persName;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    PersonC.prototype.compareTo = function (otherPerson) {
        return this.persName - otherPerson.persName;
    };
    return PersonC;
}());
var newPeople = [
    new PersonC(2, "Klaus", "Meine", 75),
    new PersonC(3, "Mathias", "Jabs", 58),
    new PersonC(7, "Ralph", "Rickerman", 52),
    new PersonC(1, "Rudolph", "Schenker", 75),
    new PersonC(4, "Mickey", "Dee", 57),
    new PersonC(8, "German", "Rarebel", 74),
    new PersonC(9, "Francis", "Buhgolz", 68),
    new PersonC(5, "Pawel", "Machiwoda", 55),
    new PersonC(6, "James", "Kottack", 54),
    new PersonC(10, "Uli", "Roth", 68),
];
newPeople.sort(function (person1, person2) { return person1.compareTo(person2); });
console.log(newPeople);
