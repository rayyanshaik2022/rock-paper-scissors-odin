let moves = ['Paper', 'Rock', 'Scissors', 'Paper'];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)] // 1;
}

/*
 -1  => Player loss
  0  => Tie
  1  => Player win
*/
function playRound(playerMove, computerMove) {
    let convertedPlayer = moves.indexOf(playerMove);
    let convertedComputer = moves.indexOf(computerMove);

    if (convertedPlayer == convertedComputer) {
        return 0;
    }

    predictedBeatCompMove = moves.indexOf(playerMove) + 1;
    if (predictedBeatCompMove == convertedComputer) {
        return 1;
    } else {
        return -1;
    }

}

function convertRoundToMessage(roundOutput) {
    switch (roundOutput) {
        case -1:
            return "The computer has won!"
        case 0:
            return "The game was a tie!"
        case 1:
            return "You have won!"
    }

}

let comp = getComputerChoice()
let output = playRound("Rock", comp);
console.log(convertRoundToMessage(output));