//Rock Paper Scissors

// create a function named getComputerChoice.
// make it choose randomly from an array of items called "Rock","Paper" and "Scissors"
//
//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection
// - and then return a string that declares the winner of the round like so:
// "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive 
//(so users can input rock, ROCK, RocK or any other variation).
//
//create a function named playerSelection that returns a string from the input the user makes.
//The user input should be case insesitive
//
//create a funtion that takes both the player input and the computer choice as parameters and returns the results of game as a string.
//Result options:
//You WIN!!! playersChoice beats Computers choice.
//You lose! ComputersChoice beats players choice.
//
//rock vs paper = paper
//rock vs scissors = rock
//paper vs scissors = scissors

gameRound();

function gameRound() {
    console.log("let's play a game:");
    let computer = getComputerChoice();
    let player = getPlayersChoice();

    if (player === computer) {
        console.log("it's a tie");
        alert("It's a tie!" + " " + player + " " + "against" + " " + computer + "!");
        askPlayAgain();
    } else if ((( player === "rock") && (computer === "scissors")) || ((player === "paper") && (computer === "rock")) || ((player === "scissors") && (computer === "paper")) || ((player === "scissors") && (computer === "paper"))) {
        console.log("you win");
        console.log("You WIN!");
        alert("You WIN!!! " + "\nCongradulations, " + player + " beats " + computer + "!");
        askPlayAgain();
        return;
    } else {
    console.log("you loose");
    alert("You Loose! " + "\nBecause " + computer + " beats " + player + ".");
    return;
    }
}


function getComputerChoice() {
    const choicesArray = ["rock","paper","scissors"];
    const randomChoice = choicesArray[Math.floor(Math.random()*choicesArray.length)];
    console.log(randomChoice);
    return randomChoice;
}
function getPlayersChoice() {
    const playersChoice = prompt("Rock,Paper or Scissors?","Write down your choice").toLowerCase();
    console.log(playersChoice);
    if (playersChoice === "rock" || playersChoice === "paper" || playersChoice === "scissors") {
        return playersChoice;
    }
    else {
        console.log("unacceptable choice, please choose again.")
        alert("Something went wrong.\nPlease write down your answer again and make sure to check your spelling.");
        getPlayersChoice();
        return;
    }
}

function askPlayAgain() {
    confirm("Would you like to play another round?");
            if (confirm) {
            console.log("confirmed New Game");
            gameRound();
            return;
        }
        else {
            console.log("good bye");
            alert("Thanks for playing with me!");
            return;
        }
    
}






