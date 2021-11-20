'use strict';
/*

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

// Introduction to arrays
// This is how you usually do it
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']
friends[2] = "Yousef"
console.log(friends)

const firstName = 'Yousef';
const yousef = [firstName, "Abu Ghaidah", 2021 - 1989, friends];
console.log(yousef);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages);


// const age1 = calcAge(years[0]); // The first one in the array
// const age2 = calcAge(years[1]); // The second one in the array
// const age3 = calcAge(years[years.length - 1]); // The third one in the array


const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push("Patrice");
console.log(friends.indexOf("Steven"))

console.log(friends.includes("Michael"));
console.log(friends.includes("Reem"));

// CODING CHALLENGE!

// write a function called calcTip that takes the bill amount as input and follows the rules (15% for 50 to 300, 20% for anything else)
const calcTip = billAmount => {
    if (billAmount >= 50 && billAmount <= 300) {
        return billAmount * 0.15;
    } else {
        return billAmount * 0.2;
    }
}

console.log(calcTip(100)); // this is a test to see if the function works

// create an array called 'bills' that includes the test data
const bills = [125, 555, 44];

// create an array called 'tips' that calculates the tips for each bill in the 'bills' array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips);

// create an array called 'total' which contains the total values (bill + tip)
const calcTotal = (billAmount, tipAmount) => billAmount + tipAmount;
const total = [calcTotal(bills[0], tips[0]), calcTotal(bills[1], tips[1]), calcTotal(bills[2], tips[2])];
console.log(total);


// Let's talk about objects now :D

const yousefArray = [
    'Yousef',
    'Abu Ghaidah',
    2037 - 1991,
    'Designer'
    ['Reem', 'Emad', 'Rima']
];

const yousef = {
    firstName: 'Yousef',
    lastName: 'Abu Ghaidah',
    age: 2037 - 1989,
    job: 'Designer',
    family: ['Reem', 'Emad', 'Rima'],
};

const nameKey = 'Name';
console.log(yousef['first' + nameKey]);

const interestedIn = prompt('What do you want to know about Yousef? Choose between firstName, lastName, age, job, and friends?')
console.log(interestedIn);

if (yousef[interestedIn]) {
    console.log(yousef[interestedIn]);
} else {
    console.log('Wrong request. What do you want to know about Yousef? Choose between firstName, lastName, age, job, and friends?')
}
yousef.location = 'Doha';
// or
yousef[twitter] = '@YousefAbuGhaidah'

console.log(yousef)


const yousef = {
    firstName: 'Yousef',
    lastName: 'Abu Ghaidah',
    age: 2037 - 1989,
    job: 'Designer',
    family: ['Reem', 'Emad', 'Rima'],
};

// "Yousef has 3 friends, and his best friend is called Reem"

const msg = `${yousef.firstName} has ${yousef.family.length} friends, and his best friend is called ${yousef.family[0]}`;
console.log(msg);


const yousef = {
    firstName: 'Yousef',
    lastName: 'Abu Ghaidah',
    birthYear: 1989,
    job: 'Designer',
    family: ['Reem', 'Emad', 'Rima'],
    hasDriversLicense: false,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.hasDriversLicense ? "has a" : "does not have a"} driver's license`
    },
};

console.log(yousef.getSummary())

// challenge
// "Yousef is a 32 year old teacher. and he has a driver's license."


const markData = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    },
};

const johnData = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    },
};

console.log(markData.calcBMI() > johnData.calcBMI() ? `Mark's BMI (${markData.bmi}) is higher than John's BMI (${johnData.bmi})` : `Johns's BMI (${johnData.bmi}) is higher than Mark's BMI (${markData.bmi})`);

CLOSE OFF HERE ---------------------------------------------------------------------- */
