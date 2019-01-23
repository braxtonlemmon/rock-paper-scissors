//Assign global variables
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const roundResult = document.querySelector('.round-result');
const gameResult = document.querySelector('.game-result');
gameResult.textContent = '';

let computerPoints = 0;
let playerPoints = 0;
let playerName = prompt('Please enter your first name: ');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', game);
});

// FUNCTION ONE - returns computer choice **string**
function computerPlay() {
    options = ['rock', 'paper', 'scissors'];
    randNum = Math.floor(Math.random() * options.length);
    return options[randNum];
};

//FUNCTION TWO - Plays one round of the game - changes textContent of roundResult
function playRound(playerSelection, computerSelection = computerPlay()) {
    if (playerSelection === computerSelection) {
        roundResult.textContent= 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
            playerSelection === 'paper' && computerSelection === 'rock' || 
            playerSelection === 'scissors' && computerSelection === 'paper') {
                playerPoints++;    
                roundResult.textContent = 'You win, ' + playerSelection + ' beats ' + computerSelection + '.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock' || 
            playerSelection === 'rock' && computerSelection === 'paper' || 
            playerSelection === 'paper' && computerSelection === 'scissors') {
                computerPoints++;
                roundResult.textContent = 'You lose, ' + computerSelection + ' beats ' + playerSelection + '.';
    } else {
            roundResult.textContent = 'Something went wrong. Refresh page and restart game.';
    };
};

//FUNCTION THREE - Updates score of the game - changes textContent of player and computer scores
function scoreUpdate() {
    playerScore.textContent = playerName + '\'s Score: ' + playerPoints;
    computerScore.textContent = 'Computer\'s Score: ' + computerPoints;
    if (playerPoints === 5) {
        gameResult.textContent = playerName + ' wins the game!';
    } else if (computerPoints === 5) {
        gameResult.textContent = 'Computer wins the game!';
    };
};

//FUNCTION FOUR - Plays the entire game - uses functions: 1, 2, 3
function game(e) {
    let playerSelection = e.target.id;
    if (playerSelection === 'reset') {
        resetGame();
    } else if (gameResult.textContent != '') {
        return;
    } else {
        playRound(playerSelection);
        scoreUpdate();
    };
};

//FUNCTION FIVE - Resets the game and starts a new one
function resetGame() {
    playerPoints = 0;
    computerPoints = 0;
    roundResult.textContent = '';
    gameResult.textContent = '';
    playerName = prompt('Please enter your first name: ');
    scoreUpdate();    
};



