//Q1

let numberOne = 10;
let numberTwo = 20;

console.log(numberOne + "" + numberTwo);
console.log(typeof (numberOne + "" + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}
${numberOne}`);

// Q2
// Do not edit the js file
// Do not write code js here
// you should let this code working

console.log(elzero.innerHTML); // object

console.log(typeof elzero); // object

//Q3
/* should in the output =>
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/

console.log(
  '`I\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ With ++ \n  \\"""\\"""  \n ""JavaScript""``'
);

//Q4

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}`); // Template Literals _21_2021_2021_2021_20_

console.log(
  "_" + a + "_" + b + "" + a + "_" + b + "" + a + "_" + b + "" + a + "_" + b
); //  Normal Concatenate  _21_2021_2021_2021_20_
