$(document).ready(function(){
    var div = $('<div>');
    $('body').prepend(div);

    var arr = ['img/a80.jpg', 'img/nokia.jpg', 'img/huawei.jpg'];
    for(var i = 0; i < arr.length; i++){
        var item = arr[i];
        var ele = $('<a>');
        $('div').prepend(ele);
        var img = $('<img>');
        img.attr('src', item);
        ele.html(img);
        img.css({
            'width': getRandomArbitrary(150,350),
            'height': getRandomArbitrary(150, 350)
        });
        img.each(function(index, element){
            if($(element).width()<200){
                $(element).css('border', '10px solid green');
            }

        })
    }

    function getRandomArbitrary(min, max) {
        return Math.floor( Math.random() * (max - min) + min);
      }
    console.log(getRandomArbitrary(150, 350));
});
//$(document).ready(function () {
//     var div=$('<div>')
//     $("body").prepend(div)
//     $("div").before("<h1>Amazing Galerry</h1>");
//     $("h1").css({
//                display: "grid",
//                "justify-content": "center",
//              });

//     var arr = ['green.jpg','green.jpg','green.jpg','green.jpg','green.jpg'];
//     for (var i = 0; i<=arr.length; i++) {
//         var item=arr[i];

//         var ele =$("<a>");
//         $('div').prepend(ele)

//         var aTag=$('<img>')
//         aTag.attr('src',item)
//         $('a').prepend(aTag)
        
//     }

// })
