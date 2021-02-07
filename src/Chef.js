class Chef {
  constructor(name, restaurant, isMorning, foodItem) {
    this.name = name;
    this.restaurant = restaurant;
    this.greetCustomer = function(name, isMorning) {
      if (isMorning === true) {
        return `Good morning, ${name}!`;
      } else {
        return `Hello, ${name}!`;
      }
    }
    this.checkForFood = function(foodItem) {
      if (this.restaurant.menus[foodItem.type].includes(foodItem)) {
        return `Yes, we're serving ${foodItem.name} today!`;
      } else {
        return `Sorry, we aren't serving ${foodItem.name} today.`;
      }

    }
  }
}

module.exports = Chef;
