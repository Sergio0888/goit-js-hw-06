'use strict'

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients')

const addItem =  ((el) => {
  const itemListEl = document.createElement('li');
  itemListEl.textContent = el
  itemListEl.classList.add('item');

  return itemListEl;
});

const ingredientsArray = ingredients.map(el => {
  return addItem(el);
});

listIngredientsEl.append(...ingredientsArray)