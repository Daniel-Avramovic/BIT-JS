$(document).ready(function () {
    var butt = $('button');
    console.log(butt)

    butt.on('click', changeImage)
    function changeImage(){
        var request = $.ajax({
            url: "https://dog.ceo/api/breeds/image/random",
            method: "GET"
        })
        request.done(function(response){
            console.log(response);
            var img = $('<img>').attr('src', response.message);
            $('body').append(img);
        })
    }
});
