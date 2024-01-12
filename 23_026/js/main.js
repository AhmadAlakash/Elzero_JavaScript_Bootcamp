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
console.log(+Number.parseFloat(myVar).toFixed(2)); // 100.57
console.log(Number.parseFloat(myVar).toFixed(2) * 1); // 100.57
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

//Q5
// num has 10 as value
// You should use isInteger to get number 2
//  Don't use any number to get that
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//Q6
// use the var flt to get number 10 with 5 diffrent methods
// you should use only the  value of flt without write any number
// Don't repeat the methods to get the result

let flt = 10.4;

console.log(flt.toFixed(0) * true); // 10
console.log(Number.parseInt(flt)); // 10
console.log(+Number.parseFloat(flt).toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10

//Q7 You schould  write random number between 0 and 4

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
