let computerSelection = '';

// Three options
let options = ['Rock', 'Paper', 'Scissors'];
        
// Function created for the computer to make a random choice
function computerplay(option) {
    let randnumber = Math.floor(Math.random() * options.length);
    computerSelection = option[randnumber];
    return computerSelection
    }


// Player selection
let score = 0;
let opponentscore = 0;        
    


    // Function that plays a single round of Rock Paper Scissors
function playRound() {
    let playerSelection = prompt("Choose Rock, Paper or Scissors.");

        if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
            alert("It's a tie!");
        } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
            alert("Player wins! Paper beats rock!");
            score ++;
        } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Scissors') {
            alert("Computer wins! Scissors beats paper!");
            opponentscore ++;
        } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
            alert("Player wins! Rock beats scissors!");
            score ++;
        } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Paper') {
            alert("Computer wins! Paper beats rock!");
            opponentscore ++;
        } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
            alert("Player wins! Scissors beats paper!");
            score ++;
        } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Rock') {
            alert("Computer wins! Rock beat scissors!");    
            opponentscore ++;
        } else {
            alert("You need to enter a correct choice.");
            }
           alert('Your score is ' + score + ' and your opponent\'s score is ' + opponentscore + '.');
        
        }

        //Function to play a 5 round game
                        
function game() {
    for (let i = 1; i < 5; i++) {
        computerplay(options)
        playRound()
    }
    if (opponentscore > score) {
        alert('You lost to a computer!');
    } else if (score > opponentscore) {
        alert('YOU WON LET\'S GO!') 
    } else {
        alert('It was a tie.')
    }
}


console.log(computerplay(options))
console.log(playRound())
console.log(game())
        