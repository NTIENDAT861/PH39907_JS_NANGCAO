

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
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});


