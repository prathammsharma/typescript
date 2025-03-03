function ValidateEmail(value: undefined, context: ClassFieldDecoratorContext) {
    return function (this: any, newValue: string) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(newValue)) {
            throw new Error(`Invalid email format: ${newValue}`);
        }

        return newValue;
    };
}

class User1 {
    @ValidateEmail
    email: string;

    constructor(email: string) {
        this.email = email;
    }
}

try {
    const user1 = new User1("valid.email@example.com");
    console.log(`User created with email: ${user1.email}`);

    const user2 = new User1("invalid-email"); 
} catch (error) {
    console.error(error);
}
