'use strict';

// const hours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   hours,

//   order(starterInd, mainInd) {
//     return [this.starterMenu[starterInd], this.mainMenu[mainInd]];
//   },

//   orderDelivery: function ({
//     starterInd = 1,
//     mainInd = 0,
//     time = `14:00`,
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterInd]} and ${this.mainMenu[mainInd]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIng, ...otherIngs) {
//     console.log(`Your main ingredient is ${mainIng}`);
//     console.log(`Your other ingredients are ${otherIngs}`);
//     console.log(otherIngs);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // Looping over property names (or, keys)
// console.log(`====LOOPING OVER PROPERTY NAMES====`);

// const openingTimesProperties = Object.keys(restaurant.openingHours);

// console.log(openingTimesProperties);

// console.log(`We are open ${openingTimesProperties.length} days a week`);

// for (const day of openingTimesProperties) {
//   console.log(day);
// }

// opener = `We are open on: `;
// for (const day of openingTimesProperties) {
//   opener += `${day}, `;
// }

// console.log(opener);

// console.log(`====LOOPING OVER VALUES====`);
// const openingTimesValues = Object.values(restaurant.openingHours);

// console.log(openingTimesValues);

// console.log(`====LOOPING OVER ENTRIES====`);

// const openingTimesEntries = Object.entries(restaurant.openingHours);
// console.log(openingTimesEntries);

// for (const [key, { open, close }] of openingTimesEntries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// if (restaurant.openingHours.mon && restaurant.openingHours)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   let isOpen = restaurant.openingHours[day]?.open ?? 'closed';
//   isOpen =
//     isOpen !== 'closed' ? `We're open on ${day} at ${isOpen}` : `We're closed`;
//   console.log(isOpen);
// }

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; // gives the time when there is a day that the rest opens, otherwise returns closed
//   console.log(`On ${day}, we open at ${open}`);
// }

// //methods?
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // The method exists so we get ['Focaccia', 'Pasta']
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // The method does not exist.

// // arrays?
// const users = [
//   {
//     name: 'Yousef',
//     email: 'test@yousef.com',
//   },
// ];

// console.log(users[0]?.name ?? 'User array empty'); // only if name exists in the object within the array, return the name.
// const rest1 = {
//   name: 'Capri',
//   numOfGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Reem',
// };

// use the or operator to add numofguests property to the objects that don't have them
// console.log(rest1);
// console.log(rest2);

// // rest1.numOfGuests = rest1.numOfGuests || 10;
// // rest2.numOfGuests = rest2.numOfGuests || 10;

// // rest1.numOfGuests ||= 10;
// // rest2.numOfGuests ||= 10;

// // rest1.numOfGuests ??= 10;
// // rest2.numOfGuests ??= 10;

// rest1.owner &&= 'Anonymous';
// rest2.owner &&= 'Anonymous';

// console.log(rest1);
// console.log(rest2);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 3, [5, 6]];
// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// let [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// r = 3;
// console.log(p, q, r);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu);
// console.log(starters);

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// console.log(a, b);
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `Gondola Pallazo 3, 306`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   starterInd: 2,
//   mainInd: 2,
//   time: '22:30',
//   address: 'Gondola Pallazo 3',
// });

// restaurant.orderDelivery({
//   starterInd: 3,
//   address: 'Gondola Pallazo 3',
// });

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const goodArr = [1, 2, ...arr];
// console.log(goodArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'yousef';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const ingredients = [
//   prompt(`Let's make pasta! What's your first ingredient?`),
//   prompt(`Let's make pasta! What's your second ingredient?`),
//   prompt(`Let's make pasta! What's your third ingredient?`),
// ];

// const newRestaraunt = {
//   ...restaurant,
//   founder: 'yousef abu ghaidah',
//   established: 1923,
// };
// console.log(newRestaraunt);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Turquoise Cafe';
// console.log(restaurantCopy.name, restaurant.name);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// console.log(sat);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
//   return sum;
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];

// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}. ${el}`);
// }

// Coding Challenge #2 //

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

// console.log('----- OR OPERATOR -----');

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests2 = restaurant.numGuests || 10;

// console.log(guests1);
// console.log(guests2);

// console.log('----- AND OPERATOR -----');
// console.log(0 && 'Yousef');
// console.log(7 && 'Yousef');
// console.log('hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// const guests3 = restaurant.numGuests ?? 10;

// console.log(guests2);
// console.log(guests3);

// -----CODING CHALLENGE #1 -------

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:


TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [i, name] of game.scored.entries()) {
//   const goalEvent = i + 1;
//   console.log(`Goal ${goalEvent}: ${name} `);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// const allOddsValues = Object.values(game.odds);
// console.log(allOddsValues);

// let sum = 0;
// for (const n of allOddsValues) sum += n;
// const avg = sum / allOddsValues.length;
// console.log(`The average of all the odds is ${avg}`);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5

// const allOddsEntries = Object.entries(game.odds);

// for (const [team, odd] of allOddsEntries) {
//   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamString} ${odd}`);
// }

// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] = scorers[player] ? scorers[player] + 1 : 1; // does scorers[scorer] exist? if so, take the number and add 1. If not, keep set a default value of 1.
// }

// // console.log(scorers);
// // // 1. Create one player array for each team (variables 'players1' and 'players2')
// // console.log(`---- TASK 1 ----`);

// // const [players1, players2] = game.players;
// // console.log(players1);
// // console.log(players2);

// // // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // console.log(`---- TASK 2 ----`);
// // const [gk, ...fieldPlayers] = players1;

// // console.log(gk);
// // console.log(fieldPlayers);

// // // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// // console.log(`---- TASK 3 ----`);
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // console.log(`---- TASK 4 ----`);
// // const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(playersFinal);

// // // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // console.log(`---- TASK 5 ----`);
// // const { team1, team2, x: draw } = game.odds;
// // console.log(team1);
// // console.log(draw);
// // console.log(team2);

// // // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // console.log(`---- TASK 6 ----`);

// // const printGoals = function (...playersWhoScored) {
// //   const totalGoals = playersWhoScored.length;
// //   console.log(totalGoals);
// //   console.log(
// //     `The players who scored are:${playersWhoScored} with ${totalGoals} goals!`
// //   );
// // };

// printGoals(...game.scored);

// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// console.log(`---- TASK 7 ----`);
// // I TRIED AND FAILED LETS LEARN.
// team1 < team2 && console.log('Team 1 is more likely to win.');
// team2 < team1 && console.log('Team 2 is more likely to win.');

// // Here's a better way to do it:
// console.log(
//   `The winner is ${
//     (team1 < team2 && game.team1) || (team2 < team1 && game.team2)
//   }`
// );

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);

// console.log(new Set('Yousef'));

// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));

// orderSet.add('Garlic Bread');

// orderSet.delete('Risotto');

// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// console.log(staff);

// const staffSet = new Set(staff);
// console.log(staffSet);

// const staffUnique = [...staffSet];
// console.log(staffUnique);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closed!');

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // if the current time is greater than the open time, and lower than the closed time

// console.log(rest.has('categories'));

// rest.delete(2);
// console.log(rest);

// console.log(rest.size);

// rest.clear;

// const questionBank = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct! ✅'],
//   [false, 'Wrong! ❌'],
// ]);

// console.log(questionBank);

// const hoursMap = new Map(Object.entries(restaurant.hours));
// console.log(hoursMap);

// // Quiz App

// console.log(questionBank.get('question'));

// for (const [key, value] of questionBank) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const userInput = Number(prompt('Your answer?'));
// console.log(userInput);

// console.log(
//   userInput === questionBank.get('correct')
//     ? questionBank.get(true)
//     : questionBank.get(false)
// );

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).



GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// // We'll need to create a set for this.
// let events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// const time = [...gameEvents.keys()].at(-1);
// const avgEvent = time / gameEvents.size;
// console.log(`An event happened, on average, every ${avgEvent} minutes`);

// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// // [FIRST HALF] 17: ⚽️ GOAL

// for (const [min, event] of gameEvents) {
//   console.log(
//     `${min <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${min}: ${event}`
//   );
// }

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seatNo) {
//   // B and E are middle seats.
//   console.log(
//     `${seatNo} is${
//       seatNo.slice(-1) === 'B' || seatNo.slice(-1) === 'E' ? ' NOT' : ''
//     } a middle seat`
//   );
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'yOuSeF';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// // Comparing email?
// const email = 'hello@yousef.com';
// const loginEmail = '    hello@yousef.cOm  \n';

// const normalizedEmail = loginEmail.toLowerCase().trim();

// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// const plane = 'A320neo';
// console.log(plane.includes('A320'));

// console.log(plane.startsWith('A3'));

// console.log('a+very+nice+string'.split('+'));

// const username = 'Yousef Abughaidah';
// const [firstName, lastName] = username.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica ann smith davis';

// const capitalizeName = function (name) {
//   const nameArray = name.split(' ');
//   const namesUpper = [];

//   for (const n of nameArray) {
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(namesUpper.join(' '));
// };

// capitalizeName('yousef abu ghaidah');
// capitalizeName('jessica ann smith davis');

// const msg = 'Go to gate 23!';
// console.log(msg.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = function (n) {
//   const strN = n + ''; // this will turn whatever you want into a string
//   const lastFourDigits = strN.slice(-4);
//   const maskedNumber = lastFourDigits.padStart(strN.length, '*');
//   console.log(maskedNumber);
// };

// maskCreditCard(3784329238410232);

// const message = 'Bad weather... All departures are delayed. ';
// console.log(message.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes n line. ${'✈️'.repeat(n)}`);
// };

// planesInLine(1);
// planesInLine(3);
// planesInLine(5);

/* The test data
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure */

// The objects
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Declaring the objects for reference
const btn = document.querySelector('button');
const textArea = document.querySelector('textarea');

// The function
const camelCaseFunction = function () {
  const text = document.querySelector('textarea').value;

  // put every line into an array to get 5 different elements
  const textArray = text.split('\n');

  // create a for loop that goes through the array and edit the text as required.
  for (const [ind, str] of textArray.entries()) {
    // remove the spaces and padding + make everything lower case + remove everything at the underscore level
    const fixedStr = str.trim().toLowerCase().split('_');

    // apply camel casing by adding the FIRST word unedited (since its lower case) and making the first letter of every other word capitalized, then adding it to the new string
    let newWord = '';
    for (let [i, x] of fixedStr.entries()) {
      i !== 0 ? (x = x.replace(x[0], x[0].toUpperCase())) : null;
      newWord += x;
    }

    // apply the padding and the check marks to the new string
    newWord = newWord.padEnd(20, ' ') + '✅'.repeat(ind + 1);
    console.log(newWord);
  }
};

// The listener
btn.addEventListener('click', camelCaseFunction);
