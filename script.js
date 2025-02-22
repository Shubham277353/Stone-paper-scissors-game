function getComputerChoice (){
    let compChoice = Math.floor(Math.random()*3);
    if (compChoice === 1) return "Stone";
    if (compChoice === 0) return "Paper";
    if (compChoice === 2) return "Scissors";
}

function getHumanChoice(str){
    str = str.toLowerCase();
    if (str === "stone") return "Stone";
    if (str === "paper") return "Paper";
    if (str === "scissors") return "Scissors";
    return -1;
}

function playGame(){

let humanScore = 0;
let computerScore = 0;

function playRound(newHumanChoice , computerchoice){

    if (newHumanChoice === computerchoice){
        console.log("Oh! It's a draw. Each player gets 0 point.");
    }
    else if (newHumanChoice === "Stone" && computerchoice === "Scissors" ||
        newHumanChoice === "Paper" && computerchoice === "Stone" || 
        newHumanChoice === "Scissors" && computerchoice === "Paper" ){
        humanScore += 1;
            console.log("Bravo!! , You won ; You gets 1 point . ")
        }

    else {
        computerScore += 1;
        console.log("Oops!! , You lost ; Opponent gets 1 point . ")
    }
}

for(let i = 1 ; i <= 5 ; i++){
    let humanChoice = prompt("Enter your choice (Stone , Paper, Scissors) : ");
    let newHumanChoice = getHumanChoice(humanChoice);

    if (newHumanChoice === -1 ){
        console.log ("Invalid choice. Please choose between Stone, Paper, and Scissors.");
        i--;
        continue ;
    }

    let computerchoice = getComputerChoice();
    console.log (`\n\nYou chose : ${newHumanChoice} \nOpponent chose : ${computerchoice} `)
    playRound(newHumanChoice,computerchoice);
    console.log(`Score: \nYou = ${humanScore} \nOpponent = ${computerScore}`);

}

console.log(`\nFinal Score: \nYou = ${humanScore} \nOpponent = ${computerScore}`);
if (humanScore === computerScore) {
    console.log("Wow, it's a draw. Well played!");
} else if (humanScore > computerScore) {
    console.log("Congratulations!!!! You won!");
} else {
    console.log("Sadly, you lost. Well played though.");
}
}
 
playGame();