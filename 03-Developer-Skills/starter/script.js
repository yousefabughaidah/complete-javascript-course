// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/* ---------------------------- START OF COMMENT BLANKET


const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  // 1 - detect if there's a string in the array, and if there is, remove it.
  // we should use a for loop and an if-else statement for this:
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === "string") {
      temps.splice(i, 1);
    }
  }

  // 2 - We can safely find the max and min now, and then return the amplitude
  const maxTemp = Math.max(...temps);
  const minTemp = Math.min(...temps);
  const amp = maxTemp - minTemp;

  return amp;
};

console.log(calcTempAmplitude(temperatures), "hi", "hello");

---------------------------------- END OF COMMENT BLANKET */

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    // first, create the fc placeholder. The message starts with "... " so we can start with that
    let fc = '... ';

    // now we can create a for loop. The point of this is to get (a) the day, (b) the temp (c) a placeholder message for every temperature and (d) add that placeholder message into the 'fc' we created.
    for (let i = 0; i < arr.length; i++) {
        const day = i + 1;
        const temp = arr[i];
        const msg = ` ${temp}ºC in ${day} ${day === 1 ? 'day' : 'days'} ...`;
        fc += msg;
    }

    // now that we have everything, we can simply return the fc. ezpz.
    return fc;
};

console.log(printForecast(arr1));
console.log(printForecast(arr2));
