
    //     const choicesArray = ["Rock","Paper","Scissors"];
    //     let computerSelection = choicesArray[Math.floor(Math.random()*choicesArray.length)];
    //     console.log(computerSelection);
    //     return computerSelection;

//Rock Paper Scissors

// create a function named getComputerChoice.
// make it choose randomly from an array of items called "Rock","Paper" and "Scissors"
//
//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection
// - and then return a string that declares the winner of the round like so:
// "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive 
//(so users can input rock, Rock, RocK or any other variation).
//
//create a function named playerSelection that returns a string from the input the user makes.
//The user input should be case insesitive
//
//create a funtion that takes both the playerSelection input and the computerSelection choice as parameters and returns the results of game as a string.
//Result options:
//You WIN!!! playerInput beats Computers choice.
//You lose! ComputersChoice beats players choice.
//
//rock vs paper = paper
//rock vs scissors = rock
//paper vs scissors = scissors
// let rYouSure = confirm("Are you sure you don't want to play?");
//             console.log(rYouSure);
//       
//             if (rYouSure === true) {
//                 alert("Ok? Yaaaaaaayyyyy! OK! Let's play!");
//                 gameRound();
//
//             } else {
//                 alert("Yayyy! I'm happy I could change your mind! I promise it will be super duper fun!");
//                 gameRound();
//             }
// let ask = (question, yes, no) => 
//         (confirm(question))? 
//         yes():no();
        

//         ask(
//         "Do you agree?",
//         () =>  alert("You agreed."),
//         () =>  alert("You canceled the execution.")
//         );

// let playerSelection = getPlayersChoice() =>
//     let playerInput = prompt("Rock,Paper or Scissors?","Write down your choice");
//     console.log(playerInput);

//     if (playerInput === null) {
//         alert("Canceling"); 
//     }     
//     playerSelection = playerInput.toUpperCase();
//     console.log(playerSelection);
    
//     if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
//         return playerSelection;

//     } else {
//         console.log("Unacceptable choice, please choose again.")
//         alert("Something went wrong.\nPlease write down your answer again and make sure to check your spelling.");
//         return getPlayersChoice();
//     }  
// }    

// let computerSelection = function getComputerChoice() {
//     const choicesArray = ["Rock","Paper","Scissors"];
//     let computerSelection = choicesArray[Math.floor(Math.random()*choicesArray.length)];
//     console.log(computerSelection);
//     return computerSelection;
// }

// gameRound();

// function gameRound() {
//     console.log("Let's play a game:");
//     computerSelection = getComputerChoice();
//     playerSelection = getPlayersChoice();
    

//     if (playerSelection === computerSelection) {
//         console.log("it's a tie");
//         alert("It's a tie! " + playerSelection + " against " + computerSelection + "!");
//         return askPlayAgain();
        
//     } else if ((( playerSelection === "Rock") && (computerSelection === "Scissors"))
//     || ((playerSelection === "Paper") && (computerSelection === "Rock")) 
//     || ((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
//         console.log("You WIN!");
//         alert("You WIN!!! " + "\nCongradulations, " + playerSelection + " beats " + computerSelection + "!");
//         return askPlayAgain();    
//     } else {
//     console.log("you loose");
//     alert("You Loose! " + "\nSadly, " + computerSelection + " beats " + playerSelection + ".");
//     return askPlayAgain();
//     } 
// }

// function askPlayAgain() {
//     console.log("would you like to play another round?");
//     let playAgain = confirm("Would you like to play another round?");
//     console.log(playAgain);

//     if (playAgain === true) {
//         console.log("confirmed New Game");
//         return gameRound();
    

//     } else {
//         console.log("good bye");
//         return alert("Thanks for playing with me!");  
//     }  
// }
// playerSelection = getPlayerInput();
//     playerSelection === undefined ?
//     false : playerSelection ;

let computerSelection;

function getComputerChoice () {
    const choicesArray = ["Rock","Paper","Scissors"];
    return choicesArray[Math.floor(Math.random()*choicesArray.length)];
}

let playerSelection;

function getPlayerChoice() {
    return getPlayerInput();
    
}

function getPlayerInput() {
    let playerInput = prompt("Rock,Paper or Scissors?","Write down your choice");
    if (playerInput === null) {
        console.log(alert("Canceling"));
        return false;
    } else {
        let playerSelection = capitalize(playerInput);
        if (playerSelection === "Rock" || "Paper" || "Scissors") {
            return playerSelection;
        }
        else {
            alert("Please spell check: " + playerInput + "\nPress \"ok\" to re-enter your choice");
            return getPlayerInput();
        } 
    }
}
function capitalize(string) {
    string = string.toLowerCase();
    const firstLetter = string.charAt(0);
    return (firstLetter.toUpperCase()+(string.substring(1)));
}
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice ();
    playerSelection = getPlayerChoice();
    console.log(playerSelection);
    if (playerSelection === false) {
    return false; //if player presses cancel
    }
    else if (playerSelection === computerSelection) {
        return ("It's a tie! " + playerSelection + " against " + computerSelection + "!");
    } else if ((( playerSelection === "Rock") && (computerSelection === "Scissors"))
    || ((playerSelection === "Paper") && (computerSelection === "Rock")) 
    || ((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
        playerScore += 1;
        return ("You WIN!!! " + "\nCongradulations, " + playerSelection + " beats " + computerSelection + "!");
    } else {
        computerScore += 1;
        return ("You Loose! " + "\nSadly, " + computerSelection + " beats " + playerSelection + ".");
    } 
}


let playerScore
let computerScore

function game() {
    playerScore = 0;
    computerScore = 0;
    console.log("ROUND 1:");
    console.log(playRound());
    console.log(scoreCount());
    console.log("ROUND 2:");
    console.log(playRound());
    console.log(scoreCount());
    console.log("ROUND 3:");
    console.log(playRound());
    console.log(scoreCount());
    console.log("ROUND 4:");
    console.log(playRound());
    console.log(scoreCount());
    console.log("ROUND 5:");
    console.log(playRound());
    console.log(scoreCount());
    console.log(winner());

}
function scoreCount() {
    return ("SCORE COUNT:\nYour score:" + playerScore + "\nThe computers score:" + computerScore );
}

function winner() {
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

console.log(game());
