var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Developer = /** @class */ (function () {
    function Developer(name, role, salary) {
        this.name = name;
        this.salary = salary;
        this.role = role;
    }
    Developer.prototype.getName = function () {
        return this.name;
    };
    Developer.prototype.getSalary = function () {
        return this.salary;
    };
    Developer.prototype.getRole = function () {
        return this.role;
    };
    return Developer;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, role, salary) {
        var _this = _super.call(this, name, role, salary) || this;
        _this.name = name;
        _this.salary = salary;
        _this.role = role;
        return _this;
    }
    Junior.prototype.getName = function () {
        return this.name;
    };
    Junior.prototype.getSalary = function () {
        return this.salary;
    };
    Junior.prototype.getRole = function () {
        return this.role;
    };
    return Junior;
}(Developer));
var Designer = /** @class */ (function () {
    function Designer(name, role, salary) {
        this.name = name;
        this.salary = salary;
        this.role = role;
    }
    Designer.prototype.getName = function () {
        return this.name;
    };
    Designer.prototype.getSalary = function () {
        return this.salary;
    };
    Designer.prototype.getRole = function () {
        return this.role;
    };
    return Designer;
}());
var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.getSalary = function () {
        this.employees.forEach(function (employee) {
            console.log(employee.getSalary());
        });
        return this.employees.map(function (employee) { return employee.getSalary(); }).reduce(function (a, b) { return a + b; });
    };
    Company.prototype.getName = function () {
        this.employees.forEach(function (employee) {
            console.log(employee.getName());
        });
        return this.employees.map(function (employee) { return employee.getName(); }).join(', ');
    };
    Company.prototype.getRole = function () {
        this.employees.forEach(function (employee) {
            console.log(employee.getRole());
        });
        return this.employees.map(function (employee) { return employee.getRole(); }).join(', ');
    };
    return Company;
}());
//const developer = new Developer('Maksym','Developer',1000)
//const designer = new Disigner('Marina','Designer',2000)
var company = new Company();
company.addEmployee(new Developer('Maksym', 'Developer', 1000));
company.addEmployee(new Designer('Marina', 'Designer', 2000));
company.addEmployee(new Junior("Vasia", "Junior", 500));
console.log(company.getSalary());
console.log(company.getName());
console.log(company.getRole());
