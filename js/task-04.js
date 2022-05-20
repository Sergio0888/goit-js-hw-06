'use strict'
let counterValue = document.querySelector('#value');


const decrementBtnEl = document.querySelector('button[data-action="decrement"]')
const incrementBtnEl = document.querySelector('button[data-action="increment"]')


const addNumberOfValue = () => {
    return counterValue.innerHTML = Number(counterValue.innerHTML) + 1
}
const removeNumberOfValue = () => {
    return counterValue.innerHTML = Number(counterValue.innerHTML) - 1
}


incrementBtnEl.addEventListener('click', addNumberOfValue);
decrementBtnEl.addEventListener('click', removeNumberOfValue);
