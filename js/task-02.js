const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const ingredient = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');

  return item;
});
ingredientsEl.prepend(...ingredient);