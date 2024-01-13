let x;

const name = 'John';
const age = 31;

// Nối
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Mẫu chữ
x = `Hello, my name is ${name} and I am ${age} years old`;

// Thuộc tính và phương thức chuỗi

// Tạo một "đối tượng chuỗi" (JS tự động thực hiện việc này khi sử dụng thuộc tính hoặc phương thức trên chuỗi nguyên thủy)
const s = new String('Hello World');

x = typeof s;

x = s.length;

// Truy cập giá trị bằng key
x = s[0];

// Hiển thị nguyên mẫu của đối tượng chuỗi. Hiển thị các thuộc tính và phương thức
x = s.__proto__;

// Thay đổi trường hợp
x = s.toUpperCase();
x = s.toLowerCase();

// charAt() - trả về ký tự tại chỉ mục đã chỉ định
x = s.charAt(0);

// indexOf - trả về chỉ mục của lần xuất hiện đầu tiên của một giá trị được chỉ định trong chuỗi
x = s.indexOf('d');

// substring() - tìm kiếm một chuỗi cho một giá trị được chỉ định
x = s.substring(2, 5);
x = s.substring(7);

// slice() - trích xuất một phần của chuỗi và trả về một chuỗi mới
x = s.slice(-11, -6);

// Trim() - xóa khoảng trắng ở đầu và cuối chuỗi
x = '         Hello World';
x = x.trim();

// thay thế() - thay thế tất cả các phiên bản của một chuỗi
x = s.replace('World', 'John');

// bao gồm() - trả về true nếu tìm thấy chuỗi
x = s.includes('Hell');

// valueOf() - trả về giá trị nguyên thủy của một biến
x = s.valueOf();

// tách() - trả về một mảng chuỗi
x = s.split('');

console.log(x);