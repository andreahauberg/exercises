document.addEventListener('DOMContentLoaded', function() {
    const playerChoices = document.querySelectorAll ('.rock, .paper, .scissors');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const winText = document.getElementById('win');
    const loseText = document.getElementById('lose');
    const drawText = document.getElementById('draw');
  
    playerChoices.forEach(choice => {
      choice.addEventListener('click', function() {
        const playerChoice = choice.classList[0]; 
        playRound(playerChoice);
      });
    });
  
    function playRound(playerChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];
  
      player1.className = `player ${playerChoice}`;
      player2.className = `player ${computerChoice}`;
  
      showResult(playerChoice, computerChoice);
    }
  
    function showResult(playerChoice, computerChoice) {
      winText.classList.add('hidden');
      loseText.classList.add('hidden');
      drawText.classList.add('hidden');
  
      if (playerChoice === computerChoice) {
        drawText.classList.remove('hidden');
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        winText.classList.remove('hidden');
      } else {
        loseText.classList.remove('hidden');
      }
    }
  });
  