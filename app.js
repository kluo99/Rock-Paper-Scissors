let computerSelection = '';

// Three options
let options = ['Rock', 'Paper', 'Scissors'];
        
// Function created for the computer to make a random choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// Function created to end the game after someone reaches 5 points
function disableButton() {
    document.querySelectorAll('button').forEach(elem => {
        elem.disabled = true;
    })
}

// Player selection
let score = 0;
let opponentscore = 0;        
    

    // Function that plays a single round of Rock Paper Scissors
function playRound(decision) {
    let result = '';
    let computerSelection = computerPlay()

        if (decision == computerSelection) {
            alert("It's a tie!");
        
        } else if ((decision == 'Paper' && computerSelection == 'rock') ||
                  (decision == 'Scissors' && computerSelection == 'paper') ||
                  (decision == 'Rock' && computerSelection == 'scissors')) {
            score ++;
            result = ('<br>Player chose ' + decision + ' and Computer chose ' + computerSelection +
                 '! You win the round! <br><br>The score is ' + score + ' - ' + opponentscore );
            if (score == 5) {
                result = ('<br>CONGRATULATIONS THE PLAYER WINS!<br><br>Refresh to play again.')
                disableButton()
            }
        } else {
            opponentscore++;
            result = ('<br>Player chose ' + decision + ' and Computer chose ' + computerSelection +
            '! You lose the round! <br><br>The score is ' + score + ' - ' + opponentscore );
            if (opponentscore == 5) {
                result = ('<br>NICE TRY COMPUTER WINS!<br><br>Refresh to play again.')
                disableButton()
            }

        }
    document.getElementById('result').innerHTML = result;
}
        
                   

        //Function to play a 5 round game
                        
// function game() {
//     for (let i = 1; i < 5; i++) {
//         computerplay(options)
//         playRound()
//     }
//     if (opponentscore > score) {
//         alert('You lost to a computer!');
//     } else if (score > opponentscore) {
//         alert('YOU WON LET\'S GO!') 
//     } else {
//         alert('It was a tie.')
//     }
// }




const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    
    button.addEventListener('click', function() {
        playRound(button.id)
    });
  });