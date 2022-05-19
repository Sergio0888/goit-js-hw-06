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

console.log(listIngredientsEl)

const addItem =  ({} = {}) => {
  const itemListEl = document.createElement('li');
  itemListEl.classList.add('item');

  return itemListEl;
};

const ingredientsArray = ingredients.map(el => {
  console.log(addItem(el));
  addItem(el).textContent = 'el';
  return addItem(el);
});


listIngredientsEl.append(...ingredientsArray)