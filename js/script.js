console.log("hello")
// TODO: keep track of ties
let win = 0;
let loss = 0;
// let ties = 0;
let round = 1;

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
    round = 1;
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

    // TODO: check if the user has "please select your weapon (-1) value"
    // do not move forward if wrong drop down is selected

    // check the increment, incrementing too early

    if (playerSelection === computerSelection) {
        return (round++, "It is a tie!<br> " + "End of Round: " + round + " Wins: " + win + " Losses: " + loss)
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return (round++, win++, "You Win!<br> " + " End of Round: " + round + " " + playerSelection + " Beats " + computerSelection + " Wins: " + win + " Losses: " + loss)
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return (round++, loss++, "You Lose!<br> " + " End of Round: " + round + " " + computerSelection + " Beats " + playerSelection + " Wins: " + win + " Losses: " + loss)
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return (round++, win++, "You Win!<br> " + " End of Round: " + round + " " + playerSelection + " Beats " + computerSelection + " Wins: " + win + " Losses: " + loss)
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return (round++, loss++, "You Lose!<br> " + " End of Round: " + round + " " + computerSelection + " Beats " + playerSelection + " Wins: " + win + " Losses: " + loss)
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return (round++, win++, "You Win!<br> " + " End of Round: " + round + " " + playerSelection + " Beats " + computerSelection + " Wins: " + win + " Losses: " + loss)
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return (round++, loss++, "You Lose!<br> " + " End of Round: " + round + " " + computerSelection + " Beats " + playerSelection + " Wins: " + win + " Losses: " + loss)
    }

}


function game() {

    const resultsWindow = document.querySelector('.game-window__results');
    const playButton = document.querySelector('#play-button');
    let playerSelection = madeMyChoice(this);
    let computerSelection = computerPlay();
    document.getElementById("round-number").innerHTML = round;

    resultsWindow.innerHTML = playRound(playerSelection, computerSelection);

    if (round < 5) {
        console.log("End of Round " + round + " Start another game...")
    }
    else if (round === 5) {
        playButton.setAttribute('disabled', true);
        resultsWindow.innerHTML = "End of game <br>";
        resultsWindow.append("Game Results: " + " Player Wins: " + win + " Computer wins: " + loss)
        if (win > loss) {
            console.log("Congrats you won best of 5!! ");
        }
        else if (win < loss) {
            console.log("Sorry you lose best of 5!! ");
        }
        else if (win === loss) {
            console.log("It is a tie! ");
        }
    }

}