"use strict";

let winningNumber = Math.trunc(Math.random() * 15) + 1;
let difference = 10;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const currGuess = Number(document.querySelector(".guess").value);
  const currDifference = Math.abs(currGuess - winningNumber);

  // No Input
  if (score === 0) {
    return false;
  }
  if (!currGuess) {
    displayMessage("Please type in a number 1 - 15!");

    // Win
  } else if (currGuess === winningNumber) {
    displayMessage("Correct! You got it!");
    document.querySelector("body").style.backgroundColor = "#60b352";
    document.querySelector(".number").style.fontFamily = "Orbitron";
    document.querySelector(".number").textContent = currGuess;
    document.querySelector(".number").style.width = "20rem";
    if (score > highscore) {
      displayMessage("Correct! You got it! New High Score!");
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // Not a Win
  } else {
    if (currGuess < 1 || currGuess > 15) {
      displayMessage("Oops! Pick a number between 1 and 15!");
    } else if (currDifference >= difference) {
      displayMessage("You're getting Colder! Guess Again");
    } else {
      displayMessage("You're getting Hotter! Keep Going");
    }
    difference = currDifference;
    score--;
    document.querySelector(".score").textContent = score;
  }
  if (score == 0) {
    displayMessage("Oh No! You're out of tries! Game Over!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  winningNumber = Math.trunc(Math.random() * 15) + 1;
  score = 10;
  document.querySelector(".score").textContent = score;
  displayMessage("What's your first guess?");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.fontFamily = "Lucida Grande";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  difference = 10;
});
