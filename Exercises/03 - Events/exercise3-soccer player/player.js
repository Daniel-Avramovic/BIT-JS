var nodeGame = document.querySelector('body');
var player = document.getElementById('play');
var stop = document.querySelector('button');

function move(event){
    var x = event.clientX;
    var y = event.clientY;
    player.style.top = y - 50;
    player.style.left = x - 50;
};
nodeGame.addEventListener('click', move);


function stopMove(){
    nodeGame.removeEventListener('click', move);
}
