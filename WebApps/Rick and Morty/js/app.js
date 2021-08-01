
import { getApiResult } from "./data.js";
import { resetResult, showOnPage } from "./ui.js";

const $buttPrevious = document.querySelector("#previous");
const $buttOne = document.querySelector("#one");
const $buttTwo = document.querySelector("#two");
const $buttThree = document.querySelector("#three");
const $buttNext = document.querySelector("#next");

document.addEventListener("DOMContentLoaded", function () {
  onLoad();
  $buttNext.addEventListener("click", onLoad);
  $buttPrevious.addEventListener('click', previous);

});

let page = 0;
const onLoad = () => {
  if(page >=38){
    return;
  } else{
    page++;
  }
  // first solution:
  getApiResult(page).then((data)=>{
      resetResult();
      showOnPage(data);
  });
  //Second solution:
  // const url = `https://rickandmortyapi.com/api/character?page=${page}`
  // fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
      // resetResult();
      // showOnPage(data);
    // });
    
    return page;
};

const previous = () => {
  if(page <=1){
    return;
  } else{
    page--;
  }
  getApiResult(page).then((data)=>{
    resetResult();
    showOnPage(data);
});
  // const url = `https://rickandmortyapi.com/api/character?page=${page}`
  // fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     resetResult();
  //     showOnPage(data);
  //   });
};
// console.log(getApiResult(),'api res')
