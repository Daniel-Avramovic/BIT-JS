var $name = $("#singleMovieName");
var $imgRes = $("#imgResponse");
var $castAndSeasons = $("#castAndSeasons");
var $seasonsNumber = $("#sesonsNumber");
var $seasonsList = $("#seasonsList");
var $castList = $("#castList");
var $showInfo = $("#showInfo");
var $showEpisodes = $("#allEpisodes");
var $crew = $("#crew");
var $akas = $("#akas");
var but = $("#butEpisodes");
var butCrew = $("#butCrew");
var $singleSrc = $("#singleSrc");

$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("name");
  console.log(myParam);
  getShow(myParam);
  $singleSrc.on("keydown", function (event) {
    if (event.keyCode == 13) {
      $name.text("");
      $imgRes.text("");
      $showInfo.text("");
      $seasonsNumber.text("");
      $seasonsList.text("");
      $castList.text("");
      $showEpisodes.text("");
      $crew.text("");
      $akas.text("");
      // handleError.text("");
      var inputValue = $singleSrc.val();
      if (inputValue) {
        getShow(inputValue);
      };
      $singleSrc.val("");
    }
  });
});

function getShow(showName) {
  var request = $.ajax({
    url: "http://api.tvmaze.com/singlesearch/shows?q=" + showName,
    method: "GET",
  });
  request.done(function (response) {
    console.log(response);
    $name.text(response.name);
    $imgRes.append("<img src=" + response.image.original + ">");
    $showInfo.append(response.summary);
    var idShow = response.id;
    function getSesons() {
      var request = $.ajax({
        url: "http://api.tvmaze.com/shows/" + idShow + "/seasons",
        method: "GET",
      });
      request.done(function (response) {
        $seasonsNumber.text("Sesons" + "(" + response.length + ")");
        response.forEach(function (element) {
          var li = $(
            "<li>" + element.premiereDate + " - " + element.endDate + "</li>"
          );
          $seasonsList.append(li);
        });
      });
    }
    function getCast() {
      var request = $.ajax({
        url: "http://api.tvmaze.com/shows/" + idShow + "/cast",
        method: "GET",
      });
      request.done(function (response) {
        if (response.length == 0) {
          var p = $("<p>No information about cast!!!</p>");
          $castList.append(p);
        } else {
          response.forEach(function (element, i) {
            if (i > 9) {
              return false;
            }
            var li = $("<li>" + element.person.name + "</li>");
            $castList.append(li);
          });
        }
      });
    }
    function getEpisodes() {
      var request = $.ajax({
        url: "http://api.tvmaze.com/shows/" + idShow + "/episodes",
        method: "GET",
      });
      request.done(function (response) {
        // if(response.length == 0){

        // }
        response.forEach(function (element, i) {
          var li =
            "<li class =" +
            "hide" +
            " >S" +
            element.season +
            "E" +
            element.number +
            ": " +
            element.name +
            " </li>";
          $showEpisodes.append(li);
        });
      });
    }
    function getCrew() {
      var request = $.ajax({
        url: "http://api.tvmaze.com/shows/" + idShow + "/crew",
        method: "GET",
      });
      request.done(function (response) {
        response.forEach(function (element, i) {
          var li =
            "<li class = hide1>" +
            element.type +
            ":<br>" +
            element.person.name +
            "</li>";
          $crew.append(li);
        });
      });
    }
    function getAkas() {
      var request = $.ajax({
        url: "http://api.tvmaze.com/shows/" + idShow + "/akas",
        method: "GET",
      });
      request.done(function (response) {
        if (response.length == 0) {
          var p = "<li>No information about Aka's!!!</li>";
          $akas.append(p);
        } else {
          response.forEach(function (element, i) {
            if (i > 7) {
              return false;
            }
            var li = "<li>" + element.name + "</li>";
            $akas.append(li);
          });
        }
      });
    }
    getSesons();
    getCast();
    getEpisodes();
    getCrew();
    getAkas();
    but.on("click", function () {
      $(".hide").toggle();
    });
    butCrew.on("click", function () {
      $(".hide1").toggle();
    });
  });
}
