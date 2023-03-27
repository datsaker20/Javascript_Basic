// Array JavaScript
var sd1 = "Đạt";
var sd2 = "Viết";
var sd3 = "Trần";

// cánh 1 khai báo mảng
// Điền giá trị trực tiếp vào trong mảng
var sd = ["Trần", "Viết", "Đạt"];
// index     0      1     2
console.log(sd);
console.log(sd[2]); // tìm giá trị ở vị trí mong muốn

// cách 2 khai báo mảng
// Khai bảo mảng rỗng rồi đưa từng phần tử vào trong mảng
var arr1 = [];
arr1[0] = "Trần";
arr1[1] = "viết";
arr1[2] = "Đạt";
arr1.push("Nguyễn");
arr1.push("Thị");
arr1.push("Bé");
console.log(arr1);

// Cách 3 sử dụng từ khóa (new)

var arr2 = new Array("Trầt", "Trần", "Trất");
console.log(arr2);

var array = [1, "Hay", 3, 1, true, null];
array[9] = "Chín";
array[-3] = "Số âm";
array["String"] = "srt"; // gán theo tên index
console.log(array);
console.log(array.length); // lấy độ dài của mảng gồm có bao nhiêu gồm tử (element)
console.log(array[10]);
// Mutator methods làm thay đổi mảng ban đầu
array.push("Mười 1"); // Thêm phần tử vào cuỗi mảng nếu có phần tử chưa có giá trị
console.log(array.pop()); //xóa phần tử ở cuối mảng
console.log(array.shift()); // xóa phần tử đàu tiên của mảng
console.log(array.splice(0, 5, "1", "hai")); //xóa phần tử (vị trí bằng đầu,số lượng phần tử muốn xóa,giá trị phần tử thay thế nếu muốn
// Accessor methods ko làm thay đổi mảng
console.log(array.includes("hai")); // kiểm tra phần tử có tồn tại trong mảng hay ko
console.log(array.indexOf("hai", 2)); // kiểm tra phẩn tử đó tồn tại hay ko nếu có trả về 1 ko là -1
console.log(array.join(" "));
// Ineration methods lặp qua các phần tử trong mảng
var array1 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
a = array1.filter((m) => m % 2 == 0); // trả về 1 mảng mới nếu các phần thỏa mãn điều kiện lặp
b = array1.map((m) => m * 2); // tạo ra mảng mới đã biến đổi
c = array1.find((m) => m % 2 == 0); // trả về phần tử đầu tiên tìm thấy nếu thỏa màn điều kiện
console.log(a);
console.log(b);
console.log(c);

var frui = [
  { name: "apple", price: 10 },
  { name: "orange", price: 50 },
  { name: "tomato", price: 150 },
  { name: "coconut", price: 80 },
  { name: "pear", price: 200 },
];

console.log(
  frui.reduce((total, item) => { // item là phần tử
    if (item.price > 50) {
      return total + " " + item.name;
    }
    return total;
  }, "") // giá trị khởi tao của total 
);

var array1 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
console.log(Array.isArray(array1));// kiểm tra có phải là mảng hay ko
console.log(
  array1.reduce((t, i) => {
    if (i > 1) {
    return t += i;
    }
    return 0
  },"")
);


// example
function isBigEnough(element) {
 return element >= 15;
}
// trả về phần tử đầu tiên có giá trị >= 15
var array1 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
console.log(array1.find((item)=>{ item>9
}))

console.log(Array.from('fghidsgfs'))
var s =new Set([['Trần',"Viết"],["Đạt"]])

console.log(Array.prototype)

var arr = Array.of(1,2,3,4,5,6,7,8,9,10)// tạo ra array từ các đối số
console.log(arr)
var arr1 =["a","b","c",1,2,3,4]
console.log(arr.concat(arr1))// gộm 2 arrays

//Copy một phần của array và dán đến vị trí khác của array mà không làm thay đổi kích thước của nó. Method này thay đổi lên chính array đó.
// ví dụ
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

var arr = Array.of(1,2,3,4,5,6,7,8,9,10)
for (let i of arr.entries()) {
 console.log(i) // in ra cặp key value với index là key ,giá trị là value
}


var arr = Array.of(1,2,3,4,5,6,7,8,9,10)

console.log(arr.every((i)=>{ // kiểm tra tất cả phần tử có đúng điều kiện hay ko
return i>0

}))

var arr = Array.of(1,2,3,4,5,6,7,8,9,10)

console.log(arr.fill("5",5,9))// Fill các elements của array với một giá trị cho trước.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
//Tạo một array mới từ những element pass với điều kiện đặt ra.
//example
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

// trả về mảng mới gồm các phần tử có length > 6
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

var arr = Array.of(1,2,3,4,5,6,7,8,9,10)
arr.forEach((i)=>{
console.log(`${i}`)

})