   /* class Equipment {
    name: any
    price: any
    getName(): any {
        return this.name
    }
    getPrice(): any {
        return this.price
    }
    setName(name: any) {
        this.name = name
    }
    setPrice(price: any) {
        this.price = price
    }
}
class Body extends Equipment {
    constructor() {
        super()
        this.setName("Body")
        this.setPrice(2000)
    }
}
class Engine extends Equipment {
    constructor() {
        super()
        this.setName("Engine")
        this.setPrice(3000)
    }
}
class Tools extends Equipment {
    constructor() {
        super()
        this.setName("Tools")
        this.setPrice(1000)
    }
}
class Composite extends Equipment {
    equipments: Array<Equipment>
    constructor() {
        super()
        this.equipments = []
    }
    add(equipment: Equipment) {
        this.equipments.push(equipment)
    }
    getPrice() {
     /* this.equipments.forEach(function(equipment) {
        });
       return this.equipments.map(equipment => equipment.getPrice()).reduce((a,b) => a + b)
    }
}

class Car extends Composite {
    constructor() {
        super()
        this.setName('Audi')
    }
}
const myCar = new Car()
myCar.add(new Body())
myCar.add(new Engine())
myCar.add(new Tools())
console.log(`${myCar.getName()}${myCar.getPrice()}`)

//---------------------------------------
    class Employee {
    salary: number = null
    name: string
    
        getSalary(): number {
        return this.salary
    }
    getName(): string{
        return this.name
    }
    setSalary(salary: number) {
      this.salary = salary
    }
    setName(name: string) {
        this.name = name
    }
}

class Developer extends Employee {
   constructor() {
    super()
    this.setName("Developer")
    this.setSalary(2000)
   }
    
}
class Designer extends Employee {
    constructor() {
        super()
        this.setName("Designer")
        this.setSalary(1500)
    }
  
}
class Senior extends Employee {
    constructor() {
        super()
        this.setName("Senior")
        this.setSalary(3000)
    }
}

class Composite extends Employee {
   private employees: Array<Employee>
    constructor() {
        super()
        this.employees = []
    }
    addEmployee(employee: Employee) {
    this.employees.push(employee)
    }
    getSalary() {
      /*this.employees.forEach(function(employee) {
        console.log(employee.getName() + " " + employee.getRole() + " " + employee.getSalary())
      })
    }
   return this.employees.map(employee => employee.getSalary()).reduce((a, b) => a + b)
}
}

class Company extends Composite {
    constructor() {
        super()
       this.setName("Avada-Media")
    }
}
const company = new Company()
company.addEmployee(new Senior())
company.addEmployee(new Designer())
company.addEmployee(new Developer())
console.log(`${company.getName()} employees get gross salary ${company.getSalary()}`)
*/
interface Employee {
    getName(): string
    getSalary(): number
    getRole(): string
}

class Developer implements Employee {
    name: string
    salary: number
    role: string
    constructor(name: string, role: string, salary: number) {
    this.name = name
    this.salary = salary
    this.role = role
    }
     getName(): string {
        return this.name
     }
     getSalary(): number {
        return this.salary
     }
     getRole(): string {
         return this.role
     }
}
class Junior extends Developer {
    name: string
    salary: number
    role: string
    constructor(name: string, role: string, salary: number) {
        super(name,role,salary)
        this.name = name
        this.salary = salary
        this.role = role
        }
         getName(): string {
            return this.name
         }
         getSalary(): number {
            return this.salary
         }
         getRole(): string {
             return this.role
         }
}
class Designer implements Employee {
    name: string
    salary: number
    role: string
    constructor(name: string, role: string, salary: number) {
    this.name = name
    this.salary = salary
    this.role = role
    }
     getName(): string {
        return this.name
     }
     getSalary(): number {
        return this.salary
     }
     getRole(): string {
         return this.role
     }
}

class Company implements Employee {
    employees: Array<Employee>
    constructor() {
        this.employees = []
    }
    addEmployee(employee: Employee) {
        this.employees.push(employee)
        }
        getSalary(): number {
          this.employees.forEach(function(employee) {
            console.log(employee.getSalary())
          })
          return this.employees.map(employee => employee.getSalary()).reduce((a, b) => a + b)
        }
       getName(): string {
        this.employees.forEach(function(employee) {
          console.log(employee.getName())
          })
          return this.employees.map(employee => employee.getName()).join(', ')
       }
       getRole(): string {
        this.employees.forEach(function(employee) {
            console.log(employee.getRole())
          })
          return this.employees.map(employee => employee.getRole()).join(', ')
       }
}
//const developer = new Developer('Maksym','Developer',1000)
//const designer = new Disigner('Marina','Designer',2000)
const company = new Company()
company.addEmployee(new Developer('Maksym','Developer',1000))
company.addEmployee(new Designer('Marina','Designer',2000))
company.addEmployee(new Junior("Vasia","Junior",500))
console.log(company.getSalary())
console.log(company.getName())
console.log(company.getRole())





