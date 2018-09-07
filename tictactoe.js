console.log("Welcs:)");
//Restart game button
var restart = document.querySelector("#b");

//Grab all the squares
var squares = document.querySelectorAll('td');

//Clear all the squares
function clearBoard(){
  for(var i=0;i<squares.length;i++){
    squares[i].textContent='';
  }
}

restart.addEventListener('click',clearBoard);
