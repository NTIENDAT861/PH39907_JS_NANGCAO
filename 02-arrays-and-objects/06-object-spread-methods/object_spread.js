let x;

// Tạo đối tượng bằng cách sử dụng hàm tạo đối tượng
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

// Lồng ghép đối tượng
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Toán tử trải rộng
const obj3 = { ...obj1, ...obj2 };
// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);

// Mảng đối tượng
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name;

// Lấy mảng khóa đối tượng
x = Object.keys(todo);

// Lấy chiều dài của một đối tượng
x = Object.keys(todo).length;

// Lấy mảng giá trị đối tượng
x = Object.values(todo);

// Lấy mảng các cặp khóa/giá trị đối tượng
x = Object.entries(todo);

// Kiểm tra xem đối tượng có thuộc tính không
x = todo.hasOwnProperty('age');

console.log(x);