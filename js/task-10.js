'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputOfNumberEl = document.querySelector('#controls > input')
const createBtnEl = document.querySelector('#controls > button[data-create]')
const destroyBtnEl = document.querySelector('#controls > button[data-destroy]')
const boxOfElement = document.querySelector('#boxes')

function createBoxes(amount) {
  
  for (let i = 1; i <= amount; i += 1) {
    let newElements = document.createElement('div')
    newElements.style.cssText = 'width:30px; height:30px;'
    newElements.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(newElements)
  }
}
  

  // console.log(newElements);
  // return newElements;




const onCreateElements = (event) => {
  console.log(createBoxes(10));
  
};


const onNumberOfInput = (event) => {
  constnumberOfInputEl = Number(event.currentTarget.value);
};

// console.log(numberOfInputEl);


createBtnEl.addEventListener('click', onCreateElements)
inputOfNumberEl.addEventListener('input', onNumberOfInput)
