"use strict";
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Sorry, cannot divide by zero.");
    }
    return numerator / denominator;
}
try {
    console.log(divideNumbers(14, 2));
    console.log(divideNumbers(9, 0));
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("Unknown error occurred");
    }
}
