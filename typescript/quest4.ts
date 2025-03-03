interface Vehicle {
    startEngine(): void;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log(`The ${this.year} ${this.make} ${this.model}'s engine has been started.`);
    }
}
const myCar = new Car("Honda", "City", 2021);
myCar.startEngine();
