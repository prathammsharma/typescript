const sum = (numbers: number[]): number => numbers.reduce((acc, num) => acc + num, 0);

console.log(sum([1, 2, 3, 4, 5, 6]));  
console.log(sum([10, 20, 30, 40]));     
