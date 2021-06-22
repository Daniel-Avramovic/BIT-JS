

function changeBackColor(){
    var background = document.querySelector('div');
    console.log(document.querySelector('div'));
    if(!background.style.backgroundColor){
        background.style.backgroundColor = 'blue';
    } else if(background.style.backgroundColor == 'blue'){
        background.style.backgroundColor = 'red';
    }else if(background.style.backgroundColor == 'red'){
        background.style.backgroundColor = 'blue';
};
}
function backColor(){
    var background = document.querySelector('div');
    background.style.background = 'none';
}

// var button1 = document.querySelector("button");


// button1.addEventListener("click", function colorSilver() {

//     document.body.classList.toggle("colorsilver");

// });

