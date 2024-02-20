/* 

// get user input
// create function to randmoize elements or one line in play function
//compare input to randomized element
//display prompt: "Winner" or "Loser"

//rock beats scissors
//scissors beats paper
//paper beats rock

*/

//buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const clickPrompt = document.querySelector("#Click");

const roundLog = document.querySelector("#roundLog");
const roundStatement = document.createElement("h3");

const gameLog = document.querySelector(".log");
const gameStatement = document.createElement("h3");

let computerChoice = document.querySelector("#compChoice")

let pointResults = document.querySelector("#points")
const scoreBoard = document.createElement("div");

pointResults.appendChild(scoreBoard);
scoreBoard.className = "scoreBoard";


const userScore = document.createElement('h2');
userScore.id = "userScore";
const compScore = document.createElement('h2');
compScore.id = "compScore";

userScore.style = "display:none;box-shadow:none";
compScore.style = "display:none;box-shadow:none";

scoreBoard.appendChild(userScore);
scoreBoard.appendChild(compScore);

const restartButton = document.querySelector("#restart");
restartButton.style.display = "none";

let winner = document.querySelector("#winner");

let userPoints = 0;
let computerPoints = 0;


/****************** Random RPS Selection FOR "AI"  ***************************/

function getRandomized(){

    let choices = ["ROCK","PAPER","SCISSORS"];

    const rand = choices[Math.floor(Math.random() * choices.length)];

    return rand;
}


function restart(message,buttonColor){

    /****************** Displays Restart Button and Disables RPS buttons ***************************/

    restartButton.innerText = message;
    restartButton.style.backgroundColor = buttonColor;

    restartButton.style.display = "block";

    rockButton.disabled = true
    paperButton.disabled = true;
    scissorButton.disabled = true;

    /****************** Resets UI When Clicked, Starts Game Over  ***************************/

    restartButton.addEventListener('click',()=>{

        gameLog.style.backgroundColor = "black";
        gameStatement.innerText = "";

        userScore.style = "background-color:black;box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;";
        compScore.style = "background-color:black;box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;";

        clickPrompt.style.display = "block";

        restartButton.style.display = "none";

        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorButton.disabled = false;

        userPoints = 0;
        computerPoints = 0;
    })
}


function play(inputSelection, computerSelection){

    /****************** Rewards Points to Round Winner and changes UI to indicate winner  ***************************/ 

    if((inputSelection == computerSelection)){
        userScore.style = "background-color:black;box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;";
        compScore.style = "background-color:black;box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;";
    }

    else if((inputSelection == "ROCK" && computerSelection == "SCISSORS") || (inputSelection == "SCISSORS" && computerSelection == "PAPER") || (inputSelection == "PAPER" && computerSelection == "ROCK")){
        userScore.style = "background-color:rgb(0,0,139);box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;";
        compScore.style = "background-color:black;box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;";
        userPoints += 1;
    }
    
    else if((computerSelection == "ROCK" && inputSelection == "SCISSORS") || (computerSelection == "SCISSORS" && inputSelection == "PAPER") || (computerSelection == "PAPER" && inputSelection == "ROCK")){
        userScore.style = "background-color:black;box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;";
        compScore.style = "background-color:rgba(127,16,16,1);box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;";
        computerPoints += 1;
    }

    else{
        console.log("Error");
    }

    /****************** UI Changes When Either Side Wins  ***************************/

    if(computerPoints == 3){

        gameStatement.innerHTML = "THE COMPUTER WINS!!";
        gameLog.style.backgroundColor = "rgba(127,16,16,1)";
        gameStatement.style.backgroundColor = "rgba(127,16,16,1)";

        gameLog.appendChild(gameStatement);

        restart("YOU HAVE ANOTHER CHANCE TO SAVE HUMANITY","rgba(127,16,16,1)");
    }

    else if(userPoints == 3){
        gameStatement.innerHTML = "YOU WIN!!";
        gameLog.style.backgroundColor = "rgb(0,0,139)";
        gameStatement.style.backgroundColor = "rgb(0,0,139)";

        gameLog.appendChild(gameStatement);

        restart("WANT ANOTHER CRACK AT THE AI?","rgb(0,0,139)");

    }

    else{
        console.log("ERROR");
    }

    userScore.innerText = "You, The Hero: " + inputSelection + "\n\n" + userPoints;
    compScore.innerText =  "The Evil AI: " + computerSelection +  "\n\n" + computerPoints;

}

/****************** Buttons  ***************************/

rockButton.addEventListener('click', ()=>{
    choice = 'ROCK';
    play(choice,getRandomized());  
    clickPrompt.style.display = "none";
});

paperButton.addEventListener('click', ()=>{
    choice = 'PAPER';
    play(choice,getRandomized());
    clickPrompt.style.display = "none";
});

scissorButton.addEventListener('click', ()=>{
    choice  = 'SCISSORS';
    play(choice,getRandomized());
    clickPrompt.style.display = "none";
});


