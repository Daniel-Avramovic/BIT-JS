$(document).ready(function () {
    // $('.selected').removeClass('selected');
    var but = $('button');
    var target = $('div').last().children().odd();
    console.log(target);
    console.log(but);
    but.click(function(){
        $('.selected').removeClass('selected');
        target.addClass('selected');
    })
});