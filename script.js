

let gameState = [[ 0, 0, 0], [0, 0, 0], [0, 0, 0]];

function playGame(){
    let gameOver = false;
    let turn = 0;

    while(!gameOver){
        
            let num1 = parseInt(prompt("Enter row number: "))-1;
            let num2 = parseInt(prompt("Enter column number: "))-1;
            if(turn==0){
                gameState[num1][num2] = 1;
                turn = 1;
                console.log(gameState);
            }
            else{
                gameState[num1][num2] = 2;
                turn = 0;
                console.log(gameState);
            }


    }
}

function gameOver(){
    for(let i = 0; i<3; i++){
        let count1 = 0;
        let count2 = 0;
        for(let j = 0; j<3; j++){
            if(gameState[i][j]==1){
                count1++;
            }
            else if(gameState[i][j]==2){
                count2++;
            }
        }
    }
    if(count1==3){
        return "Player 1 wins";
    }
    else if(count2==3){
        return "Player 2 wins"
    }
    else{
        return "Tie"
    }
}
playGame();
