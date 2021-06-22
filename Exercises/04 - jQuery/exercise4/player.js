$(document).ready(function () {
  var nodeGame = $("body");
  var player = $("#play");
  var stop = $("button");

  function move(event) {
    var x = event.clientX;
    var y = event.clientY;
    $(player).css({ top: y - 50, left: x - 50 });
  }
  nodeGame.on("click", move);

  stop.on("click", stopMove);
  function stopMove() {
    nodeGame.off("click", move);
  }
});

// var positionX = event.clientX - this.offsetLeft - 100;
//     var positionY = event.clientY - this.offsetTop - 50;
//$(function(){
//     $('.teren').on('click',move) ;
//   function move(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     $('.igrac').css({"position":"absolute",
//                       "left": `${x}px`,
//                       "top" : `${y}px` });
//   };
//   $('#stop').on('click', stop);
//       function stop(event){
//           $('.teren').off('click', move)
//       }
//   })()
