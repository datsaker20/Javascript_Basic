// Function (hàm, chức năng), đc gọi bên ngoài hoặc bên trong chính nó
// Các giá trị được truyền đến 1 hàm và có thể trả về 1 giá trị
// Tên hàm phải được bắt đầu bằng chữ cái (a-z,A-Z) hoặc ký tự _.
// Tên hàm không được bắt đầu bằng số, các ký tự khác ký tự _.

function sayHello() {
  var say = function () {
    console.log(hello);
  };
  // Local variable that ends up within the closure
  var hello = "Hello, world!";

  return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure();

const tong = function (a, b) {
  console.log(a + b);
};
tong(5, 50); //  hàm có tham số (param)
tong(1, 50);
tong(2, 50);
tong(3, 50);
const hello = () => {
  console.log("hello!");
}; // hàm ko tham số
hello();
function mang(...mang) {
  var arr = [];
  arr.push(mang);
  return arr;
}
console.log(mang(1, 2, 3, 5, 4, 5));

function thap(n, a, b, c) {
  if (n === 1 || n === 0) {
    console.log("đĩa 1 từ A sang C");
    return 1;
  }
  thap(n - 1, a, c, b);
  console.log(`đĩa ${n} từ ${a} sang ${b}`);
  thap(n - 1, c, b, a);
}
thap(3, "A", "B", "C");

function ten(n) {
  var n = "Dat";
  console.log("đi chơi hơm " + n);
}
ten("Hường");

function tbc(...args) {
  var tong = 0;
  for (let i = 0; i < args.length; i++) {
    tong += args[i];
  }
  var tbc = tong / args.length;
  return tbc;
}
console.log(tbc(5, 6, 9, 2, 1, 5, 8, 3) + 10);

// function anonymous
//  sẽ tiết kiệm vùng nhớ và gán nó với tên biến
const a = function (name, age) {
  return ` ${name} ${age}`;
};
console.log(a("Đạt", 25));

// closure function
// tạo ra biến bên trong và 1 hàm bên trong nó (khu vực bên trong nó có thể sử dụng các biến bên ngoài hàm đó)
function sayHello() {
  var say = function () {
    console.log(hello);
  };
  // Local variable that ends up within the closure
  var hello = "Hello, world!";

  return say; // trả về 1 function
}
var sayHelloClosure = sayHello(); // biến sayHelloClosure đang đc gán là 1 function say
sayHelloClosure();

// Declare the myGlobal variable below this line

let myGlobal=10
function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal =5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun2()

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
  console.log(sum)
}

// Only change code below this line

function addFive(){
  sum+=5
  console.log(sum)

}
// Only change code above this line

addThree()
addFive()



function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
 item= arr.shift()
  
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10))