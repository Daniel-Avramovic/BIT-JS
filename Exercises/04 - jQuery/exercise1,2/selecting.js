$(document).ready(function(){
    // console.log($('li').text())
    $('li').first().css({
        'border-bottom': '1px solid black'
    });
    $('li').css({
        'text-transform': 'uppercase',
    });
    $('li.active').css({
        color:'red'
    })
    var li = $('li');
    var res = 0;
    for(var i = 0; i < li.length/2; i++){
        res = li[i];
    }
    console.log(res);
    $(res).css({
        'background-color': 'blue'
    })
})