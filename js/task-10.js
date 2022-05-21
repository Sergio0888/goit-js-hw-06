'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputOfNumberEl = document.querySelector('#controls > input')
const createBtnEl = document.querySelector('#controls > button[data-create]')
const destroyBtnEl = document.querySelector('#controls > button[data-destroy]')
const boxOfElement = document.querySelector('#boxes')


function createBoxes(amount) {
  let newElements;
  let total = 20

  for (let i = 1; i <= amount; i += 1) {
      total += 10

    newElements = document.createElement('div')
    newElements.classList.add('newEl')
    newElements.style.width = `${total}px`;
    newElements.style.height = `${total}px`;
    newElements.style.backgroundColor = getRandomHexColor();

    boxOfElement.appendChild(newElements)
  }
}



function destroyBoxes() {
  const newCreateEl = document.querySelectorAll('.newEl')
  newCreateEl.forEach(el => el.remove())
}
const onRemoveElements = (event) => {
    destroyBoxes()
}



const onCreateElements = (event) => {
  createBoxes(Number(inputOfNumberEl.textContent))

};


const onNumberOfInput = (event) => {
  inputOfNumberEl.innerHTML = event.target.value
};





createBtnEl.addEventListener('click', onCreateElements)
inputOfNumberEl.addEventListener('input', onNumberOfInput)
destroyBtnEl.addEventListener('click', onRemoveElements)