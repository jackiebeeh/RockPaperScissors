//GAME

let computerSelection;
let playerSelection;
let playerScore;
let computerScore;

console.log(playGame());

function playGame() { // CLEAN ME: needs to be changed to a loop once learned
    playerScore = 0;
    computerScore = 0;
    console.log("ROUND 1:");
    console.log(playRound());
    console.log(updateScore());
    console.log("ROUND 2:");
    console.log(playRound());
    console.log(updateScore());
    console.log("ROUND 3:");
    console.log(playRound());
    console.log(updateScore());
    console.log("ROUND 4:");
    console.log(playRound());
    console.log(updateScore());
    console.log("ROUND 5:");
    console.log(playRound());
    console.log(updateScore());
    console.log(getWinner());
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice ();
    playerSelection = getPlayerChoice();
    console.log(playerSelection);
    if (playerSelection === false) {
    return false; //if player presses cancel - FIX ME
    }
    else if (playerSelection === computerSelection) {
        return ("It's a tie! " + playerSelection + " against " + computerSelection + "!");
    } else if ((( playerSelection === "Rock") && (computerSelection === "Scissors"))
    || ((playerSelection === "Paper") && (computerSelection === "Rock")) 
    || ((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
        playerScore++
        return ("You WIN!!! " + "\nCongratulations, " + playerSelection + " beats " + computerSelection + "!");
    } else {
        computerScore++
        return ("You Loose! " + "\nSadly, " + computerSelection + " beats " + playerSelection + ".");
    } 
}

function getComputerChoice () {
    const choicesArray = ["Rock","Paper","Scissors"];
    return choicesArray[Math.floor(Math.random()*choicesArray.length)];
}

function getPlayerChoice() {
    let playerInput = prompt("Rock,Paper or Scissors?","Write down your choice");
    if (playerInput === null) {
        console.log(alert("Canceling"));
        return false;
    } else {
        let playerSelection = capitalize(playerInput);
        if (playerSelection === "Rock" || "Paper" || "Scissors") {
            return playerSelection;
        }
        else { // FIX ME, does not get run
            alert("Please spell check: " + playerInput + "\nPress \"ok\" to re-enter your choice");
            return getPlayerChoice();
        } 
    }
}

function capitalize(string) {
    string = string.toLowerCase();
    const firstLetter = string.charAt(0);
    return (firstLetter.toUpperCase()+(string.substring(1)));
}

function updateScore() {
    return ("SCORE COUNT:\nYour score:" + playerScore + "\nThe computers score:" + computerScore );
}

function getWinner() {
    console.log("player:" + playerScore);
    console.log("computer:" + computerScore);
    if (playerScore === computerScore) {
        return ("It's a tie!");
    } else if (playerScore > computerScore) {
        return ("You win the game!");
    } else {
        return ("You lost the game");
    }
}

function isGameOver() { // add once game is looped
    return playerScore === 5 || computerScore === 5
}

// Created by Sanelma Brown, November 16th 2023

        