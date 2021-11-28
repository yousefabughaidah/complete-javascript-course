'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterInd, mainInd) {
    return [this.starterMenu[starterInd], this.mainMenu[mainInd]];
  },

  orderDelivery: function ({
    starterInd = 1,
    mainInd = 0,
    time = `14:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterInd]} and ${this.mainMenu[mainInd]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(`Your main ingredient is ${mainIng}`);
    console.log(`Your other ingredients are ${otherIngs}`);
    console.log(otherIngs);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const rest1 = {
  name: 'Capri',
  numOfGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Reem',
};

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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
console.log(`---- TASK 1 ----`);

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
console.log(`---- TASK 2 ----`);
const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
console.log(`---- TASK 3 ----`);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
console.log(`---- TASK 4 ----`);
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
console.log(`---- TASK 5 ----`);
const { team1, team2, x: draw } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
console.log(`---- TASK 6 ----`);

const printGoals = function (...playersWhoScored) {
  const totalGoals = playersWhoScored.length;
  console.log(totalGoals);
  console.log(
    `The players who scored are:${playersWhoScored} with ${totalGoals} goals!`
  );
};

printGoals(...game.scored);

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
console.log(`---- TASK 7 ----`);
// I TRIED AND FAILED LETS LEARN.
team1 < team2 && console.log('Team 1 is more likely to win.');
team2 < team1 && console.log('Team 2 is more likely to win.');

// Here's a better way to do it:
console.log(
  `The winner is ${
    (team1 < team2 && game.team1) || (team2 < team1 && game.team2)
  }`
);
