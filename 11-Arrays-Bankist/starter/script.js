'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Adding the rows of every transaction in the div box
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">[${
      i + 1
    }] ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// showing total balance on the webpage
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0); // calculating the balance of the movement
  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1.movements);

// creating usernames
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(_name => _name[0])
      .join('');
  });
};

createUsernames(accounts);

// console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// forEach array method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// const testData = [1, 2, 3];
// let sum = 0;

// testData.forEach(function (value, index, array) {
//   sum += value;
// });

// console.log(sum);

/////////////////////////////////////////////////

/////////////////////////////////////////////////

// forEach with Maps and Sets

// Maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Sets

// console.log(`-----SETS-----`);

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // The slice method?
// console.log(arr.slice(2)); // OUTPUT: [c, d, e]
// console.log(arr.slice(2, 4)); // OUTPUT: [c, d]
// console.log(arr.slice(-2)); // OUTPUT: [d, e]
// console.log(arr.slice(-1)); // OUTPUT: [e]
// console.log(arr.slice(1, -2)); // OUTPUT: [b, c]
// console.log(arr.slice()); // OUTPUT: [a, b, c, d, e] -- SHALLOW COPY.

// // The splice method?
// // console.log(arr.splice(2)); // output: [c, d, e]
// // console.log(arr); // output [a, b] (because we used the splice method avaialble to take out c, d, and e)

// // arr.splice(-1);
// // arr.splice(1, 2);
// // console.log(arr);

// // reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());

// // concat method
// const arr3 = ['f', 'g', 'h', 'i', 'j'];
// const letters = arr.concat(arr3);
// console.log(letters);

// // the join method
// console.log(arr.join('-'));

// const arr = [23, 11, 64];
// console.log(arr.at(0));

// console.log(arr.at(-1));

// console.log('yousef'.at(0)); // returns 'y'
// console.log('yousef'.at(-1)); // returns 'f'

// const juliaData1 = [3, 5, 2, 12, 7];
// const kateData1 = [4, 1, 15, 8, 3];

// const juliaData2 = [9, 16, 6, 8, 3];
// const kateData2 = [10, 5, 6, 1, 4];

// const checkDogs = function (jData, kData) {
//   const jDataMutated = [...jData].slice(1, -2);

//   const dogs = [...jDataMutated, ...kData];
//   console.log(dogs);

//   dogs.forEach(function (age, i) {
//     const adultOrPuppy =
//       age < 3 ? 'still a puppy 🐶' : `an adult, and is ${age} years old`;
//     console.log(`Dog number ${i + 1} is ${adultOrPuppy}`);
//   });
// };

// console.log(`---TEST DATA 1---`);
// checkDogs(juliaData1, kateData1);
// console.log(`---TEST DATA 2---`);
// checkDogs(juliaData2, kateData2);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUSD = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return 23;
// // });

// const movementsUSD = movements.map(mov => mov * eurToUSD);
// console.log(movementsUSD);

// const movementsDesc = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });

// console.log(movementsDesc);

// The filter method:
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);
// const withdrawls = movements.filter(mov => mov < 0);

// // const deposits = movements.filter(function (mov) {
// //   return mov > 0;
// // });

// console.log(deposits);
// console.log(withdrawls);

// the reduce method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// accumulator is like a snowball
// const balance = movements.reduce(function (accumulator, value, index, array) {
//   return accumulator + value;
// }, 0);

// const balance = movements.reduce((acc, val) => acc + val, 0);

// console.log(balance);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const maxValue = movements.reduce(
//   (acc, val) => (acc < val ? val : acc),
//   movements[0]
// );

// console.log(maxValue);

// const calcAverageHumanAge = function (data) {
//   const humanYearsArray = data.map(dogAge =>
//     dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
//   );

//   const adultDogsHumanYears = humanYearsArray.filter(age => age >= 18);

//   const averageHumanAge = adultDogsHumanYears.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   console.log(humanYearsArray);
//   console.log(adultDogsHumanYears);
//   console.log(averageHumanAge);
//   return averageHumanAge;
// };

// const codeChallengeTwoTestData1 = [5, 2, 4, 1, 15, 8, 3];
// const codeChallengeTwoTestData2 = [16, 6, 10, 5, 6, 1, 4];

// console.log(calcAverageHumanAge(codeChallengeTwoTestData1));
// console.log(calcAverageHumanAge(codeChallengeTwoTestData2));
