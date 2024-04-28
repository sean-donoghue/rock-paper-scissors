const choices = ["rock", "paper", "scissors"];

function getChoiceValue(name) {
  return choices.indexOf(name) + 1;
}

function getChoiceName(value) {
  return choices[value - 1];
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors?").toLowerCase();

  while (!choices.includes(choice)) {
    choice = prompt("Invalid choice! Rock, paper, or scissors?").toLowerCase();
  }

  return getChoiceValue(choice);
}

function showResult(humanScore, computerScore) {
  console.log(`Final scores -- You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore === computerScore) {
    console.log("It's a draw!");
  } else if (humanScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let humanChoiceName = getChoiceName(humanChoice);

    if (humanChoice === computerChoice) {
      console.log(`It's a draw! You both chose ${humanChoiceName}.`);
      return;
    }

    let computerChoiceName = getChoiceName(computerChoice);

    if (humanChoice === (computerChoice % 3) + 1) {
      console.log(`You win, ${humanChoiceName} beats ${computerChoiceName}!`);
      humanScore += 1;
    } else {
      console.log(`You lose, ${computerChoiceName} beats ${humanChoiceName}!`);
      computerScore += 1;
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  showResult(humanScore, computerScore);
}
