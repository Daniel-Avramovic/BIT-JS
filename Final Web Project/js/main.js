var $input = $("#search");
var $srcResult = $("#result");
var handleError = $("#error");
var list = [];
var $singleMovie = $("#singleMovie");
$(document).ready(function () {
  getTop50();
  $input.on("keydown", function (event) {
    if (event.keyCode == 13) {
      handleError.text("");
      var inputValue = $input.val();
      if (inputValue) {
        search(inputValue);
      } else {
        handleError.text("Error!");
      }
      $input.val("");
    }
  });
});

function search(inputVal) {
  var request = $.ajax({
    url: "http://api.tvmaze.com/search/shows?q=" + inputVal,
    method: "GET",
  });
  request.done(function (response) {
    list = [];
    $srcResult.html("");
    response.forEach(function (element) {
      console.log(element);
      list.push(element);
    });
    console.log(list.length);
    showOnPage();
  });
}
function showOnPage() {
  list.forEach(function (element, i) {
    var div = $("<div class = col-lg-4>");
    div.addClass("col-md-6");
    // div.append("<img src=" + list[i].show.image.original + ">");
    var imgSource = list[i].show.image;
    var noImg =
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png";
    if (imgSource) {
      div.append("<img src=" + list[i].show.image.original + ">");
    } else {
      div.append("<img src=" + noImg + ">");
    }
    div.append("<p class = 'text-primary'>" + list[i].show.name + "</p>");
    // div.append("<a href = list[i].show.url target = _blank>" + list[i].show.name + "</a>" )
    div.on("click", function () {
      console.log(list[i].show.url);
      window.location;
      console.log(window.location.href);
      window.location.href = "pageInfoMovie.html?name=" + list[i].show.name;
    });
    $srcResult.append(div);
  });
}
function getTop50() {
  var request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET",
  });
  request.done(function (response) {
    var div = $("<div class = col-lg-4>");
    div.addClass("col-md-6");
    // console.log(response);
    response.sort(function (a, b) {
      return b.rating.average - a.rating.average;
    });
    // console.log(response, ' sort')
    for (var i = 0; i < 50; i++) {
      list.push(response[i]);
    }
    // list.sort(function(a, b){return b.rating.average-a.rating.average});
    console.log(list);
    displayTop50();
  });
}
function displayTop50() {
  list.forEach(function (element, i) {
    var div = $("<div class = col-lg-4>");
    div.addClass("col-md-6");
    div.append("<img src=" + list[i].image.original + ">");
    div.append("<p class = 'text-primary'>" + list[i].name + "</p>");
    $srcResult.append(div);
    div.on("click", function () {
      console.log(list[i].url);
      window.location;
      console.log(window.location.href);
      window.location.href = "pageInfoMovie.html?name=" + list[i].name;
    });
  });
}
