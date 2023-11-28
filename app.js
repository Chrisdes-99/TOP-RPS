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

//buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");

const roundLog = document.querySelector("#roundLog");
const roundStatement = document.createElement("h3");

const gameLog = document.querySelector(".log");
const gameStatement = document.createElement("h3");

let computerChoice = document.querySelector("#compChoice")

//let results = document.querySelector("#results");
let pointResults = document.querySelector("#points")
const scoreBoard = document.createElement("div");

pointResults.appendChild(scoreBoard);
scoreBoard.className = "scoreBoard";
//scoreBoard.style = 'display:grid;grid-template-columns:repeat(2,.3fr);align-items: center;justify-items:center';

const userScore = document.createElement('h2');
userScore.id = "userScore";
const compScore = document.createElement('h2');
compScore.id = "compScore";
//userScore.style = 'background-color:black;color:white;padding:10px';

scoreBoard.appendChild(userScore);
scoreBoard.appendChild(compScore);

let userPoints = 0;
let computerPoints = 0;



let winner = document.querySelector("#winner");



// do not touch!
function getRandomized(){

    let choices = ["ROCK","PAPER","SCISSORS"];

    const rand = choices[Math.floor(Math.random() * choices.length)];

    return rand;
}

function play(inputSelection, computerSelection){

    // for 
    if((inputSelection == computerSelection)){
        roundStatement.innerHTML = "IT'S A DRAW";
        roundStatement.style.color = "lightblue";
        gameStatement.innerHTML = "";
        gameLog.style.backgroundColor = "black";
        gameStatement.style.backgroundColor = "black";

        roundLog.appendChild(roundStatement);
    }

    else if((inputSelection == "ROCK" && computerSelection == "SCISSORS") || (inputSelection == "SCISSORS" && computerSelection == "PAPER") || (inputSelection == "PAPER" && computerSelection == "ROCK")){
        roundStatement.innerHTML = "YOU WIN THIS ROUND! " + inputSelection + " BEATS " + computerSelection;
        roundStatement.style.color = "lightblue";
        userPoints += 1;
        roundLog.appendChild(roundStatement);
    }
    
    else if((computerSelection == "ROCK" && inputSelection == "SCISSORS") || (computerSelection == "SCISSORS" && inputSelection == "PAPER") || (computerSelection == "PAPER" && inputSelection == "ROCK")){
        roundStatement.innerHTML = "THE COMPUTER WINS THIS ROUND! " + computerSelection + " BEATS " + inputSelection;
        roundStatement.style.color = "red";
        computerPoints += 1;
        roundLog.appendChild(roundStatement);
    }

    else{
        console.log("Error");
    }

    // If Statements to determine winner after reaching max points

    if(computerPoints == 3){

        gameStatement.innerHTML = "THE COMPUTER WINS!!";
        gameLog.style.backgroundColor = "red";
        gameStatement.style.backgroundColor = "red";

        gameLog.appendChild(gameStatement);

        roundStatement.innerHTML= "";

        computerPoints = 0;
        userPoints = 0;
    }
    else if(userPoints == 3){
        gameStatement.innerHTML = "YOU WIN!!";
        gameLog.style.backgroundColor = "blue";
        gameStatement.style.backgroundColor = "blue";

        gameLog.appendChild(gameStatement);

        roundStatement.innerHTML="";

        computerPoints = 0;
        userPoints = 0;
    }

    else if(userPoints > 3  || computerPoints > 3){
        gameStatement.innerHTML = "TBD"
        gameLog.style.backgroundColor = "blue";
        gameStatement.style.backgroundColor = "blue";
        gameLog.appendChild(gameStatement);
    }

    else if((userPoints == 1 || computerPoints == 1) || roundStatement == "IT'S A DRAW"){
        gameLog.style.backgroundColor = "black";
        gameStatement.innerHTML = "";
    }

    else{
        console.log("ERROR");
    }

    userScore.innerText = "You, The Hero: " + "\n\n" + userPoints;
    compScore.innerText =  "Computer, The Evil AI: " + "\n\n" + computerPoints;

}

rockButton.addEventListener('click', ()=>{
    choice = 'ROCK';
    play(choice,getRandomized());   
});

paperButton.addEventListener('click', ()=>{
    choice = 'PAPER';
    play(choice,getRandomized());
});

scissorButton.addEventListener('click', ()=>{
    choice  = 'SCISSORS';
    play(choice,getRandomized());
});

