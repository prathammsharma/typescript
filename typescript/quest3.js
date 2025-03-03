"use strict";
class Employee {
    constructor(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    getEmployeeDetails() {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
}
const emp1 = new Employee("Pratham", 21, 264);
console.log(emp1.getEmployeeDetails());
