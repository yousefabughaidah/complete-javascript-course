'use strict';

// Default parameters
// const bookings = [];

// const createBooking = function (flightNo, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNo,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 1000);

// How Passing Arugments works: Values vs Reference;

// const flight = 'LH234';
// const yousef = {
//   name: 'Yousef Abu Ghaidah',
//   passport: 2394823084,
// };

// const checkin = function (flightNo, passenger) {
//   flightNo = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 2394823084) {
//     alert('Checked in!');
//   } else {
//     alert('Worng passport!');
//   }
// };

// checkin(flight, yousef);
// console.log(flight);
// console.log(yousef);

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // The higher-order function (it takes in a function)
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // An example of a callback function I just made up

// const addNumbers = function (n1, n2) {
//   return n1 + n2;
// };

// const subtractNumbers = function (n1, n2) {
//   return n1 - n2;
// };

// const calculateNumbers = function (fn, n1, n2) {
//   console.log(`You are using the ${fn.name} function to do this`);
//   return fn(n1, n2);
// };

// console.log(calculateNumbers(addNumbers, 2, 2));
// console.log(calculateNumbers(subtractNumbers, 6, 3));

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Yousef');
// greeterHey('Reem');

// const greet = greeting => name => console.log(`${greeting} ${name}`);
// greet('Hey')('Yousef');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} with flight num ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
//   },
// };

// lufthansa.book(239, 'Yousef Abu Ghaidah');
// lufthansa.book(635, 'Mike Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const qatarAirways = {
//   airline: 'Qatar Airways',
//   iataCode: 'QA',
//   bookings: [],
// };

// const book = lufthansa.book;

// // The bind method
// const bookEW = book.bind(eurowings);
// bookEW(23, 'Steven Williams');

// const bookQA = book.bind(qatarAirways);
// bookQA(2338, 'Faisal Al Shimmeri');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jason Strato');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(1000));

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const portugalTax = addTax(0.23);
// const ukTax = addTax(0.16);
// console.log(portugalTax(1000));
// console.log(ukTax(1000));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const q = this.question;
//     const o = this.options.join('\n');
//     const msg = `${q}\n${o}\n(Write option number)`;
//     const userAnswer = Number(prompt(msg));

//     // Check to see if the answer is valid, if not ask the prompt to do the same thing
//     if (userAnswer >= 0 && userAnswer <= this.options.length - 1) {
//       this.answers[userAnswer]++;
//     } else {
//       alert(
//         `Your answer is invalid. Please pick a number between 0 and ${this.options.length}`
//       );
//     }
//     this.displayResults();
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${[this.answers.join(', ')]}`);
//     }
//   },
// };

// const pollBtn = document.querySelector('.poll');
// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// // bonus:

// const testData1 = [5, 2, 3];
// const testData2 = [1, 5, 3, 9, 6, 1];

// const displayTestDataAnswers = (obj, type) =>
//   poll.displayResults.bind({ answers: obj })(type);

// // all we did here was create a function that binded to a newly created answers object, and pass in the 'type' argument. This is to avoid copying and pasting a brand new function just for some new data.

// displayTestDataAnswers(testData1, 'string');
// displayTestDataAnswers(testData2);

// To make the runOnce function actually run once and only once, we do this:
// (function () {
//   console.log('This will never run again!');
// })();

// (() => console.log('This arrow function will never run again'))();

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds.`);
// };

// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.addEventListener('click', function () {
    header.style.color = 'blue';
    console.log('you clicked me!');
  });
})();

// why did this work?
// - closure is the reason why it works
// - this iife is now gone when it executed, but the function is still attached to the body element. It's in the 'backpack.'
// - so because it's attached to the body element, javascript is still waiting for a click to happen
