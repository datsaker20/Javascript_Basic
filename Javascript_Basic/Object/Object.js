var myMap = new Map();
myMap.set("name", "Dat");
myMap.set("address", "Hà Nội");
myMap.set("age", 23);
console.log(myMap);
console.log(myMap.get("name"));

var Mobile = {
  manufacturer: "Redmi",
  color: "Blue",
  size: "17 inch",
  price: "5000",
  date: function () {
    // phương thực sử dụng trên object
    return ` Ngày Mua ${Date()} Loại ${this.manufacturer} `;
  },
};
console.log(Mobile.color); // truy xuất thuộc tính trong object
console.log(Mobile.date()); // truy xuất phương thức(method) trong object

// Các cách tạo 1 Object
// literal
var cat = {};

// constructor
var dog = new Object();

// static methods
var mouse = Object.create({});

var person = {
  firstName: "",
  lastName: "",
  age: 0,
  set Ten(firstName) {
    this.firstName = firstName;
  },
  set Ho(lastName) {
    this.lastName = lastName;
  },
  set Tuoi(age) {
    this.age = age;
  },
  get daydu() {
    return ` Họ ${this.firstName} Ten ${this.lastName} Tuổi: ${this.age} `;
  },
};

person.Ten = "Trần";
person.Ho = "Đạt";
person.age = 23;
console.log(person.daydu);

class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"
class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(length) {
    this.length = length;
  }
}
var square = new Square(5);
console.log(square.area);

var person = {
  Name: "Đạt",
  Contry: "Việt Nam",
  City: "Hà Nội",
  Age: 23,
  infomation() {
    console.log(this.age < 23 ? `${this.Age}` : `${this.Name}`);
  },
};
var connguoi = {
  Name: "Trần",
  City: "Quảng bị",
};
person.school = ["Điện", "Lực"];
console.log(person);
var target = Object.assign( person,connguoi); // merge 2 objects nếu trùng key thì chỉ lấy value obj thứ 2
console.log(target);
console.log(Object.entries(target));// trả về mảng có các thuộc tính đếm đc [key,value]
console.log(target.hasOwnProperty("Name"))// kiểm tra có thuộc tính có tồn tại hay ko
console.log(target.toString())//




// Khi một hàm được tạo trong Javascript thì nó sẽ thêm thuộc tính prototype vào hàm đó. Thuộc tính prototype là một object với mặc định có constructor.
//Tất cả các object trong Javascript kế thừa các thuộc tính và phương thức từ prototype.
function Human (ho,ten){
this.ho = ho;
this.ten = ten;
}
Human.prototype.show = function (){
  return `${this.ho} ${this.ten}`
}
var hm = new Human("Trần","Đạt");
console.log(hm.show())

function Person(name) {
  this.name = name;
}
//Trả về tham chiếu hàm constructor tạo nên object. Tất cả các object đều có thuộc tính constructor.
var person = new Person('Hieu Bui');
console.log('person.constructor is ' + person.name);

