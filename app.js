/* 

// get user input
// create function to randmoize elements or one line in play function
//compare input to randomized element
//display prompt: "Winner" or "Loser"

//rock beats scissors
//scissors beats paper
//paper beats rock

*/

//let userInput = document.querySelector("input");

//let answer = document.getElementById("answer");
let answer;
let winner = document.getElementById("winner");

let userPoints = 0;
let computerPoints = 0;


function getRandomized(){

    let choices = ["Rock","Paper","Scissors"];

    const rand = choices[Math.floor(Math.random() * choices.length)];
    return rand;
}

function play(inputSelection, computerSelection){
    if((inputSelection == computerSelection)){
        console.log("It's a draw");
        answer = "It's a draw";
    }

    else if((inputSelection == "Rock" && computerSelection == "Scissors") || (inputSelection == "Scissors" && computerSelection == "Paper") || (inputSelection == "Paper" && computerSelection == "Rock")){
        console.log("You Win! " + inputSelection + " beats " + computerSelection);
        answer = "You Win! " + inputSelection + " beats " + computerSelection;
        userPoints += 1;
    }
    
    else if((computerSelection == "Rock" && inputSelection == "Scissors") || (computerSelection == "Scissors" && inputSelection == "Paper") || (computerSelection == "Paper" && inputSelection == "Rock")){
        console.log("The Computer Wins! " + computerSelection + " beats " + inputSelection);
        answer = "The Computer Wins! " + computerSelection + " beats " + inputSelection;
        computerPoints += 1;
    }

    else{
        console.log("Error");
    }

}

function game(){
    for(let i = 1; i < 6;i++){
        let userInput = prompt("Choose: Rock, Paper, or Scissors");
        play(userInput,getRandomized());
        window.alert(answer + " (Round: " + i + " Your Points: " + userPoints + " " + " Computer Points: " + computerPoints + ")");
    }

    if(userPoints == computerPoints){
        winner.innerHTML = "Oh well... It's a tie";
    }
    else if(userPoints > computerPoints){
        winner.innerHTML = "You beat the computer!"
    }
    else{
        winner.innerHTML = "Oh no... The computer won :("
    }

    console.log("YOUR POINTS " + userPoints);
    console.log("COMPUTER POINTS " + computerPoints);
}

game();
