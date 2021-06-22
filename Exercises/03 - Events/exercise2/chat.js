

function send(){
    var room = document.getElementsByClassName('chat-room')[0];
    var input = document.getElementById('text');
    var p = document.createElement('p');
    var text = document.createTextNode(input.value);
    p.appendChild(text);
    room.appendChild(p);
    input.value = '';
}