//Q2
document.write("<h1 style='color:blue' style>Elzero</h1>");
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.fontFamily = "Arial";

//Q3
console.log(
  " %cElzero %cWeb %cSchool",
  "color:red ;font-size:40px",
  "color:green ;font-size:40px ;font-weight:bold",
  "color:blue ;font-size:40px"
);

//Q4

console.group("Group 1");
console.log("Massage One");
console.log("Massage Two");
console.group("Child Group");
console.log("Massage One");
console.log("Massage Two");
console.group("Grand Child Group");
console.log("Massage One");
console.log("Massage Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Massage One");
console.log("Massage Two");
console.groupEnd();

//Q5
console.table(["Mohamed", "Omar", "Ahmad", "Kaled"]);

//Q6
// console.log("Massage One");
/* console.log("Massage Two");*/
