// Log số
console.log(40);

// Log chuỗi kí tự
console.log('Hello World');

// Log nhiều biến ,gía trị 
console.log(20, 'Hello', true);

// Log ra giá trị của một biến
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert','dòng này bị lỗi');
console.warn('Warning');

// Log đối tượng trong bảng
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Nhóm lệnh console
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// thêm thuộc tính styles vào log 
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);




