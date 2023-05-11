//variable------------------------------------------------
//js-----------------
let a;
a = 10;
a = 'Maksym';
//ts----------------
let y = 10;
//y = 'Maksym';
//y: string = 'Maksym';
let any = 10;
any = 'Maksym';
//functions------------------------------------------------
function create(num2) {
    let num1 = 10;
    let sum = num1 + num2;
}
create(10);
function create2(num2) {
    let num1 = 10;
    let sum = num1 + num2;
    console.log(sum);
}
create2(10);
function makeWindow(material1, material2) {
    let window = material1 + material2;
    console.log(window);
}
makeWindow('plastic', 10);
function makeWindow2(material1, material2) {
    let window = material1 + material2;
    console.log(window);
}
makeWindow2(20, 10);
function checkNum(a, b) {
    if (!isNaN(a || b)) {
        console.log(a * b);
    }
}
checkNum(10, 20);
function checkNum2(a, b) {
    if (!isNaN(a || b)) {
        console.log(a * b);
    }
}
checkNum2(10, '10');
//cicle-----------------------------
let count = 0; //syntax js
while (count <= 30) {
    console.log(count);
    count = count + 5;
}
let count2 = 0; //syntax ts
while (count2 <= 30) {
    //console.log(count2)
    count2 = count2 + 5;
}
;
let result = 1; //syntax js
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
    console.log(result);
}
let result2 = 1; //syntax ts
let counter2 = 0;
while (counter2 < 1) {
    result2 = result2 * 3;
    counter2 = counter2 + 1;
    //console.log(result2)
}
let result3 = 1; //syntaxjs
for (let counter3 = 0; counter3 < 3; counter3++) {
    result3 = result3 * 2;
    console.log(result3);
}
let result4 = 1; //syntaxjs
for (let counter4 = 0; counter4 < 3; counter4++) {
    result4 = result4 * 2;
    console.log(result4);
}
;
let sign = '#'; //syntax js
for (let i = 0; i <= 7; i++) {
    sign += '#';
    console.log(sign);
}
;
let sign2 = '#'; //syntax ts   
for (let i = 0; i <= 7; i++) {
    sign2 += '#';
    console.log(sign2);
}
;
let square = function (x) {
    return x * x;
};
console.log(square('12'));
let square2 = function (x) {
    return x * x;
};
console.log(square2(12));
//замыкание----------------------------------
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}
var twice = multiplier(2);
console.log(twice(5));
function multiplier2(factor) {
    return function (number) {
        return number * factor;
    };
}
var twice2 = multiplier2(2);
console.log(twice2(5));
function createCourses(title) {
    const nameCourses = title;
    return function (type) {
        return `${nameCourses}${type}`;
    };
}
const infoCourses = createCourses('Avada Media');
console.log(infoCourses(' React'));
//рекурсия------------------------------------------------------
function powerM(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * powerM(base, --exponent);
}
console.log(powerL(2, 4));
function powerL(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * powerL(base, --exponent);
}
console.log(powerL(2, 4));
//massives---------------------------------------------
let arrayNums = [1, 2, 3, 4, 5];
let arrayNums2 = [1, 2, 3, 4, 5];
let arrayNums3 = [1, 2, 3, 4, 5];
arrayNums3.push(6);
arrayNums2.push('a');
console.log(arrayNums2);
let tasks = ['clean', 'wash', 'read'];
function listTask(task) {
    return tasks.push(task);
}
listTask('walk');
console.log(tasks);
function nextTask() {
    return tasks.shift();
}
nextTask();
console.log(tasks);
function urgentTask(task) {
    return tasks.unshift(task);
}
urgentTask('learn');
console.log(tasks);
//Objects----------------------------------------------------------
let house = {
    window: true,
    roof: 'metal',
    walls: 'bricks',
    rooms: 3
};
let year = {
    month: 'march',
    numbers: 12
};
;
let house2 = {
    window: false,
    roof: 'plastic',
    walls: 'concrete',
    rooms: 1
};
console.log(house2);
let dog = {}; //syntax js
dog.speak = function (line) {
    console.log("Dog saying '" + line + "'");
};
dog.speak("I'm a big dog");
function catGreet(cat) {
    console.log(`${cat.speak} my name is ${cat.name} my fur is ${cat.color}`);
}
catGreet({ speak: 'Meow', name: 'Cat', color: 'white' });
function dogGreet(dog) {
    console.log(`${dog.speak} my name is ${dog.name} my fur is ${dog.color}`);
}
dogGreet({ speak: 'Ruff', name: 'Dog', color: 'black' });
//Prototype-------------------------------------------------------------
let scorpion = {
    name: 'black'
};
let spider = {
    name: 'white'
};
console.log(spider.__proto__ === scorpion.__proto__); //true  __proto__  all objects ===
let dell = {
    model: 'Dell',
    color: 'Black',
    os: 'Windows',
    turn: function load() {
        console.log('100%');
    }
};
console.log(dell.turn);
let monkey = {
    head: true,
    legs: 2,
    hands: 2,
    kind: 'monkey',
    speak: function greet() {
        console.log(`Hello I am a ${this.kind}`);
    }
};
let human = Object.create(monkey);
human.kind = 'human';
console.log(human.legs);
//constructor-------------------------------------------------------------
class Ship {
    constructor(options) {
        this.type = options.type,
            this.flag = options.flag;
    }
}
let asianGlory = new Ship({
    type: 'Car-Career',
    flag: 'Panama'
});
console.log(asianGlory);
class Vessel {
    constructor(type, flag, gasEngeen) {
        this.type = 'Car-career',
            this.flag = 'Panama',
            this.gasEngeen = false;
    }
}
;
let goodwood = new Vessel('heavy-lift', 'panama', true);
console.log(goodwood);
//classes---------------------------------------------------------
class Courses {
    constructor(company, type, id, language) {
        this.company = company;
        this.type = type;
        this.id = id;
        this.language = language;
    }
    info() { return `${this.company} provides ${this.type} courses`; }
}
let group1 = new Courses('Avada Media', 'React', 555, 'any');
console.log(group1.info());
class School extends Courses {
    constructor(company, type, id, language, numbers) {
        super(company, type, id, language);
        this.numbers = numbers;
    }
}
let group2 = new School('Avada Media', 'React', 555, 'any', 15);
console.log(group2.numbers);
class Jet {
    constructor(wings, turbine) {
        this.wings = wings,
            this.turbine = turbine;
    }
}
class Country {
    constructor(title) {
        this.title = title;
    }
    getInfo() { return `The name of my country is ${this.title}`; }
}
let ukraine = new Country('Ukraine');
console.log(ukraine.getInfo());
class City extends Country {
    constructor(title, location) {
        super(title);
        this.location = location;
    }
    getLocation() {
        return `The name of my country is ${this.title} and located in ${this.location}`;
    }
}
let odessa = new City('Ukraine', 'south');
console.log(odessa.getLocation());
class MassMedia {
    constructor(type, sport) {
        this.type = type,
            this.sport = sport,
            this.language = 'ukrainian';
    }
}
let information = new MassMedia('tv', 'chanal');
class BaseClassWithConstructor {
    constructor(_id, num) {
        this.id = _id;
        this.num = num;
    }
}
let hrt = new BaseClassWithConstructor(45, 65);
console.log(hrt);
class InheritPrevClass extends BaseClassWithConstructor {
    constructor(num, password) {
        super(num, password);
        this.password = password;
    }
}
let jkr = new InheritPrevClass(12345, 55);
console.log(jkr);
//polymorphism--------------------------------------------
class Calculator {
    sum(num1, num2) {
        return num1 + num2;
    }
    sum(num1, num2) {
        return num1 + num2;
    }
}
let newNum = new Calculator();
console.log(newNum.sum(5, 5));
console.log(newNum.sum('5', '5'));
class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName,
            this._lastName = lastName,
            this._age = age;
    }
    greeting() {
        return (`Привет, я человек и меня зовут ${this._firstName}`);
    }
    get fullName() {
        return `Фамилия -${this._lastName} Имя -${this._firstName}`;
    }
}
;
class Employee extends Person {
    constructor(firstName, lastName, age, inn, numbers, skills) {
        super(firstName, lastName, age);
        this.inn = inn;
        this.numbers = numbers;
        this.skills = skills;
    }
    greeting() {
        return (`Привет, я работник и меня зовут ${this._firstName}`);
    }
}
;
class Developer extends Employee {
    constructor(firstName, lastName, age, inn, numbers, skills, level, language) {
        super(firstName, lastName, age, inn, numbers, skills);
        this.level = level;
        this.language = language;
    }
    greeting() {
        return (`Привет, я разработчик и меня зовут ${this._firstName}`);
    }
}
let pers = new Person('Maksym', 'Korostelov', 100);
let employ = new Employee('Marina', 'Guseva', 100, 298, 15, 'TS');
let develop = new Developer('Damir', 'Korostelov', 100, 298, 15, 'TS', 'Junior', 'Advance');
//console.log(pers.greeting())
//console.log(employ.greeting())
//console.log(develop.greeting())
const personList = [pers, employ, develop];
function allGreet(personList) {
    for (let i = 0; i < personList.length; i++) {
        const person = personList[i];
        console.log(person.greeting());
    }
}
allGreet(personList);
//inheritance--------------------------
class Comedy {
    constructor(movie, length) {
        this.movie = movie;
        this.length = length;
    }
    info() {
        return (`This movie called ${this.movie} and it has ${this.length} length`);
    }
}
class Horor extends Comedy {
    constructor(movie, length) {
        super(movie, length);
    }
    show() {
        return ('This type of movie could be watch by person above 18');
    }
}
let comedyFilm = new Comedy('Eurotrip', 120);
let hororFilm = new Horor('Saw', 120);
console.log(hororFilm.info());
;
class Oblast {
    constructor(name, length, width) {
        this.name = name;
        this.length = length;
        this.width = width;
    }
    countSquare() {
        return this.length * this.width;
    }
}
;
let odObl = new Oblast('odesskaya oblast', 10, 10);
console.log(odObl.name);
class Rajon extends Oblast {
    constructor(name, length, width, library) {
        super(name, length, width);
        this.library = library;
    }
    showName() {
        return this.name;
    }
}
let kiyvskiy = new Rajon('odesskaya oblast', 10, 10, true);
//generic---------------------------------------------------
const getter = (data) => data;
console.log(getter(10).length);
console.log(getter('max').length);
const key = (sign) => sign;
console.log(key(10).length);
console.log(key('max').length);
export {};
//# sourceMappingURL=app.js.map