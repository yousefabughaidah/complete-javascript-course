'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const hours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  hours,

  order(starterInd, mainInd) {
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

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, name] of game.scored.entries()) {
  const goalEvent = i + 1;
  console.log(`Goal ${goalEvent}: ${name} `);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const allOddsValues = Object.values(game.odds);
console.log(allOddsValues);

let sum = 0;
for (const n of allOddsValues) sum += n;
const avg = sum / allOddsValues.length;
console.log(`The average of all the odds is ${avg}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5

const allOddsEntries = Object.entries(game.odds);

for (const [team, odd] of allOddsEntries) {
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString} ${odd}`);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

const scorers = {};
for (const player of game.scored) {
  scorers[player] = scorers[player] ? scorers[player] + 1 : 1; // does scorers[scorer] exist? if so, take the number and add 1. If not, keep set a default value of 1.
}

console.log(scorers);
