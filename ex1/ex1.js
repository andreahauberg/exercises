// function logRandom() {
//     const ranNum = Math.floor(Math.random() * 101);
//     console.log(ranNum);
//     document.getElementById('ranNum').textContent = 'Det tilfældige tal er:' + ranNum;
// }

// logRandom();


const ranNum = Math.floor(Math.random() * 101);

document.getElementById('guessbutton').addEventListener('click', checkGuess);

function checkGuess(){
    const guessInput = document.getElementById('guessInput');
    const feedbackElement = document.getElementById('feedback');
    const celebrationElement = document.getElementById('celebration');

    const userGuess = parseInt(guessInput.value);
    if(userGuess === ranNum){
        celebrationElement.style.display = 'block';
    } else if (userGuess < ranNum) {
        feedbackElement.textContent = 'Dit gæt er for lavt. Prøv igen!';
    } else {
        feedbackElement.textContent = 'Dit gæt er for højt. Prøv igen!';
    }
}

