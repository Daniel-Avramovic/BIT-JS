
const chuckUrl = "https://api.chucknorris.io/jokes/random";
const button = $('button');
const body = $('body');
const div = $('#div');
const img = $('#img');
$(document).ready(function () {
    fetch(chuckUrl).then(function(response){
        return response.json();
    }).then(function(data){
        img.text('');
        img.append(`<img src=${data.icon_url}>`);
        div.text(data.value);
    });  
});

button.on('click',function(){
    fetch(chuckUrl).then(function(response){
        return response.json();
    }).then(function(data){
        img.text('');
        img.append(`<img src=${data.icon_url}>`);
        div.text(data.value);
    });
});
