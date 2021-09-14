console.log("hello")

let win = 0;
let loss = 0;
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
function resetGame(event){
    console.log(event)
    const gameButtons = document.querySelector('.game-buttons');
    console.log(gameButtons);
    gameButtons.classList.remove('hidden');
    console.log("game has been reset");
    win = 0;
    loss = 0;
    round = 1;
    location.reload(); //maybe dont need this if resetting init values
}

function madeMyChoice() {
    let selection = document.getElementById("game-options")
    console.log(selection.value)
    console.log(selection)
    
    let selectionText = selection.options[selection.selectedIndex].text 
    console.log(selectionText+" -> Player's choice ");
    //console.log(choice.value)
    return selectionText

}

function computerPlay(){
 let randomPlay = choice[Math.floor(Math.random() * choice.length)]
 console.log(choice.indexOf(randomPlay))
 console.log(randomPlay+" -> Computer's choice ")
 const computerSelection = choice.indexOf(randomPlay)
 return randomPlay
}

//let playerSelection = "Rock"
//let computerSelection = computerPlay()

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //playerSelection = madeMyChoice(choice);
    //computerSelection = computerPlay();

    if (playerSelection === computerSelection){
        return (round++ , "It is a tie! " + "End of Round: "+(round-1) +" Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return (round++, win++, "You Win! " + " End of Round: "+(round-1)+ " "+playerSelection+ " Beats " +computerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return (round++, loss++, "You Lose! " +" End of Round: "+(round-1)+ " " +computerSelection+ " Beats " +playerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return (round++, win++, "You Win! " + " End of Round: "+(round-1)+ " "+playerSelection+ " Beats " +computerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return (round++, loss++, "You Lose! " +" End of Round: "+(round-1)+ " " +computerSelection+ " Beats " +playerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return (round++, win++, "You Win! " + " End of Round: "+(round-1)+ " "+playerSelection+ " Beats " +computerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return (round++, loss++, "You Lose! " +" End of Round: "+(round-1)+ " " +computerSelection+ " Beats " +playerSelection+ " Wins: "+win+ " Losses: "+loss)
    }

}


function game(){
    let playerSelection = madeMyChoice(this);
    let computerSelection = computerPlay();
    document.getElementById("round-number").innerHTML = " Round: "+round;
    //playRound(playerSelection, computerSelection)
    
    //console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection));

    if(round < 6){
        console.log("End of Round "+(round-1)+" Start another game...")
    }
    else if(round === 6){
        alert("End of game press Ok for Final Results")
        console.log("Game Results: "+" Player Wins: "+win+ " Computer wins: "+loss)
        if(win > loss){
            console.log("Congrats you won best of 5!! ");
        }
        else if(win < loss){
            console.log("Sorry you lose best of 5!! ");
        }
        else if(win === loss){
            console.log("It is a tie! ");
        }
    }

}