document.addEventListener("DOMContentLoaded", function () {
  console.log(document.querySelectorAll("body ul li"));
  var new1 = document.querySelectorAll("body ul")[1].classList.add("color");
  var boja = document.querySelectorAll("body ul li");
  change(boja);
  var new2 = document.querySelectorAll("body ul")[2];
  changeLi(new2);
});

function change(ul) {
  for (var i = 0; i < ul.length; i++) {
    var element = ul[i];
    element.className = "drugaBoja";
  }
}

function changeLi(ul) {
  var a = ul.children.length;
  for (var i = 0; i < a; i++) {
    var element = ul.children[i];
    element.className = "trecaBoja";
    var text = element.innerHTML;
          element.innerHTML = text.toUpperCase();
    
  }
}
