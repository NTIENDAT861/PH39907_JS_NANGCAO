// Các cách khai báo biến : `var`, `let`, & `const`

let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(age);

// Quy ước đặt tên
// - Chỉ chữ cái , số , dấu gạch dưới và ký hiệu đô la
// - Không thể bắt đầu bằng số

// Định dạng nhiều từ
// firstName = camelCase(Kiểu đặt biến rắn)
// first_name = gạch dưới
// FirstName = PascalCase(Kiểu đặt biến lạc đà)
// firstname = chữ thường

// Chúng ta có thể gán lại các biến `let`. Nếu bạn thay đổi `age` thành `const`, bạn sẽ gặp lỗi
age = 31;
console.log(age);

// Với let, chúng ta có thể khai báo một giá trị mà không cần gán giá trị
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// Chúng ta không thể gán lại biến const
// x = 200 // Sẽ báo lỗi

// Chúng ta vẫn có thể thao tác với mảng và đối tượng bằng const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: 'Brad',
};
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Khai báo nhiều giá trị cùng lúc
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);