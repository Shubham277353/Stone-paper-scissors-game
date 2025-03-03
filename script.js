
let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
const userScore = document.querySelector("#userscore");
const compScore = document.querySelector("#compscore");
const message = document.querySelector("#msg");



function getComputerChoice() {
    const choices = ["Stone", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;
let round = 0;


function playRound(newHumanChoice) {
  round++;
  let computerchoice = getComputerChoice();
  console.log(`Your choice = ${newHumanChoice}`)
  console.log(`Opponent's choice = ${computerchoice}`)
  if (newHumanChoice === computerchoice) {
    message.textContent = "Oh! It's a draw.";
  } else if (
    (newHumanChoice === "Stone" && computerchoice === "Scissors") ||
    (newHumanChoice === "Paper" && computerchoice === "Stone") ||
    (newHumanChoice === "Scissors" && computerchoice === "Paper")
  ) {
    humanScore += 1;
    message.textContent = "Bravo!! , You won .";
    message.style.backgroundColor = "green";
  } else {
    computerScore += 1;
    message.textContent = "Oops!! , You lost . ";
    message.style.backgroundColor = "red";

    
  }

  userScore.textContent = humanScore;
  compScore.textContent = computerScore;

  if(round === 5){
    endGame();
  }
}


  function endGame() {
    let message;
    if (humanScore === computerScore) {
        message.textContent = "Wow, it's a draw. Well played!";
    } else if (humanScore > computerScore) {
        message.textContent = "Congratulations!!!! You won!";
    } else {
        message.textContent = "Sadly, you lost. Well played though.";
    }

    stone.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

}


stone.addEventListener("click",() => playRound("Stone"));
paper.addEventListener("click",() => playRound("Paper"));
scissors.addEventListener("click",() => playRound("Scissors"));


