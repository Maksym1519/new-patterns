class Developer {
    constructor(name, role, salary) {
        this.name = name;
        this.salary = salary;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    getRole() {
        return this.role;
    }
}
class Junior extends Developer {
    constructor(name, role, salary) {
        super(name, role, salary);
        this.name = name;
        this.salary = salary;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    getRole() {
        return this.role;
    }
}
class Designer {
    constructor(name, role, salary) {
        this.name = name;
        this.salary = salary;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    getRole() {
        return this.role;
    }
}
class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getSalary() {
        this.employees.forEach(function (employee) {
            console.log(employee.getSalary());
        });
        return this.employees.map(employee => employee.getSalary()).reduce((a, b) => a + b);
    }
    getName() {
        this.employees.forEach(function (employee) {
            console.log(employee.getName());
        });
        return this.employees.map(employee => employee.getName()).join(', ');
    }
    getRole() {
        this.employees.forEach(function (employee) {
            console.log(employee.getRole());
        });
        return this.employees.map(employee => employee.getRole()).join(', ');
    }
}
//const developer = new Developer('Maksym','Developer',1000)
//const designer = new Disigner('Marina','Designer',2000)
const company = new Company();
company.addEmployee(new Developer('Maksym', 'Developer', 1000));
company.addEmployee(new Designer('Marina', 'Designer', 2000));
company.addEmployee(new Junior("Vasia", "Junior", 500));
console.log(company.getSalary());
console.log(company.getName());
console.log(company.getRole());
export {};
//# sourceMappingURL=composite.js.map