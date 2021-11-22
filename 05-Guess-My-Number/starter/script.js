'use strict';

// First, get a random number between 1 and 20.

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const getRandomNumber = function () {
    return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = getRandomNumber();
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // If there is no guess from the user
    if (!guess) {
        displayMessage('🚫 No number!');

        // If the user guesses the number
    } else if (guess === secretNumber) {
        displayMessage('🤲 You got it!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        // if the score is greater than the high score, change it.
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // if the user guesses a number other than the random number
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? '📈 Too high.' : '📉 Too low.'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game 😭');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Game reset functionality ✅
document.querySelector('.again').addEventListener('click', function () {
    // restore initial values of the score and secretNumber variables ✅
    score = 20;
    secretNumber = getRandomNumber();
    console.log(secretNumber);

    // restore the initial conditions of the message, number, score and guess input field ✅
    displayMessage('Start guessing...'); // message reset
    document.querySelector('.number').textContent = '?'; // number reset
    document.querySelector('.score').textContent = score; // score reset
    document.querySelector('.guess').value = ''; // input field reset

    // restore the background color and number width (15rem)
    document.querySelector('body').style.backgroundColor = '#222'; // background color ✅
    document.querySelector('.number').style.width = '15rem'; // number width back to 15rem
});
