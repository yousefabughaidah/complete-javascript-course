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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">[${
      i + 1
    }] ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// showing total balance on the webpage
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0); // calculating the balance of the movement
  labelBalance.textContent = `${account.balance}€`;
};

// showing movement in, movement out, and any interest
const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100)) // 1.2% interest for every deposit
    .filter(int => int >= 1) // only deposit interest if its more than 1 euro
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

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

const updateUI = function (account) {
  displayMovements(account.movements); // display all transactions
  calcDisplaySummary(account); // display summary info
  calcDisplayBalance(account); // displays the total balance
};

const clearFields = function (...fields) {
  fields.forEach(field => {
    field.value = '';
    field.blur();
  });
};

// Event handler: login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // prevents the event from executing its default function (which is to refresh the page, since this is a form)

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;

    // clear the input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    // display and calculate the balance, summary, and movements.

    updateUI(currentAccount);
  }
});

// Event handler: transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  clearFields(inputTransferAmount, inputTransferTo);

  // check to see if transfer can be initiated
  if (
    amount > 0 && // if the amount is greater than zero
    currentAccount.balance >= amount && // if the current account balance is greater than or equal to the amount being transferred
    receiverAccount?.username !== currentAccount.username && // if the receiving account is different from the current account
    receiverAccount // if the receiving account exists (true/flase)
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount); // updates the UI
  } else {
    console.log(`Transfer is NOT valid`);
  }
});

// Event handler: get a loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);

  // bank will grant a loan IF there is at least 1 deposit with at least 10% of the requested loan amount.
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= 0.1 * loanAmount)
  ) {
    console.log(`You can get a loan!`);
    // add positive movement to the end user.
    currentAccount.movements.push(loanAmount);
    // update the UI
    updateUI(currentAccount);
    // clear the fields!
    clearFields(inputLoanAmount);
  } else {
    console.log(`Sorry. No loan for you.`);
  }
});

// Event handler: closing account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // check to see if the user is correct, as well as the pin:
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // delete the account
    accounts.splice(index, 1);

    // hide the ui
    containerApp.style.opacity = 0;
  } else {
    console.log(`We can NOT delete this account :(`);
  }
  clearFields(inputCloseUsername, inputClosePin);
});

// event handler : sort button
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter((mov, i, arr) => mov < 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// const calcAverageHumanAge = function (data) {
//   const humanYearsArray = data.map(dogAge =>
//     dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
//   );

//   const adultDogsHumanYears = humanYearsArray.filter(age => age >= 18);

//   const averageHumanAge = adultDogsHumanYears.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

// const calcAverageHumanAge = function (data) {
//   const averageHumanAge = data
//     .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, sumAge, i, arr) => acc + sumAge / arr.length, 0);
//   console.log(averageHumanAge);
//   return averageHumanAge;
// };

// const codeChallengeTwoTestData1 = [5, 2, 4, 1, 15, 8, 3];
// const codeChallengeTwoTestData2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = data =>
//   data
//     .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, sumAge, i, arr) => acc + sumAge / arr.length, 0);

// console.log(calcAverageHumanAge(codeChallengeTwoTestData1));
// console.log(calcAverageHumanAge(codeChallengeTwoTestData2));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawl = movements.find(mov => mov < 0);
// console.log(firstWithdrawl);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat(1);
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.sort((a, b) => b - a);
// console.log(movements);

// const x = new Array(7); // creates an array with 7 empty slots.
// x.fill(1, 3, 5);
// console.log(x);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.fill(23, 4, 6);
// console.log(arr);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// console.log(z);

// const random = Array.from({ length: 10 }, () =>
//   Math.floor(Math.random() * 6 + 1)
// );
// console.log(random);

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// // 1. finding the total value of all bank deposits
// const bankDeposits = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, deposit) => sum + deposit, 0);
// console.log(bankDeposits);

// // 2. finding the total number of deposits over 1000
// const depositsOver1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// console.log(depositsOver1000);

// // 3. create an object to create a sum of deposits and withdrawls
// const depositsObject = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawls: 0 }
//   );

// const depositObject2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(depositsObject);
// console.log(depositObject2);

// // 4. create a function to create a string to title case
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (!exceptions.includes(word) ? capitalize(word) : word))
//     .join(' ');
//   console.log(capitalize(titleCase));
// };

// const title1 = 'this is a nice title';
// const title2 = 'this is a LONG title but not too long';
// const title3 = 'and here is another title with an EXAMPLE';

// convertTitleCase(title1);
// convertTitleCase(title2);
// convertTitleCase(title3);

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).


HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA: */

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
console.log(`----- QUESTION 1 -----`);
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
console.log(`----- QUESTION 2 -----`);
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
const sarahsDogTooMuch =
  sarahsDog.curFood > 1.1 * sarahsDog.recommendedFood && 'too much';
const sarahsDogTooLittle =
  sarahsDog.curFood < 0.9 * sarahsDog.recommendedFood && 'too little';

console.log(
  `Sarah's dog is eating ${sarahsDogTooMuch || sarahsDogTooLittle || 'enough'}`
);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
console.log(`----- QUESTION 3 -----`);
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`----- QUESTION 4 -----`);
const stringStatement = function (owners, statement) {
  const ownersString = owners.join(' and ');
  console.log(ownersString + statement);
};

stringStatement(ownersEatTooMuch, "'s dogs eat too much!");
stringStatement(ownersEatTooLittle, "'s dogs eat too little!");

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(`----- QUESTION 5 -----`);
const dogsEatingExact = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(dogsEatingExact);

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
console.log(`----- QUESTION 6 -----`);
const dogsEatingOkay = dogs.some(
  dog =>
    dog.curFood > 0.9 * dog.recommendedFood &&
    dog.curFood < 1.1 * dog.recommendedFood
);
console.log(dogsEatingOkay);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
console.log(`----- QUESTION 7 -----`);
const dogsEatingOkayArr = dogs.filter(
  dog =>
    dog.curFood > 0.9 * dog.recommendedFood &&
    dog.curFood < 1.1 * dog.recommendedFood
);

console.log(dogsEatingOkayArr);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (smaller number first) (keep in mind that the portions are inside the array's objects)
console.log(`----- QUESTION 8 -----`);
const dogsArraySorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsArraySorted);
