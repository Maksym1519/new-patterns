export {

};


 //variable------------------------------------------------
//js-----------------
 let a;
 a = 10;
 a = 'Maksym';
 //ts----------------
 let y: number = 10;
 //y = 'Maksym';
 //y: string = 'Maksym';
 let any: any = 10;
 any = 'Maksym';
 //functions------------------------------------------------
function create(num2) { //syntax js
let num1 = 10;
let sum = num1 + num2;
 }
 create(10);

function create2(num2: number) {   //syntax ts
let num1 = 10;
let sum = num1 + num2;
console.log(sum)
 }
 create2(10);

 function makeWindow (material1: string, material2: any) {  //syntax ts
    let window = material1 + material2;
    console.log(window)
 }
 makeWindow('plastic', 10);
 
 function makeWindow2 (material1: string, material2: any) {  //syntax ts
    let window = material1 + material2;
    console.log(window)
 }
 makeWindow2(20, 10);

  function checkNum(a: number, b: number) {  //syntax ts
    if(!isNaN(a||b)) {
        console.log(a * b)
    }
  }
  checkNum(10, 20)

  function checkNum2(a,b) { //syntax js
    if(!isNaN(a||b)) {
        console.log(a * b)
    }
  }
  checkNum2(10,'10');

  //cicle-----------------------------
  let count = 0;                 //syntax js
  while(count <= 30) {
    console.log(count)
    count = count + 5;
  }
 
  let count2: number = 0;                 //syntax ts
  while(count2 <= 30) {
    //console.log(count2)
    count2 = count2 + 5;
  };

  let result = 1;            //syntax js
  let counter = 0;
  while(counter < 10) {
    result = result * 2;
    counter = counter + 1;
    console.log(result)
  }


  let result2: number = 1;            //syntax ts
  let counter2: number = 0;
  while(counter2 < 1) {
    result2 = result2 * 3;
    counter2 = counter2 + 1;
    //console.log(result2)
  }


  let result3 = 1;                                            //syntaxjs
  for(let counter3 = 0; counter3 < 3; counter3++) {
     result3 = result3 * 2;
     console.log(result3)
  }
 
  let result4: number = 1;                                            //syntaxjs
  for(let counter4 = 0; counter4 < 3; counter4++) {
     result4 = result4 * 2;
     console.log(result4)
  };

  let sign = '#';                       //syntax js
    for(let i = 0; i <= 7; i++) {
    sign+='#';
    console.log(sign)
  };

  let sign2:string = '#';                   //syntax ts   
  for(let i = 0; i <= 7; i++) {
    sign2+='#';
    console.log(sign2)
  };

  let square = function(x) {       //syntax js
    return x*x;
    }
    console.log(square('12'))

  let square2 = function(x: number) {   //syntax ts
    return x*x;
    }
    console.log(square2(12))
//замыкание----------------------------------
    function multiplier(factor) {              //syntax js
        return function(number) {
        return number * factor;
        };
        }
        var twice = multiplier(2);
        console.log(twice(5));   

    function multiplier2(factor: number) {           //syntax ts
        return function(number: number) {
        return number * factor;
        };
        }
        
        var twice2 = multiplier2(2);
        console.log(twice2(5));   

    function createCourses(title: any): any {
      const nameCourses = title;
      return function(type: string): string {
             return `${nameCourses}${type}`
        }
    }
    const infoCourses = createCourses('Avada Media');
    console.log(infoCourses(' React'))

        //рекурсия------------------------------------------------------

         function powerM (base, exponent) {    //syntax js
            if(exponent == 0)  
                return 1;
            else 
            return base * powerM(base, --exponent)
            
         }
         console.log(powerL(2,4))

         function powerL(base: number, exponent: number ): number {   //syntax ts
            if(exponent == 0)  
                return 1;
            else 
            return base * powerL(base, --exponent)
            
         }
         console.log(powerL(2,4))

//massives---------------------------------------------
let arrayNums = [1,2,3,4,5];
let arrayNums2: number[] = [1,2,3,4,5];
let arrayNums3: Array<number> = [1,2,3,4,5];
arrayNums3.push(6);
arrayNums2.push('a')
console.log(arrayNums2)
   
let tasks: string[] = ['clean','wash','read'];

function listTask(task: string) {
  return tasks.push(task)
}
 listTask('walk')
 console.log(tasks);

 function nextTask() {
return tasks.shift()
 }
 nextTask()
 console.log(tasks)

 function urgentTask(task: string) {
  return tasks.unshift(task)
 }
