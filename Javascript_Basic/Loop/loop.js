// vòng for dùng đẻ lặp qua 1 tập hợp các phần tử có kích thước xác định trước
/* for (initialization; condition; increment) {
  // Code sẽ được lặp lại
}*/
// initialization : khởi tạo giá trị ban đầu
// condition : điều kiện để dừng vòng lặp
// increment : tăng giá trị biến đếm
var arr = [];
for (let i = 0; i < 10; i += 2) {
  console.log(arr.push(i));
}
console.log(arr);

// vòng lặp while vòng lặp này đc dùng lặp lại 1 khối mã khi một điều kiện được thỏa mãn
/*while (condition)
{
    // Block of code
}*/
// condition là điều kiện tiếp tục block of code
var i = 0; // 1 (chỉ lần đầu tiên)
while (i < 100) {
  // 2
  console.log(i);
  i += 3; // 3
}

// do ... while tương tự như vòng lặp while, nhưng khối mã sẽ được thực thi ít nhất 1 lần
// trước khi kiểm tra điều kiện lần đầu tiên
// condition là điều kiện tiếp tục block of code
/*do {
    Block of code
 }
while (condition); */

var i = 0;
do {
  console.log(i);
  i++;
} while (i > 0 && i <= 100);

// forEach lặp qua các phần tử ,ko trả về giá trị và không dừng trước khi lặp hết mảng
/* mảng có bao nhêu element thì lặp qua bấy nhiêu
Lưu ý rằng forEach sẽ không thực thi function đầu vào cho các phần tử không có giá trị
array.forEach((currentValue, index,array)=>{
    block of code
})
*/
// currentValue: giá trị đang được xử lý
// index: chỉ số của giá trị (currentValue) trong mảng
// array: là toàn bộ mảng đang gọi đến forEach
var arr = [10, 20, "hi", , {}];
arr.forEach((i, index, arr) => {
  console.log(` vị trí thứ ${index} có giá trị ${i} và ${arr} `);
});

// Map lặp qua các phần tử trong mảng trả về mảng mới với các giá trị đã xử lý
/*
var newArray = array.map(function(currentValue, index, arr) {
  return // Giá trị mới sẽ được trả về
})
*/
var num = [1, 5, 6, 8, 2, 4, 6, 8, 4, 8, 4, 2, 2, 3, 1, 5, 9, 7, 3, 5];
var dou;
var dou = num.map((i) => i / 2);
console.log(dou);

// for in lặp qua properties của object (vẫn dùng được với array key = index)
/*
for (variableName in object)
{
    block of code
}
*/
//Trong đó, variableName là tên thuộc tính của đối tượng, object là đối tượng được lặp qua.
var obj = { a: 1, b: 2, c: 3, d: 4 };
for (var prop in obj) {
  console.log(` obj. ${prop} = ${obj[prop]} `);
}

var arr = [];
arr[2] = 2;
arr[3] = 3;
arr[0] = 4;
arr[1] = 1;
arr.forEach((i, index, ar) => {
  console.log(` arr[${i}] = arr[${index}] `);
});

var parent = {
  foo: function () {
    console.log("foo");
  },
};

var child = Object.create(parent);
child.bar = function () {
  console.log("bar");
};


// kiểm tra obj khong kết thừa
for (var key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(child[key]);
  }
}



// for of  sử dụng lặp qua các element của object có thể lặp lại
/*for (variable of iterable) {
  // Code sẽ được lặp lại
}*/
// variable là tên biến đại diện cho phần tử
// iterable là object được lặp qua các element đó

var obj = {
    a:1,
    b:2,
    c:3,
    d:4
}
var keys= Object.keys(obj);
for (var k of keys) {
    console.log(` Key = ${k} value = ${obj.k}`)
    
}
//Với đối tượng (object), ta không thể sử dụng for...of trực tiếp bởi vì nó không phải là một đối tượng lặp (iterable).

"use strict"; // chế độ nghiêm khắc bắt buộc phải có từ khóa khai báo biến
