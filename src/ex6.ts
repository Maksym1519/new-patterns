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

interface Person {
    personalNumber: number
    surname: string
    name: string;
    age: number;
  }
  
  class PersonImpl implements Person {
    constructor(public personalNumber: number, public name: string, public surname: string, public age: number) {}
  }
  
  let people: Person[] = [
    new PersonImpl(2,"Klaus","Meine",75),
    new PersonImpl(3,"Mathias","Jabs",58),
    new PersonImpl(7,"Ralph","Rickerman",52),
    new PersonImpl(1,"Rudolph","Schenker",75),
    new PersonImpl(4,"Mickey","Dee",57),
    new PersonImpl(8,"German","Rarebel",74),
    new PersonImpl(9,"Francis","Buhgolz",68),
    new PersonImpl(5,"Pawel","Machiwoda",55),
    new PersonImpl(6,"James","Kottack",54),
    new PersonImpl(10,"Uli","Roth",68),
  ];
  
  people.sort((person1, person2) => person1.personalNumber - person2.personalNumber);
  
  console.log(people);

  //---------------------------------------------------------------------------------
  interface Comparable <T>{
  compareTo(other: T): number
  }
  
  class PersonC implements Comparable <PersonC> {
  constructor(public persName: number, public name: string, public surname: string, public age: number) {}
  compareTo(other: PersonC): number {
      return this.persName - other.persName
  }
  }

  let newPeople: PersonC[] = [
    new PersonC(2,"Klaus","Meine",75),
    new PersonC(3,"Mathias","Jabs",58),
    new PersonC(7,"Ralph","Rickerman",52),
    new PersonC(1,"Rudolph","Schenker",75),
    new PersonC(4,"Mickey","Dee",57),
    new PersonC(8,"German","Rarebel",74),
    new PersonC(9,"Francis","Buhgolz",68),
    new PersonC(5,"Pawel","Machiwoda",55),
    new PersonC(6,"James","Kottack",54),
    new PersonC(10,"Uli","Roth",68),
  ];

  newPeople.sort((person1,person2) => person1.compareTo(person2))
  console.log(newPeople)