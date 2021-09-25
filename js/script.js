console.log("hello")
// TODO: keep track of ties
let win = 0;
let loss = 0;
let ties = 0;
let round =1;
let round_play = 0

let choice = [
    "Rock",
    "Paper",
    "Scissors"
]

function startNewGame(event) {
    console.log(event)
    const gameWindow = document.querySelector('.game-window');
    console.log(gameWindow);
    gameWindow.classList.remove('hidden');
    win = 0;
    loss = 0;
    //round++;
}
// refreshes page and reloads init values
function resetGame(event) {
    const roundNumber = document.querySelector('#round-number');
    const gameButtons = document.querySelector('.game-buttons');
    const playButton = document.querySelector('#play-button');
    const resultsWindow = document.querySelector('.game-window__results');
    console.log(gameButtons);
    gameButtons.classList.remove('hidden');
    console.log("game has been reset");
    win = 0;
    loss = 0;
    round = 1;
    round_play = 0;
    roundNumber.innerHTML = round;
    playButton.removeAttribute('disabled');
    resultsWindow.innerHTML = '';

}

function madeMyChoice() {
    let selection = document.getElementById("game-options")

    let selectionText = selection.options[selection.selectedIndex].text
    console.log(selectionText + " -> Player's choice ");
    return selectionText

}

function computerPlay() {
    let randomPlay = choice[Math.floor(Math.random() * choice.length)]
    console.log(choice.indexOf(randomPlay))
    console.log(randomPlay + " -> Computer's choice ")
    const computerSelection = choice.indexOf(randomPlay)
    return randomPlay
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    round++

    // TODO: check if the user has "please select your weapon (-1) value"
    // do not move forward if wrong drop down is selected

    // check the increment, incrementing too early

    if (playerSelection === computerSelection) {
        return (round_play++, ties++, "It is a tie!<br> " + "End of Round: " + round_play + "<br> " +" Wins: " + win + " Losses: " + loss + " Ties: " + ties) 
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return (round_play++, win++, "You Win!<br> " + " End of Round: " + round_play + "<br> " + playerSelection.toUpperCase() + " Beats " + computerSelection.toUpperCase() + "<br> Wins: " + win + " Losses: " + loss + " Ties: " + ties)
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return (round_play++, loss++, "You Lose!<br> " + " End of Round: " + round_play + "<br> " + computerSelection.toUpperCase() + " Beats " + playerSelection.toUpperCase() + "<br> Wins: " + win + " Losses: " + loss + " Ties: " + ties)
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return (round_play++, win++, "You Win!<br> " + " End of Round: " + round_play + "<br> " + playerSelection.toUpperCase() + " Beats " + computerSelection.toUpperCase() + "<br> Wins: " + win + " Losses: " + loss + " Ties: " + ties)
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return (round_play++, loss++, "You Lose!<br> " + " End of Round: " + round_play + "<br> " + computerSelection.toUpperCase() + " Beats " + playerSelection.toUpperCase() + "<br> Wins: " + win + " Losses: " + loss + " Ties: " + ties)
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return (round_play++, win++, "You Win!<br> " + " End of Round: " + round_play + "<br> " + playerSelection.toUpperCase() + " Beats " + computerSelection.toUpperCase() + "<br> Wins: " + win + " Losses: " + loss + " Ties: " + ties)
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return (round_play++, loss++, "You Lose!<br> " + "End of Round: " + round_play + "<br> " + computerSelection.toUpperCase() + " Beats " + playerSelection.toUpperCase() + "<br> Wins: " + win + " Losses: " + loss + " Ties: " + ties)
    }

}


function game() {

    const resultsWindow = document.querySelector('.game-window__results');
    const playButton = document.querySelector('#play-button');
    let playerSelection = madeMyChoice(this);
    let computerSelection = computerPlay();
    document.getElementById("round-number").innerHTML = round;
    linebreak = document.createElement("br");


    resultsWindow.innerHTML = playRound(playerSelection, computerSelection);

    if (round < 5) {
        console.log("End of Round " + round + " Start another game...")
    }
    else if (round_play === 5) {
        playButton.setAttribute('disabled', true);
        resultsWindow.innerHTML = "End of game <br>";
        resultsWindow.append("Game Results: ")
        resultsWindow.append(linebreak)
        resultsWindow.append(" Player Wins: " + win)
        resultsWindow.append(linebreak)
        resultsWindow.append(" Computer wins: " + loss)
        resultsWindow.append(linebreak)
        resultsWindow.append(" Ties: " + ties)


        if (win > loss) {
            console.log("Congrats you won best of 5!! ");
            resultsWindow.append(linebreak)
            resultsWindow.append("Congrats you won best of 5!! ")
        }
        else if (win < loss) {
            console.log("Sorry you lose best of 5!! ");
            resultsWindow.append(linebreak)
            resultsWindow.append("Sorry you lose best of 5!! ")
        }
        else if (win === loss) {
            console.log("It is a tie! ");
            resultsWindow.append(linebreak)
            resultsWindow.append("Nobody wins it is a tie!! ")
        }
    }

}