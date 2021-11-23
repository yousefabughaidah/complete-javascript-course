'use strict';

// constants
const playerOneScoreElement = document.getElementById('score--0');
const playerTwoScooreElement = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const rollDiceBtnElement = document.querySelector('.btn--roll');
let pOneScore = 0;
let pTwoScore = 0;

// functions

const rollDice = function () {
    // generate random number from 1 to 6
    const min = Math.ceil(1);
    const max = Math.floor(6);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // show the dice picture corresponding to the random number
    const dice_img = `dice-${randomNumber}.png`;
    diceElement.src = dice_img;
    diceElement.classList.remove('hidden');
    console.log(`You rolled a ${randomNumber}`);
};

// Create the starting point for the game
playerOneScoreElement.textContent = pOneScore;
playerTwoScooreElement.textContent = pTwoScore;
diceElement.classList.add('hidden');

// When clicking the 'roll dice button' get a number from 1 - 6 and show the dice
rollDiceBtnElement.addEventListener('click', rollDice);

// .addEventListener('click', closeModal);
