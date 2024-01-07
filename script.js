// //GAME

let buttons = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;
let gameResult = document.querySelector(".gameResult");
let score = document.querySelector(".score");
let results = document.querySelector(".results");
let replayButton;

let gameLength = 5;
let i =1;



for (let button of buttons) {
    button.addEventListener("click", () => {
        console.log(button.getAttribute("value"));
        gameTurn(button.getAttribute("value"));
    });
}

function gameTurn(playerChoice) {
    if ((computerScore === gameLength) || (playerScore === gameLength)) {
        let winner
        if (computerScore > playerScore) {
            winner = "Computer"
        }
        else {
            winner = "Player"
        }
        gameResult.textContent = `The ${winner} wins!`;
        replayButton = document.createElement("button");
        replayButton.textContent = "Play again!";
        results.appendChild(replayButton);
        replayButton.addEventListener("click",  replay());
    } else {
        console.log(`Round:${i}`);
        i++;
        let computerChoice = getComputerChoice();
        if (playerChoice === computerChoice) {
            gameResult.textContent = `It's a tie! ${playerChoice} vs ${computerChoice}`;
        } else if ((( playerChoice === "Rock") && (computerChoice === "Scissors"))
        || ((playerChoice === "Paper") && (computerChoice === "Rock")) 
        || ((playerChoice === "Scissors") && (computerChoice === "Paper"))) {
            playerScore++
            gameResult.textContent = "You WIN!!! " + "\nCongratulations, " + playerChoice + " beats " + computerChoice + "!";
        } else {
            computerScore++
            gameResult.textContent = "You Loose! " + "\nSadly, " + computerChoice + " beats " + playerChoice + ".";
        }
        score.textContent = `COMPUTER: ${computerScore} PLAYER: ${playerScore}`;
    }
}

function getComputerChoice() {
    const choicesArray = ["Rock","Paper","Scissors"];
    return choicesArray[Math.floor(Math.random()*choicesArray.length)];
}

function replay() {
    console.log(`replay btn clicked`);
    playerScore = 0;
    computerScore = 0;
    i = 1;
    replayButton.remove();
}










// let computerChoice;
// let playerChoice;
// let playerScore;
// let computerScore;

// console.log(playGame());

// function playGame() { // CLEAN ME: needs to be changed to a loop once learned
//     playerScore = 0;
//     computerScore = 0;
//     console.log("ROUND 1:");
//     console.log(playRound());
//     console.log(updateScore());
//     console.log("ROUND 2:");
//     console.log(playRound());
//     console.log(updateScore());
//     console.log("ROUND 3:");
//     console.log(playRound());
//     console.log(updateScore());
//     console.log("ROUND 4:");
//     console.log(playRound());
//     console.log(updateScore());
//     console.log("ROUND 5:");
//     console.log(playRound());
//     console.log(updateScore());
//     console.log(getWinner());
// }

// function playRound(playerChoice, computerChoice) {
//     computerChoice = getComputerChoice ();
//     playerChoice = getPlayerChoice();
//     console.log(playerChoice);
//     if (playerChoice === false) {
//     return false; //if player presses cancel - FIX ME
//     }
//     else if (playerChoice === computerChoice) {
//         return ("It's a tie! " + playerChoice + " against " + computerChoice + "!");
//     } else if ((( playerChoice === "Rock") && (computerChoice === "Scissors"))
//     || ((playerChoice === "Paper") && (computerChoice === "Rock")) 
//     || ((playerChoice === "Scissors") && (computerChoice === "Paper"))) {
//         playerScore++
//         return ("You WIN!!! " + "\nCongratulations, " + playerChoice + " beats " + computerChoice + "!");
//     } else {
//         computerScore++
//         return ("You Loose! " + "\nSadly, " + computerChoice + " beats " + playerChoice + ".");
//     } 
// }

// function getComputerChoice () {
//     const choicesArray = ["Rock","Paper","Scissors"];
//     return choicesArray[Math.floor(Math.random()*choicesArray.length)];
// }

// function getPlayerChoice() {
//     let playerInput = prompt("Rock,Paper or Scissors?","Write down your choice");
//     if (playerInput === null) {
//         console.log(alert("Canceling"));
//         return false;
//     } else {
//         let playerChoice = capitalize(playerInput);
//         if (playerChoice === "Rock" || "Paper" || "Scissors") {
//             return playerChoice;
//         }
//         else { // FIX ME, does not get run
//             alert("Please spell check: " + playerInput + "\nPress \"ok\" to re-enter your choice");
//             return getPlayerChoice();
//         } 
//     }
// }

// function capitalize(string) {
//     string = string.toLowerCase();
//     const firstLetter = string.charAt(0);
//     return (firstLetter.toUpperCase()+(string.substring(1)));
// }

// function updateScore() {
//     return ("SCORE COUNT:\nYour score:" + playerScore + "\nThe computers score:" + computerScore );
// }

// function getWinner() {
//     console.log("player:" + playerScore);
//     console.log("computer:" + computerScore);
//     if (playerScore === computerScore) {
//         return ("It's a tie!");
//     } else if (playerScore > computerScore) {
//         return ("You win the game!");
//     } else {
//         return ("You lost the game");
//     }
// }

// function isGameOver() { // add once game is looped
//     return playerScore === 5 || computerScore === 5
// }

// // Created by Sanelma Brown, November 16th 2023
