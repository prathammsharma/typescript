function getUserInfo(age: number, isActive: boolean): string {
    return `The user is ${age} years old and is currently ${isActive ? "Active" : "Inactive"}.`;
}

let userAge: number = 18;
let userStatus: boolean = true;

console.log(getUserInfo(userAge, userStatus));