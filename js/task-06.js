'use strict'

const inputFormEl = document.querySelector('#validation-input')

console.log(Number(inputFormEl.dataset.length));

const onValidationInput = (event) => {

    if (event.target.value.length === Number(inputFormEl.dataset.length)) {
        inputFormEl.classList.remove('invalid')
        inputFormEl.classList.add('valid')
        return
    }
        inputFormEl.classList.remove('valid')
        inputFormEl.classList.add('invalid') 
};

inputFormEl.addEventListener('blur', onValidationInput)

