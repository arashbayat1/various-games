"use strict";
// Selecting Elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
let player = 0;
let currScore, gameOn, scores;

// Starting Conditions
const init = function () {
  document
    .querySelector(`.player--${player}`)
    .classList.remove("player--winner");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.getElementById(`current--${player}`).textContent = 0;
  diceEl.classList.add("hidden");
  currScore = 0;
  scores = [0, 0];
  player = 0;
  gameOn = true;
  score0.textContent = 0;
  score1.textContent = 0;
};

const switchPlayer = function () {
  currScore = 0;
  document.getElementById(`current--${player}`).textContent = currScore;
  player = Number(!player);
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// Initialize Game
init();

// Dice Roll
btnRoll.addEventListener("click", function () {
  if (gameOn) {
    // Dice Roll Output
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${dice}.png`;

    //
    if (dice === 1) {
      switchPlayer();

      // Switch Player
    } else {
      // Add dice to score
      currScore += dice;
      document.getElementById(`current--${player}`).textContent = currScore;
    }
  }
});

btnHold.addEventListener("click", function () {
  if (gameOn) {
    // Add Current Score to player's score
    scores[player] += currScore;
    document.getElementById(`score--${player}`).textContent = scores[player];
    // Check for win
    if (scores[player] >= 11) {
      gameOn = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${player}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${player}`)
        .classList.add("player--winner");
    } else {
      // Reset Current Score and Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
