let playerScore = 0;
let computerScore = 0;
let round = 1;

const choices = ["piedra", "papel", "tijera"];
const icons = {
    piedra: "✊",
    papel: "✋",
    tijera: "✌️"
};

function play(playerChoice) {
    resetResultDisplay();
    updateRoundDisplay();
    highlightSelectedButton(playerChoice);

    const playerChoiceEl = document.getElementById("player-choice");
    const computerChoiceEl = document.getElementById("computer-choice");

    showUnknownChoices(playerChoiceEl, computerChoiceEl);

    // Simular un retraso para mostrar la elección de la computadora
    setTimeout(() => {
        const computerChoice = getComputerChoice();
        updateChoicesDisplay(playerChoice, computerChoice, playerChoiceEl, computerChoiceEl);
        const result = determineRoundResult(playerChoice, computerChoice);
        updateScores(result);
        updateResultDisplay(result);
        round++;
    }, 2000); // Espera 2000 ms para mostrar la elección de la PC
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    updateRoundDisplay();
    resetChoiceDisplays();
    clearResultDisplay();
}

function updateRoundDisplay() {
    document.getElementById("round").innerText = `Ronda: ${round}`;
}

function highlightSelectedButton(playerChoice) {
    
    //limpiar las clases anteriores 
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(button => button.classList.remove('selected'));

    //selecciono la actual
    const selectedButton = document.getElementById(playerChoice);
    selectedButton.classList.add('selected');
}

function showUnknownChoices(playerChoiceEl, computerChoiceEl) {
    playerChoiceEl.innerText = "🤔";
    computerChoiceEl.innerText = "❓";
    playerChoiceEl.classList.add("unknow-animation");
    computerChoiceEl.classList.add("unknow-animation");
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function updateChoicesDisplay(playerChoice, computerChoice, playerChoiceEl, computerChoiceEl) {
    playerChoiceEl.innerText = icons[playerChoice];
    computerChoiceEl.innerText = icons[computerChoice];
    playerChoiceEl.classList.remove("unknow-animation");
    computerChoiceEl.classList.remove("unknow-animation");
}

function determineRoundResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "empate";
    } 
    if (
        (playerChoice === "piedra" && computerChoice === "tijera") ||
        (playerChoice === "papel" && computerChoice === "piedra") ||
        (playerChoice === "tijera" && computerChoice === "papel")
    ) {
        return "jugador";
    }
    return "computadora";
}

function updateScores(result) {
    if (result === "jugador") {
        playerScore++;
    } else if (result === "computadora") {
        computerScore++;
    }
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
}

function resetResultDisplay(){
    document.getElementById("result").innerText = '';
}


function updateResultDisplay(result) {
    const resultMessage = {
        empate: "¡Empate!",
        jugador: "¡Ganaste esta ronda!",
        computadora: "Perdiste esta ronda."
    };


    const resultElement = document.getElementById("result");
    resultElement.innerText = resultMessage[result];

    // Limpiar clases anteriores
    resultElement.classList.remove("win", "lose", "draw");

    if (result === "jugador") {
        resultElement.classList.add("win");
    } else if (result === "computadora") {
        resultElement.classList.add("lose");
    } else if (result === "empate") {
        resultElement.classList.add("draw");
    }
}

function resetChoiceDisplays() {
    document.getElementById("player-choice").innerText = "🤔";
    document.getElementById("computer-choice").innerText = "❓";
}

function clearResultDisplay() {
    document.getElementById("result").innerText = "";
    document.getElementById("computer-choice").classList.add("computer-choice");
}
