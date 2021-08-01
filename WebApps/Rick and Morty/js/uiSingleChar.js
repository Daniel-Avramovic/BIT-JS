const image = document.querySelector('#img');
const nameChar = document.querySelector('#name');
const gender = document.querySelector('#gender');
const statusChar = document.querySelector('#status');
const specs = document.querySelector('#specs');
const locationChar = document.querySelector('#location');

const getImg = (data) => {
    image.setAttribute('src', data);
};
const getName = (data) => {
    nameChar.textContent = `Name: ${data}`
};

const getGender = (data) => {
    gender.textContent = `Gender: ${data}`;
};

const getStatus = (data) => {
    statusChar.textContent = `Status: ${data}`;
};

const getSpecs = (data) => {
    specs.textContent = `Species: ${data}`;
};

const getLocation = (data) => {
    locationChar.textContent = `Location: ${data}`;
};

export{
    getImg,
    getName,
    getGender,
    getStatus,
    getSpecs,
    getLocation
}