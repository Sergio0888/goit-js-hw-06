'use strict'

const loginFormEl = document.querySelector('.login-form');
const inputOfFormEl = document.querySelectorAll('.login-form input');
let obj = {};


const onCheckedForm = (event) => {
    event.preventDefault()

    if (inputOfFormEl[0].value.length > 0 && inputOfFormEl[1].value.length > 0) {
      obj.email = inputOfFormEl[0].value;
      obj.password = inputOfFormEl[1].value;
      console.log(obj);

      event.currentTarget.reset();
      return
    }
    alert('Пожалуйста, заполните все поля')
};

loginFormEl.addEventListener('submit', onCheckedForm)

