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
------ ENDING CODE */
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
