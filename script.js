// //GAME

let buttons = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;
let gameResult = document.querySelector(".gameResult");
let score = document.querySelector(".score");
let results = document.querySelector(".results");
let winner = false;

let gameLength = 5;
let i =1;

for (let button of buttons) {
    button.addEventListener("click", () => {
        if (winner === false) {
            console.log(button.getAttribute("value"));
            gameTurn(button.getAttribute("value"));
        }
    });
}

function gameTurn(playerChoice) {
    if ((computerScore === gameLength) || (playerScore === gameLength)) {
        if (computerScore > playerScore) {
            winner = "Computer"
        }
        else {
            winner = "Player"
        }
        gameResult.textContent = `${winner} wins!`;
        let replayButton = document.createElement("button");
        replayButton.textContent = "Play again!";
        results.appendChild(replayButton);
        replayButton.addEventListener("click", ()=> {
            replayButton.remove();
            replay();
        });
        
        
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
    winner = false;
    results.textContent = `Choose an option`;
}
// // Created by JackieBeeh, January 7th 2024
