document.addEventListener("DOMContentLoaded", function () {
  // console.log(document.querySelector('body ul').lastElementChild);
  alert(document.querySelector("body ul").firstElementChild.textContent);
  function changeText(string) {
    document.querySelector("body ul").lastElementChild.textContent = string;
  }
  changeText("Some new text");

  // console.log(document.getElementsByClassName('select1'))
//   console.log(document.getElementsByClassName("select1"));

  function add(array, node) {
    var sel = document.createElement("select");
    sel.setAttribute('name', 'cars');
    for (var i = 0; i < array.length; i++) {
      var opt = document.createElement("option");
      var text = document.createTextNode(array[i]);
      opt.appendChild(text);
      sel.appendChild(opt);
      
    }
    node.appendChild(sel);
    
  }
  add(["one", "two", "three"], document.getElementsByClassName('select1')[0])// nece sa klasom
});
