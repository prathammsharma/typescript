"use strict";
function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error: Invalid JSON format", error.message);
        }
        else {
            console.error("Unknown error occurred");
        }
        return null;
    }
}
console.log(parseJson('{"Name": "Pratham Sharma", "Age": 21}'));
console.log(parseJson("{invalidJson}"));
