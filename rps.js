let moves = ["Paper", "Rock", "Scissors", "Paper"];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)];
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
    } else if (
        convertedComputer - convertedPlayer == 1 ||
        convertedPlayer - convertedComputer == 2
    ) {
        return 1;
    } else {
        return -1;
    }
}

function convertRoundToMessage(roundOutput) {
    switch (roundOutput) {
        case -1:
            return "The AI has won!";
        case 0:
            return "The game was a tie!";
        case 1:
            return "You have won!";
    }
}

function roundUpdate(inputPlay) {
    let computerPlay = getComputerChoice();
    let output = playRound(inputPlay, computerPlay);
    let winnerText = convertRoundToMessage(output);

    // Update display
    computerPlayDiv = document.querySelector(".computer-play");
    computerPlayDiv.textContent = "🤖 chooses " + computerPlay + "!";

    resultsTextDiv = document.querySelector(".results-box");
    resultsTextDiv.textContent = winnerText;

    scoreWin = document.querySelector(".human-score");
    scoreLose = document.querySelector(".computer-score");
    if (output == 1) {
        scoreWin.textContent = 1 + Number(scoreWin.textContent);
    } else if (output == -1) {
        scoreLose.textContent = 1 + Number(scoreLose.textContent);
    } else {
        scoreWin.textContent = 1 + Number(scoreWin.textContent);
        scoreLose.textContent = 1 + Number(scoreLose.textContent);
    }
}

humanBtns = document.querySelectorAll(".play-btn");
humanBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(btn.textContent);
        roundUpdate(btn.textContent);
    });
});

/*
let comp = getComputerChoice()
let output = playRound("Rock", comp);
console.log(convertRoundToMessage(output));
*/
