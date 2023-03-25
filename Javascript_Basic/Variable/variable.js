// // Lập trình JavaScript
// var a; // undefined
// console.log(a);
// var b = "New  JavaScript"; // string
// console.log(b);
// var c = !true; // boolean
// console.log(c);
// var d = 123; // number
// console.log(d);
// var e = null; // null
// console.log(e);
// var f = { first: "Trần", last: "Đạt", age: 23 };
// console.log(f); // object
// var g = ["Trần", "Viết", "Đạt"];
// console.log(g); // array

// var a = 5; // global variable

// function global_variable() {
//   var a = 10; // local variable
//   console.log(a);
// }
// global_variable();
// console.log(a);
// function local_variable() {
//   const a = 20;
//   console.log(a);
// }
// local_variable();
// function newFunction() {
//   a = 10;
//   console.log(a);
// }
// newFunction();
// local_variable;
// console.log(a);

a = 10; // anonymous variable
console.log(a);

const a = 20;
a = 10; // value cannot be re-declared
console.log(a);
let c = 20;
c = 10; // can reassign the value
console.log(c);
var b = 10;
var b = 20; // can re-declare the value
console.log(b);
