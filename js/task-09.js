'use srtict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const colorChangeBtnEl = document.querySelector('.change-color')
const nameOfColorEl = document.querySelector('.color')
const bodyStyles = document.querySelector('body')

const onColorChange = (event) => {
  nameOfColorEl.innerHTML = getRandomHexColor()
  bodyStyles.style.backgroundColor = getRandomHexColor()
};


colorChangeBtnEl.addEventListener('click', onColorChange)