import * as SomeLibrary from "./types/example";

const config: SomeLibrary.AppConfig = {
    apiUrl: "https://api.example.com",
    retryCount: 3
};

SomeLibrary.initializeApp(config);
console.log("Application initialized successfully!");
