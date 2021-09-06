let playerScore = 0;
let computerScore = 0;
let tieGame = 0;

const computerSelection = ['rock', 'paper', 'scissors'];
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const score = document.getElementById('score');
const user = document.getElementById('userSelection');
const result = document.getElementById('result');
const btnReset = document.querySelector('#btnReset')
const cycle = document.querySelector("#text-cycle");
let i = 0;

function textCycle() {
    cycle.textContent = computerSelection[i];
    i = ++i % computerSelection.length;
}

function computerPlay() {
    
    
    let rockPaperScissors = Math.floor(Math.random() * 5);

    if (rockPaperScissors === 0 || rockPaperScissors === 3){
        return 'Rock';
    } else if (rockPaperScissors === 1 || rockPaperScissors === 4) {
        return 'Paper';
    } else if (rockPaperScissors === 2 || rockPaperScissors === 5) {
        return 'Scissors';
    } 
};

function play(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        playerScore++;
        return playerWin = 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        computerScore++;
        return playerLose = 'You lose! Scissors beat Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        tieGame++;
        return playerTie = 'Tie! Scissors meet Scissors.';
    }
    
    // ----------------------------------------------------------------------------

    else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        computerScore++;
        return playerLose = 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        tieGame++;
        return playerTie = 'Tie! Paper meets Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        playerScore++;
        return playerWin =  'You win! Scissors beat Paper.';
    } 
    
    // ----------------------------------------------------------------------------

    else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        tieGame++;
        return playerTie = 'Tie! Rock meets Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        playerScore++;
        return playerWin = 'You win! Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        computerScore++;
        return playerLose = 'You lose! Rock beats Scissors.';
    } 
    
    else {
        return error = 'Invalid input.';
    }
};

setInterval(textCycle, 70);

btn1.addEventListener("click", function () {
    user.textContent = btn1.textContent;
    result.textContent = play('rock', computerPlay());
    score.textContent = `Score: ${playerScore} - ${computerScore}`;
    return;
});

btn2.addEventListener("click", function () {
    user.textContent = btn2.textContent;
    result.textContent = play('paper', computerPlay());
    score.textContent = `Score: ${playerScore} - ${computerScore}`;
    return;
});

btn3.addEventListener("click", function () {
    user.textContent = btn3.textContent;
    result.textContent = play('scissors', computerPlay());
    score.textContent = `Score: ${playerScore} - ${computerScore}`;
    return;
});

btnReset.addEventListener('click', function() {
    location.reload(true);
});
