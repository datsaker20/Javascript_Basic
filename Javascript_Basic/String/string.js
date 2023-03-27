var str = "Tran Viết Đat"
var str2 = "y"
console.log(str.toLowerCase())// chuyển sang chữ thường
console.log(str.toUpperCase())// chuyển sang chữ hoa
console.log(str.trim()) // cắt ký tự 2 khoảng trắng đầu và cuối
console.log(str.length) // lấy độ dài chuỗi
console.log(str.substring(5))// lấy chuỗi con
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
console.log(str.slice(4))
console.log(`Tao tên là ${str} is ${str2}`)// chuỗi nội suy
console.log(str.map())