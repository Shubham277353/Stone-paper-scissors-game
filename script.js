// for(let i = 1;i<=5;i++){
let humanScore = 0;
let computerScore = 0;


let cChoice = Math.floor(Math.random() *3);

function getComputerChoice(cChoice){
    let choices = 0;
        if(cChoice === 0){
            choices = 0;
        }
        else if (cChoice === 1){
             choices = 1;
        }
        else if (cChoice === 2) {
             choices = 2;
        }
        console.log(choices)  ;
        return choices;
        
}


function getHumanChoice(str){
    let Human = 0;

    if(str === "paper"){
        Human = 0;
    }
    if(str === "stone"){
        Human = 1;
    }
    if(str === "scissors"){
        Human = 2;
    }
    console.log(Human) ;
    return Human;
}
function playRound (a,b){
    if (a === 0){
        if (a - b === 0){
            humanScore += 1;
            computerScore += 1;
             console.log("Oh! its a draw each player gets 10 point .");
        }
        else if (a - b === -1){
            computerScore = computerScore + 1 ;
             console.log("Oops! you lost ( paper beats stone) opponent gets 1 point.");
        }
        else if (a - b === -2){
            humanScore = humanScore + 1 ;
             console.log("Bravo! you won ( scissors beats paper) You get 1 point.");
        }
    }
    
    if (a === 1){
        if (a - b === 0){
            humanScore = 1;
            computerScore = 1;
             console.log("Oh! its a draw each player gets 100 point.");
        }
        else if (a - b === 1){
            humanScore = humanScore + 1 ;
             console.log("Bravo! you won ( paper beats stone) You get 1 point.");
        }
        else if (a - b === -1){
            computerScore = computerScore + 1 ;
             console.log("oops! you lost ( stone beats scissors) Opponent gets 1 point.");
        }
    }
    
    if (a === 2){
        if (a - b  === 0){
            humanScore = 1;
            computerScore = 1;
             console.log("Oh! its a draw each player gets 1000 point.");
        }
        else if (a - b === 1){
            humanScore = humanScore + 1 ;
             console.log("Bravo! you won ( stone beats scissors) You get 1 point.");
        }
        else if (a - b === 2){
            computerScore = computerScore + 1 ;
             console.log("oops! you lost ( scissors beats paper) Opponent gets 1 point.");
        }
    }
}
    let HumanChoice = prompt ("Enter your choice (Stone , Paper , Scissors) : ")
    HumanChoice = HumanChoice.toLowerCase();
    if (HumanChoice !== "stone" && HumanChoice !== "paper" && HumanChoice !== "scissors"){
        console.log("Please choose between stone , paper and Scissors only .");
    }
    
    const choice = getComputerChoice(cChoice);
    const HChoice = getHumanChoice(HumanChoice);

    
    playRound(choice,HChoice);



