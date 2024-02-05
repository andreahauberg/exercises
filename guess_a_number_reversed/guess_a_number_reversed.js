document.getElementById('start').addEventListener('click', startGame);

let min = 0;
let max = 100;
let guess;
let guessCount = 0;

function startGame() {
    resetGame();
    document.getElementById('computer_guess').classList.remove('hide');
    document.getElementById('computer_guess').classList.add('show');
    guessNumber();
}

function guessNumber() {
    guess = Math.floor((min + max) / 2);
    document.getElementById('computer_guess').textContent = `Computerens gæt: ${guess}`;
    guessCount++;
}

document.getElementById('low').addEventListener('click', () => {
    min = guess - 1;
    guessNumber();
});

document.getElementById('high').addEventListener('click', () => {
    max = guess + 1;
    guessNumber();
});

document.getElementById('correct').addEventListener('click', () => {
    document.getElementById('feedback').textContent = `HURRA! Computeren gættede rigtigt på ${guessCount} forsøg!`;
    disableButtons();
});

function resetGame() {
    min = 0;
    max = 100;
    guessCount = 0;
    document.getElementById('feedback').textContent = "";
    enableButtons();
}

function disableButtons() {
    document.getElementById('low').disabled = true;
    document.getElementById('high').disabled = true;
    document.getElementById('correct').disabled = true;
}

function enableButtons() {
    document.getElementById('low').disabled = false;
    document.getElementById('high').disabled = false;
    document.getElementById('correct').disabled = false;
}
