////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
	move = move || getInput();
	    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
	move = move || randomPlay();  
	return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    console.log("these are the moves in getWinner " + playerMove + " " + computerMove);

    switch (playerMove) {
    	case "rock":
    		if (computerMove == "rock") {
    			winner = "tie";
    		}
    		else if (computerMove == "paper") {
    			winner = "computer";
    		}
    		else if (computerMove == "scissors") {
    			winner = "player";
    		} 
    		else {
    			console.log("invalid answers " + "playermove: " +playerMove + "computerMove: " + computerMove);
    		}
    		break;

    	case "paper":
    		if (computerMove == "rock") {
    			winner = "player";
    		}
    		else if (computerMove == "paper") {
    			winner = "tie";
    		}
    		else if (computerMove == "scissors") {
    			winner = "computer";
    		} 
    		else {
    			console.log("invalid answers " + "playermove: " +playerMove + "computermove: " + computerMove);
    		}
    		break;

    	case "scissors":
    		if (computerMove == "rock") {
    			winner = "computer";
    		}
    		else if (computerMove == "paper") {
    			winner = "player";
    		}
    		else if (computerMove == "scissors") {
    			winner = "tie";
    		} 
    		else {
    			console.log("invalid answers " + "playermove: " +playerMove + "computermove: " + computerMove);
    		}
    		break;

    }
    console.log("The winner switch statement resulted in this value: " + winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while ((playerWins < 5 ) && (computerWins < 5)) {
    	
    	switch (getWinner(getPlayerMove(), getComputerMove())) {
    		case "player" :
    			playerWins += 1;
    			console.log("Player Wins!");
    			break;

    		case "computer":
    			computerWins +=1;
    			console.log("Computer Wins!");
    			break;
    		default:
    		console.log("didn't go into either case in while loop.");
    	}
    	 console.log(playerWins + " " + computerWins);
     	}
      // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    console.log(playerWins + " " + computerWins);
    return [playerWins, computerWins];
}

playToFive();