urgentTask('learn')
console.log(tasks);

//Objects----------------------------------------------------------
let house = {         //syntax js
  window: true,
  roof: 'metal',
  walls: 'bricks',
  rooms: 3
};

 let year: {month: string, numbers: number} = { //syntax ts
  month: 'march',
  numbers: 12
 }

 interface House {   //syntax ts
  window: boolean,
  roof: string,
  walls: string,
  rooms: number
 };
 
 let house2: House = {    //syntax ts
  window: false,
  roof: 'plastic',
  walls: 'concrete',
  rooms: 1
 }
 console.log(house2);

 let dog = {};                          //syntax js
 dog.speak = function(line) {
 console.log("Dog saying '" + line + "'");
 };
 
 dog.speak("I'm a big dog");

 interface Animal {                        //syntax ts
  speak: string,
  name: string,
  color: string
 }
  function catGreet(cat: Animal) {
    console.log(`${cat.speak} my name is ${cat.name} my fur is ${cat.color}`)
  }
  catGreet({speak: 'Meow', name: 'Cat', color: 'white'});

  function dogGreet(dog: Animal) {
    console.log(`${dog.speak} my name is ${dog.name} my fur is ${dog.color}`)
  }
  dogGreet({speak: 'Ruff', name: 'Dog', color: 'black'});

   //Prototype-------------------------------------------------------------
   let scorpion = {
    name: 'black'
   };

   let spider = {
    name: 'white'
   };
   console.log(spider.__proto__=== scorpion.__proto__);    //true  __proto__  all objects ===
 //__proto__ has any object //   prototype has any class or function
   
   interface Computer {
    model: string,
    color: string,
    os: string,
    turn: Function
     }

     let dell: Computer = {
      model: 'Dell',
      color: 'Black',
      os: 'Windows',
      turn: function load() {
       console.log('100%')
      }
     }
     console.log(dell.turn);
     
 
     interface Kind {
      head: true,
      legs: number,
      hands: number,
      kind: string,
      speak: Function
    }


    let monkey: Kind = {
      head: true,
      legs: 2,
      hands: 2,
      kind: 'monkey',
      speak: function greet() {
        console.log(`Hello I am a ${this.kind}`)
      }
    };
    
      let human = Object.create(monkey);
      human.kind = 'human';
      console.log(human.legs)


       //constructor-------------------------------------------------------------
class Ship {         //syntax js
  constructor(options) {
  this.type = options.type,
  this.flag = options.flag
}     
}
let asianGlory = new Ship({
type: 'Car-Career',
flag: 'Panama'
})
console.log(asianGlory)
 
class Vessel {
  type: string;
  flag: string;
  gasEngeen: boolean

    constructor (type: string, flag: string, gasEngeen: boolean) {
    this.type = 'Car-career',
    this.flag = 'Panama',
    this.gasEngeen = false
  }
   };
  let goodwood = new Vessel('heavy-lift','panama',true)
  console.log(goodwood)

  

//classes---------------------------------------------------------
class Courses {
  public company: string;
  public type: string;
  public id: number;
  public language: string;
  
  constructor(company: string, type: string, id: number, language: string) {
    this.company = company;
    this.type = type;
    this.id = id;
    this.language = language
  }
  
  info () { return `${this.company} provides ${this.type} courses`}
  
}

let group1 = new Courses('Avada Media','React', 555, 'any');
 console.log(group1.info())

 class School extends Courses {
    public numbers: number;
    constructor(company: string,type: string,id: number,language: string,numbers: number) {
    super(company,type,id,language)
    this.numbers = numbers
     }
 }
let group2 = new School('Avada Media','React', 555, 'any',15)
console.log(group2.numbers)
class Jet {
  wings: number;
  turbine: string
  constructor(wings: number, turbine: string) {
    this.wings = wings,
    this.turbine = turbine
  }
}


class Country {
  public title: string;
  constructor (title: string) {
    this.title = title
  }
  getInfo() {return `The name of my country is ${this.title}`}
  
}
let ukraine = new Country('Ukraine');
console.log(ukraine.getInfo())
class City extends Country {
  location: string;
  constructor(title: string,location: string) {
    super(title);
    this.location = location
     }
  getLocation() {
    return `The name of my country is ${this.title} and located in ${this.location}`
  }
}
let odessa = new City('Ukraine','south')
console.log(odessa.getLocation())


    //inheritace---------------------------------------------

