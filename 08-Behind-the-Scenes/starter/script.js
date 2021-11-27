'use strict';

/* ----- STARTING CODE
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}. you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, you're a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str);
    console.log(millenial);
  }

  printAge();

  return age;
}

const firstName = 'Yousef';
calcAge(1991);

console.log(me);
console.log(job);
console.log(year);

var me = 'Yousef';
let job = 'designer';
const year = 1989;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;


// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);
// calcAgeArrow();

// method borrowing?

const yousef = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};

const reem = {
  year: 1998,
};

console.log(reem);
reem.calcAge = yousef.calcAge;
console.log(reem);

const f = yousef.calcAge;
console.log(f);


const yousef = {
  firstName: 'Yousef',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

yousef.greet();
yousef.calcAge();



const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

let age = 30;
let oldAge = age;
age += 1;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Yousef',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(`Friend: ${friend.age}`);
console.log(`Me: ${me.age}`);
------ ENDING CODE */

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log(`Before marriage: ${jessica.lastName}`);
console.log(`After marriage: ${marriedJessica.lastName}`);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log(`Before marriage: ${jessica2.lastName}`);
console.log(`After marriage: ${jessicaCopy.lastName}`);
