"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log(`The ${this.year} ${this.make} ${this.model}'s engine has been started.`);
    }
}
const myCar = new Car("Honda", "City", 2021);
myCar.startEngine();
