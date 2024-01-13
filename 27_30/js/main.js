/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web SchooL";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toLocaleUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.substr(13, 1).repeat(8).toLocaleUpperCase()); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(10)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLocaleLowerCase() +
    a.slice(1, length - 1).toLocaleUpperCase() +
    a.substr(-1).toLocaleLowerCase()
); // eLZERO WEB SCHOOl

console.clear();

// Q1
// You have var its value = str
// You should get e  in 6 diffrent wayes and without repeat
// Make sure  that e is small
// One of the solutions made sure it repeats the letter taken 3 times

let userName = "Elzero";
console.log(userName.charAt().toLowerCase()); // e
console.log(userName.substr(0, 1).toLocaleLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName.substring(0, 1).toLocaleLowerCase()); // e
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.split("", 1).toString().toLocaleLowerCase().repeat(3)); // eee

//Q2

// You have some vars have  word and some letters
// First line make sure that letter z is existing into the word and the result is true
// Second line make sure that word start with letter e and  result is true
// Third line make sure that word end with letter o and result is true
// You can't edit or change any vars

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLocaleLowerCase().startsWith(letterE)); // True
console.log(word.toLocaleUpperCase().endsWith(letterO)); // True
