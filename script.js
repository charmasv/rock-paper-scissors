// DOM Elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const roundResult = document.getElementById("round-result");
const scoreDisplay = document.getElementById("score");
const finalResult = document.getElementById("final-result");

// Game Variables
let humanScore = 0;
let computerScore = 0;

// Event Listeners for Buttons
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

// Function to Get Computer's Choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to Play a Single Round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! Both chose ${humanChoice}.`;
        roundResult.className = "tie";
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        roundResult.className = "win";
        return "win";
    } else {
        computerScore++;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        roundResult.className = "lose";
        return "lose";
    }
}

// Function to Play the Game
function playGame(humanChoice) {
    if (humanScore === 5 || computerScore === 5) {
        return; // Stop the game if someone has already won
    }

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    scoreDisplay.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

    // Check for a winner
    if (humanScore === 5) {
        finalResult.textContent = "🎉 Congratulations! You won the game! 🎉";
        finalResult.className = "win";
    } else if (computerScore === 5) {
        finalResult.textContent = "😢 Sorry, you lost the game. Try again! 😢";
        finalResult.className = "lose";
    }
}