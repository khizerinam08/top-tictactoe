

let gameState = [[ 0, 0, 0], [0, 0, 0], [0, 0, 0]];

function playGame(){
    let gameOver = false;
    let turn = 0;
    let winner = -1;
    let buttonPressed = 0;

    
    while(!gameOver){

            while(!buttonPressed){

            }
            if(turn==0){
                gameState[num1][num2] = 1;
                turn = 1;
                
            }
            else{
                gameState[num1][num2] = 2;
                turn = 0;
            }
            console.log(gameState);
            winner = checkGame();

            if(winner === 1 || winner === 2){
                gameOver = true;
                console.log("Player " + winner + " is the winner");
            }


    }
}

function checkGame(){
    for(let i = 0; i<3; i++){
        if(gameState[i][0]!==0 && gameState[i][0] === gameState[i][1] && gameState[i][1] === gameState[i][2]){
            return gameState[i][0];
        }
        else if(gameState[0][i]!==0 && gameState[0][i] === gameState[1][i] && gameState[1][i] === gameState[2][i]){
            return gameState[0][i];
        }

    }
        if(gameState[1][1] !== 0 && gameState[0][0] === gameState[1][1] === gameState[2][2]){
            return gameState[1][1];
        }
        else if(gameState[1][1] !== 0 && gameState[2][0] === gameState[1][1] === gameState[0][2]){
            return gameState[1][1];
        }
        
}
playGame();
