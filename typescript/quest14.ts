function LogInstance(constructor: Function) {
    console.log(`Class ${constructor.name} has been instantiated.`);
}

@LogInstance  
class User {
    constructor(public name: string) {
        console.log(`User ${this.name} created.`);
    }
}

const user1 = new User("Pratham");
const user2 = new User("Sharma");
