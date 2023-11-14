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
//You WIN!!! playerInput beats Computers choice.
//You lose! ComputersChoice beats players choice.
//
//rock vs paper = paper
//rock vs scissors = rock
//paper vs scissors = scissors
// let rYouSure = confirm("Are you sure you don't want to play?");
//             console.log(rYouSure);
        
//             if (rYouSure === true) {
//                 alert("Ok? Yaaaaaaayyyyy! OK! Let's play!");
//                 gameRound();

//             } else {
//                 alert("Yayyy! I'm happy I could change your mind! I promise it will be super duper fun!");
//                 gameRound();
//             }
//          

gameRound();

function gameRound() {
    console.log("Let's play a game:");
    let computer = getComputerChoice();
    let player = getPlayersChoice();

    if (player === computer) {
        console.log("it's a tie");
        alert("It's a tie! " + player + " against " + computer + "!");
        return askPlayAgain();
        
    } else if ((( player === "ROCK") && (computer === "SCISSORS"))
    || ((player === "PAPER") && (computer === "ROCK")) 
    || ((player === "SCISSORS") && (computer === "PAPER"))) {
        console.log("You WIN!");
        alert("You WIN!!! " + "\nCongradulations, " + player + " beats " + computer + "!");
        return askPlayAgain();
          
    } else {
    console.log("you loose");
    alert("You Loose! " + "\nSadly, " + computer + " beats " + player + ".");
    return askPlayAgain();
    } 
}

function getComputerChoice() {
    const choicesArray = ["ROCK","PAPER","SCISSORS"];
    const randomChoice = choicesArray[Math.floor(Math.random()*choicesArray.length)];
    console.log(randomChoice);
    return randomChoice;
}

function getPlayersChoice() {
    let playerInput = prompt("Rock,Paper or Scissors?","Write down your choice");
    console.log(playerInput);

    if (playerInput === null) {
        return alert("Canceling"); 
    }     
    let playerChoice = playerInput.toUpperCase();
    console.log(playerChoice);
    
    if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") {
        return playerChoice;
    } else {
        console.log("Unacceptable choice, please choose again.")
        alert("Something went wrong.\nPlease write down your answer again and make sure to check your spelling.");
        return getPlayersChoice();
    }  
}    

function askPlayAgain() {
    console.log("would you like to play another round?");
    let playAgain = confirm("Would you like to play another round?");
    console.log(playAgain);

    if (playAgain === true) {
        console.log("confirmed New Game");
        return gameRound();
    

    } else {
        console.log("good bye");
        return alert("Thanks for playing with me!");  
    }  
}






