'use strict';

// constants
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');

const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// functions

const rollDice = function () {
    if (playing) {
        // generate random number from 1 to 6
        const min = Math.ceil(1);
        const max = Math.floor(6);
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // show the dice picture corresponding to the random number
        const dice_img = `dice-${randomNumber}.png`;
        diceElement.src = dice_img;
        diceElement.classList.remove('hidden');
        console.log(`You rolled a ${randomNumber}`);

        // Check for rolled 1: if true, switch to next player. else, add to the player's score.
        if (randomNumber !== 1) {
            // Add dice to current score:
            currentScore += randomNumber;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    }
};

const holdScore = function () {
    if (playing) {
        // first, add current score to the active player
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // then check if the score is 100, and if it is, finish the game
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceElement.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            // if the game isn't finished, switch to the next player.
            switchPlayer();
        }
    }
};

const newGame = function () {
    // remove the player--winner class from both elements
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');

    // make player 0 with the active overlay
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');

    // remove any dice, if present
    diceElement.classList.add('hidden');

    // initialize all the conditions
    playing = true;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0; // Player 0 is the active player

    // reset the scores
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
};

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // if the active player is Player 0, then we want the new active player to be player 1 and vice versa.
    player0Element.classList.toggle('player--active'); // we use toggle to ADD a class if it's there, or to REMOVE a class when it's not there.
    player1Element.classList.toggle('player--active');
};

// Create the starting point for the game
newGame();

// When clicking the 'roll dice button' get a number from 1 - 6 and show the dice
btnRollDice.addEventListener('click', rollDice);

// when clicking the 'hold' button, hold the score to the active player
btnHold.addEventListener('click', holdScore);

// when clicking on the 'new game' button, reset every condition to the basic game
btnNew.addEventListener('click', newGame);
