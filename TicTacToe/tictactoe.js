
let currentPlayer = "X";
let gameEnded = false;
const board = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

let winnerMessage;

function playerMove(index) {
  if (!gameEnded && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementById(`cell-${index}`).innerText = currentPlayer;
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      winnerMessage = document.createElement("div");
      winnerMessage.innerText = `Player ${board[a]} wins!`;
      document.getElementById("winner").appendChild(winnerMessage);
      highlightCells(combination);
      endGame();
      return;
    }
  }

  if (!board.includes("")) {
    winnerMessage = document.createElement("div");
    winnerMessage.innerText = "It's a tie!";
    document.getElementById("winner").appendChild(winnerMessage);
    endGame();
  }
}

function highlightCells(combination) {
  for (const index of combination) {
    const cell = document.getElementById(`cell-${index}`);
    cell.style.backgroundColor = "green";
    cell.style.color = "white";
  }
}

function endGame() {
  gameEnded = true;
}

function resetGame() {
  currentPlayer = "X";
  gameEnded = false;
  board.fill("");
  removeWinnerMessage();
  resetCellStyles();
}

function removeWinnerMessage() {
  if (winnerMessage) {
    winnerMessage.remove();
    winnerMessage = null;
  }
}

function resetCellStyles() {
  for (const cell of cells) {
    cell.innerText = "";
    cell.style.backgroundColor = "";
    cell.style.color = "";
  }
}

const cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    playerMove(i);
  });
}

const restartBtn = document.getElementById("restart-button");

restartBtn.addEventListener("click", resetGame);
