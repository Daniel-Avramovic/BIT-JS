
function changeBorder() {
  var form = document.querySelector("form");
  for (var i = 0; i < form.length; i++) {
    var element = form[i];
    if (element.hasAttribute("required") && element.value == "") {
      element.style.border = "1px solid red";
      alert("Input is invalid!!!");
    }
  }
}
