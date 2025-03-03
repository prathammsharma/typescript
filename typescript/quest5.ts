function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello World"));  
console.log(identity<number>(57));                    
console.log(identity<boolean>(true));                 