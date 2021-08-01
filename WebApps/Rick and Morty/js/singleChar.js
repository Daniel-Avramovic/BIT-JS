import { backTo } from "./data.js";
import { getGender, getImg, getLocation, getName, getSpecs, getStatus } from "./uiSingleChar.js";

const urlParams = new URLSearchParams(window.location.search);
const myParam = parseFloat(urlParams.get("id"));
const body = document.querySelector('body');
const back = document.querySelector('#back');

body.style.backgroundImage = "url(https://m.media-amazon.com/images/M/MV5BZmZhNWMyODgtMzA0OC00NWFhLTllODQtYmJkZjYxYWU4MGU1XkEyXkFqcGdeQWFybm8@._V1_.jpg)";
const singleSrc = () => {
    const url = `https://rickandmortyapi.com/api/character/${myParam}`;
    fetch(url).then((response) => response.json())
    .then((data) => {
        console.log(data);
        getImg(data.image);
        getName(data.name);
        getGender(data.gender);
        getStatus(data.status);
        getSpecs(data.species);
        getLocation(data.location.name);
    })
}
body.addEventListener('load', singleSrc());
back.addEventListener('click', backTo);
