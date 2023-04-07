var str = "Tran Viết Đat"
var str2 = "y"
console.log(str.toLowerCase())// chuyển sang chữ thường
console.log(str.toUpperCase())// chuyển sang chữ hoa
console.log(str.trim()) // cắt ký tự 2 khoảng trắng đầu và cuối
console.log(str.length) // lấy độ dài chuỗi
console.log(str.substring(5))// lấy chuỗi con từ vị trí đc truyền vào
console.log(str.charAt(4))// lấy ký tự tại vị trí
console.log(str.replace("a","Hùng"))// tìm và thay thế vị trí đầu tiên 
console.log(str.split(" "))// tách chuỗi thành mảng 
console.log(str.startsWith("T"))//kiểm tra có bắt đàu bằng chuỗi cho sãn hay ko
console.log(str.endsWith(" "))// kiểm tra có kết thúc bằng chuỗi cho sãn hay ko
console.log(str.match(/[A-Z]|\d/g))// biểu thức chính quy
console.log(str.indexOf("a",5))// tìm kiếm vị trí đầu tiên nếu có số tìm kiếm từ vị trí tương ứng
console.log(str.lastIndexOf("a"))
console.log(str.concat(str2))// gộm 2 chuỗi 
console.log(str.includes(str2))// so sanh chuỗi thứ 2 có chuỗi nào giống với chuỗi 1 hay ko
console.log(str.slice(4))//cắt một chuỗi con trong một chuỗi trả về chuỗi con đó trong một chuỗi mới.
console.log(`Tao tên là ${str} is ${str2}`)// chuỗi nội suy
console.log(str.search(str2))// trả về giá trị của vị trí đầu tiên tìm thấy nếu ko có trả về -1
console.log("Tao tên là "+str)
var a = 123456
console.log(typeof a.toString())


const input1 = "‘1’";
const input2 = 40;
console.log(input1+input2);
const arr1 = [];
arr1.push(1);
arr1.push(2);
arr1.push(3);
const length = arr1.length;
console.log(length)


const arr2 = []
for(i=0;i<10;i++){
    if(i%2===0){
     arr2.push(i)
    }
}
console.log(arr2)

var result=0;
setTimeout(()=>{
    result=10;
},2000)
console.log(result)

             
let data ={};
data['key']=1;
data['name']='john';
data.role='admin';
console.log(data)
   

function nums(a, b) {
    if (a > b) console.log('a is bigger');
    else console.log('b is bigger');
    return;
    a + b;
  }
     
  console.log(nums(4, 2));
  console.log(nums(1, 2));


  const myPromise = Promise.resolve(("Promise!"));
  function funOne(){
    myPromise.then(res =>console.log(res))
    setTimeout(()=>console.log("Timeout1"),1000)
    console.log("Last line 1!")
  }
  function funTwo(){
    setTimeout(()=>console.log("Timeout2"),1000)
    console.log("Last line 2!")
  }
  funOne()
  funTwo()




  let count = 0;
  const nums = [0, 1, 2, 3];
  
  nums.forEach(num => {
       if (num) count += 1
  })
   
  console.log(count)


  const data1= 0;
const data2= false;
console.log(data1 == data2);
console.log(data1 === data2);

const input = 1;
const result = input? true : false;
console.log(result);