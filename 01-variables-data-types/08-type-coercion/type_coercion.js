let x;

// Bị ép thành một chuỗi
x = 5 + '5';

x = 5 + Number('5');

// Bị ép buộc vào một số
x = 5 * '5';

// null bị ép về 0 vì nó là giá trị `falsy`
x = 5 + null;

x = Number(null);

x = Number(true);
x = Number(false);

// true bị ép buộc về 1
x = 5 + true;

// false bị ép về 0 (falsy)
x = 5 + false;

// Không xác định bị ép về 0 (giả)
x = 5 + undefined;

console.log(x, typeof x);