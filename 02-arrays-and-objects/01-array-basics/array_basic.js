let x;

// Mảng 
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Hàm tạo mảng
const fruits = new Array('apple', 'grape', 'orange');

// Lấy giá trị theo chỉ số
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

// length is not read-only
// fruits.length = 2;

fruits[3] = 'strawberry';

// Sử dụng độ dài làm chỉ mục sẽ luôn thêm vào cuối
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);