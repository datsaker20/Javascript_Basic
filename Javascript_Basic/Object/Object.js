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
var mouse = Object.create({});// có thể kế thừa 1 object khác bằng cách truyền object cha vao

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
    this.length = length;// this giống với @length trong ruby
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
var target = Object.assign(person, connguoi); // merge 2 objects nếu trùng key thì chỉ lấy value obj thứ 2
console.log(target);
console.log(Object.entries(target));// trả về mảng có các thuộc tính đếm đc [key,value]
console.log(target.hasOwnProperty("Name"))// kiểm tra có thuộc tính có tồn tại hay ko
console.log(target.toString())//




// Khi một hàm được tạo trong Javascript thì nó sẽ thêm thuộc tính prototype vào hàm đó. Thuộc tính prototype là một object với mặc định có constructor.
//Tất cả các object trong Javascript kế thừa các thuộc tính và phương thức từ prototype.
function Human(ho, ten) {
  this.ho = ho;
  this.ten = ten;
}
Human.prototype.show = function () {
  return `${this.ho} ${this.ten}`
}
var hm = new Human("Trần", "Đạt");
console.log(hm.show())

function Person(name) {
  this.name = name;
}
//Trả về tham chiếu hàm constructor tạo nên object. Tất cả các object đều có thuộc tính constructor.
var person = new Person('Hieu Bui');
console.log('person.constructor is ' + person.name);

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result += lookup[val]
  // Only change code above this line
  return result;
}
console.log(phoneticLookup(""))


function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp))
    return obj[checkProp]
  else
    return "Not Found"
  // Only change code above this line
}
const myMusic = [{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": ["CD","8T","LP"],
    "gold": true}
];

console.log(myMusic[0].formats)

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
console.log(ourPets[0].names[1])

ourPets[1].names[0];


function updateRecords(records, id, prop, value) {
  if (value === '') {
    // Nếu giá trị là rỗng, xóa thuộc tính prop tương ứng khỏi album
    delete records[id][prop];
  } else if (prop !== 'tracks') {
    // Nếu prop không phải là 'tracks' và giá trị không rỗng, gán giá trị cho thuộc tính prop của album
    records[id][prop] = value;
  } else {
    // Nếu prop là 'tracks' và giá trị không rỗng, thêm giá trị vào cuối mảng tracks của album. Nếu album chưa có thuộc tính tracks, tạo mảng mới trước tiên
    if (!records[id].hasOwnProperty('tracks')) {
      records[id]['tracks'] = [value];
    } else {
      records[id]['tracks'].push(value);
    }
  }
  // Luôn trả về đối tượng records hoàn chỉnh
  return records;
}

// Setup
const myArray = [];
let i =6;
while (i>=0)
{
  myArray.push(i)
  i--
}
// Only change code below this line
console.log()

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0 ;i< arr.length;i++)
  {
    for (let j=0;j<arr[i].length;j++)
    {
      product *=arr[i][j]
    }
  }
  // Only change code above this line
  return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]))
