let cells = document.getElementsByClassName("cell");

let board = ["","","","","","","","",""];

let player = "X";

let gameOver = false;

function play(i){

if(board[i] != "" || gameOver){
return;
}



board[i] = player;
cells[i].innerHTML = player;

checkWinner();
checkDraw();

if(gameOver){
return;
}

if(player == "X"){
player = "O";
}else{
player = "X";
}

document.getElementById("status").innerHTML = "Player " + player + " Turn";

}
function checkWinner(){

if(board[0]==player && board[1]==player && board[2]==player) win(0,1,2);
else if(board[3]==player && board[4]==player && board[5]==player) win(3,4,5);
else if(board[6]==player && board[7]==player && board[8]==player) win(6,7,8);
else if(board[0]==player && board[3]==player && board[6]==player) win(0,3,6);
else if(board[1]==player && board[4]==player && board[7]==player) win(1,4,7);
else if(board[2]==player && board[5]==player && board[8]==player) win(2,5,8);
else if(board[0]==player && board[4]==player && board[8]==player) win(0,4,8);
else if(board[2]==player && board[4]==player && board[6]==player) win(2,4,6);

}

function win(a,b,c){

cells[a].style.background="lightgreen";
cells[b].style.background="lightgreen";
cells[c].style.background="lightgreen";

document.getElementById("status").innerHTML = "Player " + player + " Wins!";

gameOver = true;

}
function checkDraw(){

let count = 0;

for(let i = 0; i < 9; i++){
if(board[i] != ""){
count++;
}
}

if(count == 9 && gameOver == false){
document.getElementById("status").innerHTML = "It's a Draw!";
gameOver = true;
}

}

function resetGame(){

for(let i=0;i<9;i++){
board[i] = "";
cells[i].innerHTML = "";
cells[i].style.background="white";
}

player = "X";
gameOver = false;

document.getElementById("status").innerHTML = "Player X Turn";

}