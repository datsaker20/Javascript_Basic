var str = "Hello world" * "6";
console.log(isNaN(str)); // check for NaN (Not a Number)
var a = 5;
function test() {
  a += 1;
  console.log((a % 5) + 1); // Each time the function call the data part will add 1 if it reaches 5 will return from 1
}
var b = 5 ** 5;
console.log(b);
var c = 5;
console.log(c++); // In ra 5 trước khi tăng giá trị
console.log(++c); // In ra 7 sau khi tăng giá trị
var a = 5;
var b = "5";
var c = "5";
console.log(a == b);
console.log(a === b);
console.log(+c != b);
console.log(+c !== b);

var firstName = "Đạt";
var age = 23;
var HaNoi = true;
document.getElementById("p1").innerHTML = firstName;
document.getElementById("p2").innerHTML = age;
document.getElementById("p3").innerHTML = HaNoi;

function res(a, b) {
  return a + b;
}

function click() {
  console.log(Date());
}
console.log(res(50,5)) 
click()