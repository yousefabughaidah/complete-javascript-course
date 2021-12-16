'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0); // it's zero based, so we're adding 1
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Current date
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0); // it's zero based, so we're adding 1
    const year = now.getFullYear();
    const hour = now.getHours();
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(Math.sqrt(25)); // calculating square root of a number
// console.log(8 ** (1 / 3)); // calculating the cubic root of a number

// console.log(Math.max(5, 18, 23, 11, 2)); // find the max number
// console.log(Math.min(5, 18, 23, 11, 2)); // find the min number

// console.log(Math.PI * Number.parseFloat('10px') ** 2); // calculating the area of this circle with this radius

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1)) + min;

// console.log(randomInt(-2, -1));

// console.log(Math.trunc(23.3));

// console.log('math.round on 23.9', Math.round(23.9)); // output: 24
// console.log('math.round on 23.2', Math.round(23.2)); // output: 23
// console.log('math.round on 23.5', Math.round(23.5)); // output: 24

// console.log('math.ceil on 23.3', Math.ceil(23.3)); // output: 24
// console.log('math.ceil on 23.9', Math.ceil(23.9)); // output: 24

// console.log('math.floor on 23.3', Math.floor(23.3)); // output: 23
// console.log('math.floor on 23.9', Math.floor(23.9)); // output: 23

// console.log('math.trunc on -23.3', Math.trunc(-23.3)); // output: -23
// console.log('math.floor on -23.3', Math.floor(-23.3)); // output: -24

// console.log((2.7).toFixed(0)); // output: 3 (STRING)
// console.log((2.7).toFixed(3)); // output: 2.700 (STRING)
// console.log((2.345).toFixed(2)); // output: 2.35 (STRING)
// console.log(+(2.345).toFixed(2)); // output: 2.35 (NUMBER)

// console.log(5 % 2);
// console.log(8 % 3);

// console.log(6 % 2);
// console.log(7 % 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(4)); // output: true
// console.log(isEven(5)); // output: false

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     // if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

// const now = new Date();
// console.log(now);

// console.log(new Date('december 17 2021'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days, 24 hours, 60 minutes, 60 seconds, 1000 miliseconds

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDay());
// console.log(future.getHours()); // output: 15
// console.log(future.getMinutes()); // output: 23
// console.log(future.getSeconds()); // output: 0
// console.log(future.toISOString()); // output: 2037-11-19T12:23:00.000Z
// console.log(future.getTime()); // output: 2142246180000 (miliseconds since jan 1 1970)
// console.log(new Date(2142246180000));

// console.log(Date.now()); //output: 1639673365387 (miliseconds since jan 1 1970)
// future.setFullYear(2040);
// console.log(future);
