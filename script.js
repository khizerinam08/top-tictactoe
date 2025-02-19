let gameState = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let gameOver = false;
let turn = 0;

const display = document.querySelector(".display>p");

function makeMove(event) {
    if (!event.target.classList.contains('box') || gameOver) return;
    
    const [row, col] = event.target.id.split(" ").map(num => parseInt(num) - 1);
    
    // Check if cell is already taken
    if (gameState[row][col] !== 0) return;
    
    // Make move
    const currentPlayer = turn === 0 ? 1 : 2;
    gameState[row][col] = currentPlayer;
    
    // Update UI
    event.target.textContent = currentPlayer === 1 ? "X" : "O";
    event.target.style.fontFamily = "Arial, san-serif";
    
    
    // Check for winner
    const winner = checkGame();
    if(!gameState.flat().includes(0)){
        display.textContent ="Tie!";
    }
    if (winner === 1 || winner === 2) {
        gameOver = true;
        display.textContent ="Player " + winner + " is the winner!";
        return;
    } 
    
    // Switch turns
    turn = 1 - turn;
}

function checkGame(){
    // Check rows and columns
    for(let i = 0; i < 3; i++){
        if(gameState[i][0] !== 0 && gameState[i][0] === gameState[i][1] && gameState[i][1] === gameState[i][2]){
            return gameState[i][0];
        }
        else if(gameState[0][i] !== 0 && gameState[0][i] === gameState[1][i] && gameState[1][i] === gameState[2][i]){
            return gameState[0][i];
        }
    }

    // Check diagonals
    if(gameState[1][1] !== 0 && gameState[0][0] === gameState[1][1] && gameState[1][1] === gameState[2][2]){
        return gameState[1][1];
    }
    else if(gameState[1][1] !== 0 && gameState[2][0] === gameState[1][1] && gameState[1][1] === gameState[0][2]){
        return gameState[1][1];
    }
    
    // Return 0 if no winner
    return 0;
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', makeMove);
    });
});
