"use strict";

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct! You got it!";

document.querySelector(".number").textContent = 12;


document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let winningNumber = Math.trunc(Math.random() * 15) + 1;
let difference = 10;
let score = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const currGuess = Number(document.querySelector(".guess").value);
  const currDifference = Math.abs(currGuess - winningNumber);
  console.log(winningNumber);
  console.log(difference);
  console.log(currDifference);

  // No Input
  if (!currGuess) {
    document.querySelector(".message").textContent =
      "Please type in a number 1 - 15!";

    // Win
  } else if (currGuess === winningNumber) {
    document.querySelector(".message").textContent = "Correct! You got it!";
    document.querySelector("body").style.backgroundColor = "#60b352";
    document.querySelector(".number").style.fontFamily = "Orbitron";
    document.querySelector(".number").textContent = currGuess;
    document.querySelector(".number").style.width = "20rem";
    if (score > highscore) {
      document.querySelector(".message").textContent =
        "Correct! You got it! New High Score!";
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // Not a Win
  } else {
    if (currGuess < 1 || currGuess > 15) {
      document.querySelector(".message").textContent =
        "Oops! Pick a number between 1 and 15!";
    } else if (currDifference >= difference) {
      document.querySelector(".message").textContent =
        "You're getting Colder! Guess Again";
    } else {
      document.querySelector(".message").textContent =
        "You're getting Hotter! Keep Going";
    }
    difference = currDifference;
    score--;
    document.querySelector(".score").textContent = score;
  }
  if (score == 0) {
    document.querySelector(".message").textContent =
      "Oh No! You're out of tries! Game Over!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  winningNumber = Math.trunc(Math.random() * 15) + 1;
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "What's your first guess?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.fontFamily = "Lucida Grande";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  difference = 10;
});
