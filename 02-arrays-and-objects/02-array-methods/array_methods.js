let x;

const arr = [28, 38, 44, 29, 109];

// push() - Đẩy một giá trị vào cuối mảng
arr.push(100);

// pop() - Bỏ giá trị cuối cùng
arr.pop();

// unshift() - Thêm giá trị vào đầu mảng
arr.unshift(99);

// shift() - Xóa giá trị đầu tiên
arr.shift();

// Reverse() - Đảo ngược một mảng
arr.reverse();

// bao gồm() - Kiểm tra xem có gì trong mảng không
x = arr.includes(445);

// indexOf() - Trả về chỉ mục của kết quả khớp đầu tiên
x = arr.indexOf(28);

// Trả về mảng dưới dạng chuỗi
x = arr.toString();
x = arr.join();

// slice() trả về các phần tử đã chọn trong một mảng, dưới dạng một mảng mới. Slice lấy chỉ mục của phần tử đầu tiên và chỉ mục của phần tử cuối cùng được đưa vào mảng mới.
x = arr.slice(1, 4);

// splice() hoạt động giống như slice() ngoại trừ việc nó lấy chỉ mục của phần tử đầu tiên và số phần tử sau đó làm đối số thứ hai. nó cũng làm thay đổi mảng ban đầu trong đó slice() không
x = arr.splice(1, 4);

// Xóa một phần tử/giá trị - Phần sau đây sẽ thay đổi mảng ban đầu bằng cách loại bỏ phần tử có chỉ số là 4. x sẽ bằng một mảng mới có giá trị được lấy ra đó.
x = arr.splice(4, 1);

// Phương thức xâu chuỗi - Một số phương thức có thể được xâu chuỗi tùy thuộc vào giá trị trả về.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);