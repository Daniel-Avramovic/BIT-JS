function test() {
  var welcomeMessage = "Hello World!";
  console.log(welcomeMessage);
}
test();

console.log("-----------");

function printBrowserInfo() {
  console.log(navigator.platform);
  console.log(navigator.appVersion);
  console.log(navigator.vendor);
}
printBrowserInfo();

console.log("-----------");

function isOnline() {
  if (navigator.onLine) {
    console.log("Online");
  } else {
    console.log("Ofline");
  }
}
isOnline();

console.log("-----------");

function getScreenDimension() {
  console.log(
    "Available screen dimension" + screen.availWidth + "x" + screen.availHeight
  );
  console.log("screen dimesnsion:" + screen.width + "x" + screen.height);
}
getScreenDimension();

console.log("-----------");

function urlData() {
  console.log("full url addres:" + location.href);
  console.log("host name:" + location.hostname);
  console.log("user protocol:" + location.protocol);
  console.log("requestParams:" + location.search);
}
urlData();

console.log("-----------");

function reloadPage() {
  location.reload();
}

function redictPage(address) {
  location.assign(address);
}

console.log("-----------");

function storData(key, value) {
  localStorage.setItem(key, value);
}
function storeDataS(key, value) {
  sessionStorage.setItem(key, value);
}
storData("dva", "nesto drugo");
storeDataS("name", "Daniel");

console.log(localStorage.getItem("dva"));
console.log(sessionStorage.getItem("name"));

function removeDate(key) {
  localStorage.removeItem(key);
}
function removeDataS(key) {
  sessionStorage.removeItem(key);
}

function clearAll() {
  localStorage.clear();
  sessionStorage.clear();
}
// removeDate('dva');
// removeDataS('name');

clearAll();
console.log(localStorage.getItem("dva"));
console.log(sessionStorage.getItem("name"));

console.log("------------------");

console.log(history.back());

function welcome() {
  alert("Hello");
}
welcome();

function pro() {
  var user = prompt("How are you?");
  var userAnswer = confirm("We will submit this answer now! " + user);
  if (userAnswer) {
    alert("Success!!!");
  }
}
pro();

console.log("------------");

var res = [];
function randomNumber(max) {
  for (var i = 0; i < 10; i++) {
    var res1 = Math.random() * max;
    res.push(res1);
  }
  console.log(res);
  return res;
}
randomNumber(50);

console.log("-------------");


var roundArr = [];
function arrRound(arr) {
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    roundArr.push(Math.round(element));
  }
  console.log(roundArr);
  return roundArr;
}
arrRound(res);
var floorArr = [];
function arrFloor(arr) {
   for (var i = 0; i < arr.length; i++) {
     var element = arr[i];
     floorArr.push(Math.floor(element));
   }
   console.log(floorArr);
   return floorArr;
 }
 arrFloor(res);
var max = 0;
function findMax(arr){
   max = Math.max(...arr);
   console.log('max is: ' + max);
   return max;
}
findMax(floorArr);

console.log("-------------");

var newDate = new Date();
console.log(newDate);
console.log(newDate.getHours() + ':' +newDate.getMinutes());
console.log('date is: ' + newDate.getDate());