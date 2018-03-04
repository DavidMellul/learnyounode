numbers = process.argv.slice(2).map(x => parseInt(x));
console.log(numbers.reduce((a, b) => a + b, 0));