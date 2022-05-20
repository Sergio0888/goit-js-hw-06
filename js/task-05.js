'use strict'

const inputformEl = document.querySelector('#name-input')
let otputFormEl = document.querySelector('#name-output')

console.log(inputformEl);
console.log(otputFormEl);

const onInputAddEl = (event) => {
    if (event.target.value.length > 0) {
        otputFormEl.innerHTML = event.target.value
        return
    } 
    otputFormEl.innerHTML = 'Anonymous';
    
}

inputformEl.addEventListener('input',onInputAddEl);

