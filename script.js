// Fetch all DOM elements
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

const result = document.querySelector(".result");

const choiceBtns = document.querySelectorAll(".choice-btn");
const resetBtn = document.querySelector(".reset");

// Set up game state
let playerScore = 0;
let computerScore = 0;

let gameOver = false;

// Helper functions
const choices = ["rock", "paper", "scissors"];
const choiceNames = ["Rock ✊", "Paper 🖐️", "Scissors ✌️"];

function getChoiceValue(name) {
  return choices.indexOf(name) + 1;
}

function getChoiceName(value) {
  return choiceNames[value - 1];
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

// Main game logic
function updateScores() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  if (playerScore === 5 && computerScore === 5) {
    result.textContent = "⚔️ Game over! It's a draw!";
  } else if (playerScore === 5) {
    result.textContent = "✅ Game over! Player wins!";
  } else if (computerScore === 5) {
    result.textContent = "❌ Game over! CPU wins!";
  } else {
    return;
  }

  gameOver = true;
}

function playRound(playerChoice, computerChoice) {
  let playerChoiceName = getChoiceName(playerChoice);
  let computerChoiceName = getChoiceName(computerChoice);

  if (playerChoice === computerChoice) {
    result.textContent = `⚔️ It's a draw! You both chose ${playerChoiceName}`;
    playerScore += 1;
    computerScore += 1;
  } else if (playerChoice === (computerChoice % 3) + 1) {
    result.textContent = `✅ Point to player! ${playerChoiceName} beats ${computerChoiceName}`;
    playerScore += 1;
  } else {
    result.textContent = `❌ Point to CPU! ${playerChoiceName} loses to ${computerChoiceName}`;
    computerScore += 1;
  }

  updateScores();
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;
  updateScores();
  result.textContent = "";
}

// Add event listeners to make UI function
choiceBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!gameOver) {
      playRound(getChoiceValue(e.target.id), getComputerChoice());
    }
  });
});

resetBtn.addEventListener("click", () => resetGame());
