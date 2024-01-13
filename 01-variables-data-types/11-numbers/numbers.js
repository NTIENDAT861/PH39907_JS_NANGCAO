let x;

const num = new Number(5);

// toString() - trả về một chuỗi biểu diễn số
x = num.toString();
// Để lấy độ dài
x = num.toString().length;

// toFixed() - trả về một chuỗi biểu diễn số với số thập phân được chỉ định
x = num.toFixed(2);

// toPrecision() - trả về một số có độ dài được chỉ định
x = num.toPrecision(3);

// toExentialial() - chuyển đổi một số thành ký hiệu số mũ và trả về giá trị của nó dưới dạng chuỗi
x = num.toExponential(2);

// toLocaleString() - trả về một chuỗi biểu diễn số, sử dụng ngôn ngữ hiện tại
x = num.toLocaleString('en-US');

// valueOf - Nhận giá trị
x = num.valueOf();

// Bản thân đối tượng Number có một số thuộc tính và phương thức

// Số lớn nhất và nhỏ nhất có thể
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);