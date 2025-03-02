let gameContainer = document.querySelector("div");
let optionStone = document.querySelector(".stone");
let optionPaper = document.querySelector(".paper");
let optionScissors = document.querySelector(".scissors");

function getComputerChoice() {
    const choices = ["Stone", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(newHumanChoice) {
  if (newHumanChoice === computerchoice) {
    console.log("Oh! It's a draw. Each player gets 0 point.");
  } else if (
    (newHumanChoice === "Stone" && computerchoice === "Scissors") ||
    (newHumanChoice === "Paper" && computerchoice === "Stone") ||
    (newHumanChoice === "Scissors" && computerchoice === "Paper")
  ) {
    humanScore += 1;
    console.log("Bravo!! , You won ; You gets 1 point . ");
  } else {
    computerScore += 1;
    console.log("Oops!! , You lost ; Opponent gets 1 point . ");
  }
}

let computerchoice = getComputerChoice();

optionStone.addEventListener("click",() => playRound("Stone"));
optionPaper.addEventListener("click",() => playRound("Paper"));
optionScissors.addEventListener("click",() => playRound("Scissors"));

console.log(
  `\nFinal Score: \nYou = ${humanScore} \nOpponent = ${computerScore}`
);
if (humanScore === computerScore) {
  console.log("Wow, it's a draw. Well played!");
} else if (humanScore > computerScore) {
  console.log("Congratulations!!!! You won!");
} else {
  console.log("Sadly, you lost. Well played though.");
}
