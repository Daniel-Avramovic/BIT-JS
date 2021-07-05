var input = $('input');
var errorElement = $('.alert');
var url = "https://api.github.com/search/users?q=";
var cardHolder = $('.cardHolder');

function search(inputValue){
    $.ajax({
        url:`${url}${inputValue}`,
        method: "GET"
    }).done(function(response){
        cardHolder.html("");
        if(response.items.length == 0){
            errorElement.text('No results!!!');
            return;
        } else{
            response.items.forEach(function(item){
               var card = $(`<div class = col-4><div class = 'card'><img src = '${item.avatar_url}'><div class = 'card-body'><h5 class = 'card-title'>${item.login}</h5><a href = '${item.html_url}' target = '_blank' class = 'btn btn-primary'>Go to profile</a></div></div></div>`);
                cardHolder.append(card);
            })
        }
    }).fail(function(){
        errorElement.text("Network error!!!");
        errorElement.toggle();
    })
}

function searchHeandler(event){
    if(event.keyCode == 13){
        var inputValue = input.val();
        input.blur();
        if(!inputValue){
            errorElement.text('Input is required!!!');
            errorElement.toggle();
            return;
        }
        search(inputValue);
    }
}
function clearInput(){
    input.val("");
    errorElement.text("");
    errorElement.css('display', 'none');
}
input.on('keydown', searchHeandler);
input.on('focus', clearInput);