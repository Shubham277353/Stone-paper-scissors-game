
let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let userScore = document.querySelector("#userscore");
let compScore = document.querySelector("#compscore");
const message = document.querySelector("#msg");
const finalMessage = document.querySelector("#finalScore")
const popUp = document.querySelector("#popup")
const restart = document.querySelector("#restart-button")



function getComputerChoice() {
    const choices = ["Stone", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

restart.addEventListener("click", () => {
  round  = 0;
  humanScore = 0;
  computerScore = 0; 
  userScore.textContent = 0;
  compScore.textContent = 0;

  console.log(humanScore);
  console.log(computerScore);
  popUp.style.display = "none";
})


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
    if (humanScore === computerScore) {
        finalMessage.textContent = "Wow, it's a draw. Well played!";
    } else if (humanScore > computerScore) {
      finalMessage.textContent = "Congratulations!!!! You won!";
    } else {
      finalMessage.textContent = "Sadly, you lost. Well played though.";
    }

  popUp.style.display = "flex"

}


stone.addEventListener("click",() => playRound("Stone"));
paper.addEventListener("click",() => playRound("Paper"));
scissors.addEventListener("click",() => playRound("Scissors"));


