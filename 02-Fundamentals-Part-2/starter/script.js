/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive!`)

const interface = 'Audio'

// Let's talk about functions!

// Declaring the function
function logger() {
    console.log('My name is Yousef!');
}

// calling, running or invoking the function
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

// assigning the function to a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

// printing it to console directly
console.log(fruitProcessor(5, 0));

const appleAndOrangeJuice = fruitProcessor(2, 4);
console.log(appleAndOrangeJuice);


THIS IS ANOTHER TEST @ 3:47 PM
THIS IS ANOTHER TEST @ 3:49 PM
THIS IS A THIRD AND FINAL TEST @ 7:34 PM


// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);


// Let's talk about Arrow Functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement
}

console.log(yearsUntilRetirement(1991))

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `Hey ${firstName}. You have ${retirement} years until you have to retire.`
}

console.log(yearsUntilRetirement2(birthYear = 1991, firstName = 'Yousef'))

// A machine that cuts fruit into 4 pieces (no matter what the fruit is)
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice was made with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`
    return juice
}

console.log(fruitProcessor(2, 3))
CLOSE OFF HERE ---------------------------------------------------------------------- */

// ASSIGNMENT!
// First, create an arrow function called 'calcAverage' to calculate the average of 3 scores.
const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

// 2nd, use the function to calculate the average for both teams
let dolphinsAverageScore, koalasAverageScore; // we'll input the numbers later

// create a function called 'checkWinner' that takes the average score of each team as parameters, and then logs the winner to the console, together with the victory points
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win! (Dolphins: ${avgDolphins} vs Koalas: ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win! (Dolphins: ${avgDolphins} vs Koalas: ${avgKoalas})`;
    } else {
        return `Nobody wins. (Dolphins: ${avgDolphins} vs Koalas: ${avgKoalas})`;
    }
}

// Test Data A
dolphinsAverageScore = calcAverage(44, 23, 71);
koalasAverageScore = calcAverage(65, 54, 49);
console.log(checkWinner(dolphinsAverageScore, koalasAverageScore));

// Test Data B
dolphinsAverageScore = calcAverage(85, 54, 71);
koalasAverageScore = calcAverage(23, 34, 27);
console.log(checkWinner(dolphinsAverageScore, koalasAverageScore));
