function nameMenuItem(item) {
  return `Delicious ${item}`;
}

function createMenuItem(newName, newPrice, newType) {
  var newItem = {
    name: newName,
    price: newPrice,
    type: newType,
  }
  return newItem;
}

function addIngredients(newIngredient, ingredients) {
  if (ingredients.includes(newIngredient)) {
  } else {
    ingredients.push(newIngredient);
  }
  return ingredients;
}

function formatPrice(initPrice) {
  return "$" + initPrice;
}

function decreasePrice(initPrice) {
  return initPrice * .9;
}

function createRecipe(newTitle, newIngredients, menuItemType) {
  var newRecipe = {
    title: newTitle,
    ingredients: newIngredients,
    type: menuItemType,
  }
  return newRecipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
