let d;

// Lấy ngày giờ hôm nay
d = new Date();

// Đặt thành một chuỗi
d = d.toString();

// Lấy một ngày cụ thể
// Quan trọng: tháng dựa trên 0, vì vậy 0 là tháng 1 và 11 là tháng 12
d = new Date(2021, 0, 10, 12, 30, 0);

// Truyền vào một chuỗi
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Lấy dấu thời gian hiện tại
d = Date.now();

// Lấy dấu thời gian của một ngày cụ thể
d = new Date();
d = d.getTime();
d = d.valueOf();

// Tạo ngày từ dấu thời gian
d = new Date(1666962049745);

// Chuyển đổi từ mili giây sang giây
d = Math.floor(Date.now() / 1000);

console.log(d);