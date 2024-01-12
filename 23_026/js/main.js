//Q1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1000000 / 10); // 100000
console.log(50000 * 2); // 100000
console.log(+"100000"); // 100000
console.log(-(-"100000")); // 100000
console.log(100000.0); // 100000
console.log(Math.floor(100000.999)); // 100000
console.log(Math.ceil(99999.99)); // 100000
console.log(Math.round(99999.5)); // 100000

//----------------------------------

// Q2 use MIN_SAFE_INTEGER  to get this result

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//Q3 in one line use MAX_SAFE_INTEGER to get number 16 without use any numbers

console.log(Number.MAX_SAFE_INTEGER.toString().length);

//Q4

let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(Number.parseFloat(myVar).toFixed(2) * 1); // 100.57
