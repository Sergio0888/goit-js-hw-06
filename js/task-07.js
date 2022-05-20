'use strict'

const inputOfSizeEl = document.querySelector('#font-size-control')
const onTextSize = document.querySelector('#text')
onTextSize.style.fontSize = `${inputOfSizeEl.value}px`;

const changeSizeOfText = (event) => {
    onTextSize.style.fontSize = `${event.target.value}px`
};

inputOfSizeEl.addEventListener('input', changeSizeOfText)
