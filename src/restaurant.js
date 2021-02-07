function createRestaurant(newName) {
  var newRestaurant = {
    name: newName,
    menus: {  breakfast: [], lunch: [], dinner: [],  },
  }
  return newRestaurant;
}

function addMenuItem(restaurant, newItem) {
  var newRestaurant = restaurant;
  if (!newRestaurant.menus[newItem.type].includes(newItem)) {
     newRestaurant.menus[newItem.type].push(newItem);
  }
  return newRestaurant;
}

function removeMenuItem(restaurant, itemName, menu) {
  var length = restaurant.menus[menu].length;
  for (var i = 0; i < length; i++) {
    if (restaurant.menus[menu][i].name === itemName) {
      restaurant.menus[menu].splice(i, 1);
        return(`No one is eating our ${itemName} - it has been removed from the ${menu} menu!`);
    }
  }
  return(`Sorry, we don't sell ${itemName}, try adding a new recipe!`);
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
