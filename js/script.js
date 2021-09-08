console.log("hello")

let win = 0;
let loss = 0;
let round = 0;

let choice = [
    "Rock",
    "Paper",
    "Scissors"
]

function computerPlay(){
 let randomPlay = choice[Math.floor(Math.random() * choice.length)]
 console.log(randomPlay)
 return randomPlay
}

//let playerSelection = "Rock"
//let computerSelection = computerPlay()

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return (round++ , "It is a tie! " + "End of Round: "+round +" Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return (round++, win++, "You Win! " + " End of Round: "+round+ " "+playerSelection+ " Beats " +computerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return (round++, loss++, "You Lose! " +" End of Round: "+round+ " " +computerSelection+ " Beats " +playerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return (round++, win++, "You Win! " + " End of Round: "+round+ " "+playerSelection+ " Beats " +computerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return (round++, loss++, "You Lose! " +" End of Round: "+round+ " " +computerSelection+ " Beats " +playerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return (round++, win++, "You Win! " + " End of Round: "+round+ " "+playerSelection+ " Beats " +computerSelection+ " Wins: "+win+ " Losses: "+loss)
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return (round++, loss++, "You Lose! " +" End of Round: "+round+ " " +computerSelection+ " Beats " +playerSelection+ " Wins: "+win+ " Losses: "+loss)
    }

}

function game(){
    let playerSelection = prompt("What is your selection? ");
    let computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection)
    
}