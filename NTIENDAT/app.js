

// const library = [
//     {
//       title: 'The Road Ahead',
//       author: 'Bill Gates',
//       status: {
//         own: true,
//         reading: false,
//         read: false,
//       },
//     },
//     {
//       title: 'Steve Jobs',
//       author: 'Walter Isaacson',
//       status: {
//         own: true,
//         reading: false,
//         read: false,
//       },
//     },
//     {
//       title: 'Mockingjay',
//       author: 'Suzanne Collins',
//       status: {
//         own: true,
//         reading: false,
//         read: false,
//       },
//     },
//   ];
  
//   // Step 2
//   library[0].status.read = true;
//   library[1].status.read = true;
//   library[2].status.read = true;
  
//   // Step 3
//   const { title: firstBook } = library[0];
//   const firstBook1 = library[0].title;

  

//   // Step 4
//   const libraryJSON = JSON.stringify(library);
// const paseJSON = JSON.parse(libraryJSON);
// console.log(paseJSON);
  

// function sayHello(name = "Dat"){
//     console.log('Xin chao ${name}');
// }
// sayHello();

// const add = (a, b) => {
//     return a + b;
//   };
  
//   // Implicit Return
//   const subtract = (a, b) => a - b;
  
//   // Can leave off () with a single param
//   const double = (a) => a * 2;
  
//   // Returning an object
//   const createObj = () => ({
//     name: 'Brad',
//   });
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   numbers.forEach(function (n) {
//     console.log(n);
//   });
  
//   // Arrow function in a callback
//   numbers.forEach((n) => console.log(n));
  
//   console.log(add(1, 2));
//   console.log(subtract(10, 5));
//   console.log(double(10));
//   console.log(createObj());

// const age = 17;

// // Using an if statement
// if (age >= 18) {
//   console.log('You can vote!');
// } else {
//   console.log('You can not vote');
// }

// // Using a ternary operator
// age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// // Assigning a conditional value to a variable
// const canVote = age >= 18 ? true : false;
// const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

// console.log(canVote);
// console.log(canVote2);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// // Same with forEach
// const doubledNumbers2 = [];
// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 2);
// });

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];


// const companyNames = companies.map((company) => company.name);

// const newCompany= companies.map((company) => {
//   return {
//     title: `Company $company.name`
//   };
// });
// console.log(newCompany)

// Shopping cart example (objects)
// const cart = [
//   { id: 1, name: 'Product 1', price: 130 },
//   { id: 2, name: 'Product 2', price: 150 },
//   { id: 3, name: 'Product 3', price: 200 },
// ];

// const sum_total = cart.reduce(function (total, product) {
//   return total + product.price;
// }, 0);

// console.log(sum_total);


// const tag = document.getElementById("main");
// console.log(tag);

// tag.innerHTML = ('<a style="color: blue;">Link</a>')
// const listItems = document.querySelectorAll('.item');

// // Access elements by index
// console.log(listItems);
// const createObj = document.createElement("div");
// createObj.innerHTML = '<button class="remove-item btn-link text-red">Submit</button>'
// createObj.classList.add("class-1")
// const title = document.getElementById("title");
// title.appendChild(createObj);
// window.addEventListener("DOMContentLoaded", init)
// function init(){
//   console.log("done")
// }

// window.addEventListener('resize', () => {
//   document.querySelector(
//     'h1'
//   ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
// });


window.addEventListener('DOMContentLoaded', init);

function init() {
  renderProductList();
}

function renderProductList() {
  // Lay Data
  const productList = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    }
  ];
  // Create Element
  const productListElm = document.getElementById('product-list');
  const div = document.createElement('div');
  div.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-6');
  // InterHtml
  div.innerHTML = ` ${productList
    .map((product) => {
      return `
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" 
        src=${product.image}
        alt=${product.title} />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              ${product.title}
            </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
`;
    })
    .join('')}
  `;
  // Insert Dom
  productListElm.appendChild(div);
}