let playerScore = 0;
let computerScore = 0;
let tieGame = 0;

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

function game() {

    for (;;) {
        const playerSelection = prompt('Enter your selection (Rock, Paper, Scissors): ').toLowerCase();
        const computerSelection = computerPlay(); 
        console.log(play(playerSelection, computerSelection) + ` Score: ${playerScore} - ${computerScore}`);

        if (playerScore === 5) {
            console.log(`You win. Final score: ${playerScore} - ${computerScore}`)
            break;
        } else if (computerScore === 5) {
            console.log(`You lose. Final score: ${playerScore} - ${computerScore}`)
            break;
        }
    };
};

game();