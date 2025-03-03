"use strict";
function getUserInfo(age, isActive) {
    return `The user is ${age} years old and is currently ${isActive ? "Active" : "Inactive"}.`;
}
let userAge = 18;
let userStatus = true;
console.log(getUserInfo(userAge, userStatus));