interface Media {
  type: string;
   }

  interface Television extends Media {
    sport: string;
  }

  class MassMedia implements Television {
    readonly language?: string;
    type: string;
    sport: string;
    constructor(type: string, sport: string) {
      this.type = type,
      this.sport = sport,
      this.language = 'ukrainian'
    }
  }
let information = new MassMedia('tv','chanal');


  class BaseClassWithConstructor {
    private id: number;
    private num: number;
    constructor(_id: number, num: number) {
    this.id = _id;
    this.num = num
    }
    }

    let hrt = new BaseClassWithConstructor(45,65)
    console.log(hrt);

    class InheritPrevClass extends BaseClassWithConstructor {
      private password: number;
        constructor (num: number, password: number) {
        super(num,password);
        this.password = password;
        }
    }
    let jkr = new InheritPrevClass(12345,55)
    console.log(jkr);


    //polymorphism--------------------------------------------
    class Calculator {                                 //ad-hoc
      sum(num1: number,num2: number): number {
         return num1 + num2
      }
      sum(num1: string,num2: string): string {
         return num1 + num2
      }
    }
     let newNum = new Calculator()
    console.log(newNum.sum(5,5))
    console.log(newNum.sum('5','5'));

    class Person {
      public _firstName: string;
      private _lastName: string;
      private _age: number
      constructor(firstName: string,lastName: string,age: number) {
        this._firstName = firstName,
        this._lastName = lastName,
        this._age = age
      }
      public greeting() {
        return (`Привет, я человек и меня зовут ${this._firstName}`)
      }
      public get fullName() {
        return `Фамилия -${this._lastName} Имя -${this._firstName}`
      }
    };
    class Employee extends Person {
      private inn: number;
      private numbers: number;
      private skills: string;
      constructor(firstName: string,lastName: string,age: number,inn: number,numbers: number,skills: string) {
        super(firstName,lastName,age)
        this.inn = inn;
        this.numbers = numbers;
        this.skills = skills
      }
      public greeting() {
        return(`Привет, я работник и меня зовут ${this._firstName}`)
      }
    };
    class Developer extends Employee {
      private level: string;
      private language: string;
      constructor(firstName: string,lastName: string,age: number,inn: number,numbers: number,skills: string,level: string,language: string) {
      super(firstName,lastName,age,inn,numbers,skills)  
      this.level = level;
      this.language = language
      }
      public greeting() {
        return(`Привет, я разработчик и меня зовут ${this._firstName}`)
      }
    }
    let pers = new Person('Maksym','Korostelov',100)
    let employ = new Employee('Marina','Guseva',100,298,15,'TS')
    let develop = new Developer('Damir','Korostelov',100,298,15,'TS','Junior','Advance')
    //console.log(pers.greeting())
    //console.log(employ.greeting())
    //console.log(develop.greeting())
    const personList: Person[] = [pers,employ,develop];
    function allGreet(personList: Person[]) {
     for(let i = 0; i < personList.length; i++) {
      const person = personList[i];
      console.log(person.greeting())
     }
    }
    allGreet(personList)

    //inheritance--------------------------
    class Comedy {
      public movie: string;
      public length: number;
      constructor(movie: string,length: number) {
        this.movie = movie;
        this.length = length;
      }
      info() {
        return (`This movie called ${this.movie} and it has ${this.length} length`)
      }
    }

    class Horor extends Comedy{
      constructor(movie: string,length: number) {
        super(movie,length)
      }
      show() {
        return ('This type of movie could be watch by person above 18')
      }
    }
    let comedyFilm = new Comedy('Eurotrip', 120)
    let hororFilm = new Horor('Saw',120)
    console.log(hororFilm.info());

    //incapsulation--------------------------------------------------
    interface Geo {
      name: string;
      length: number;
      width: number
    };

    class Oblast {
      protected name: string;
      public length: number;
      public width: number
      constructor(name: string, length: number, width: number) {
          this.name = name;
          this.length = length;
          this.width = width
        }
        countSquare(): number {
          return this.length * this.width
        }
    };
     let odObl = new Oblast('odesskaya oblast',10,10)
     console.log(odObl.name);

     class Rajon extends Oblast {
      public library: boolean;
      constructor(name: string, length: number, width: number,library: boolean) {
        super(name,length,width)
        this.library = library
      }
       showName(): string {
        return this.name
       }
     }

     let kiyvskiy = new Rajon('odesskaya oblast',10,10,true)
     
//generic---------------------------------------------------

  const getter = (data: any): any => data;
  console.log(getter(10).length)
  console.log(getter('max').length);


  const key = <T>(sign: T): T => sign
  console.log(key(10).length)
  console.log(key('max').length);
  