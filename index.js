class Ingredient {
  constructor(name, location, cost) {
      this._name = name;
      this._location = location;
      this._cost = cost;
  }

  get name() {
      return this._name;
  }

  get location() {
      return this._location;
  }

  set location(newLocation) {
      this._location = newLocation;
  }

  get cost() {
      return this._cost;
  }

  set cost(newCost) {
      this._cost = newCost;
  }
}
class Meal {
    constructor(name, mealType, ingredients) {
        this._name = name;
        this._ingredients = ingredients; //ingredient name, ingredient quantity
        this._mealType = mealType;
    }

    get cost() {
        let totalCost = 0  
        for (let i = 0; i < this._ingredients.length; i++) {
            totalCost += this._ingredients[i][0]['cost'] * this._ingredients[i][1]  /*cost per item times num of items */ 
          }
        return totalCost; 
    }
}

const shoppingList {
    meals: [],
    ingredients: []
}

//Ingredients are composed of name, location, cost.
const pasta = new Ingredient('Gluten Free Pasta', 'Free From', 1);
const beans = new Ingredient('Kidney Beans', 'Tinned Goods', 0.29);
const corn = new Ingredient('Super Sweetcorn', 'Tinned Goods', 0.89);
const sauce = new Ingredient('Grilled Peppers Tomato Pesto', 'European Sauces', 1.29);

//Meals are composed of name, meal type, and ingredient list (with corresponding ingredient quantity).
const pastaMelt = new Meal('Pasta Melt', 'lunch', [[pasta, 1], [sauce, 1], [beans, 1], [corn, 2]] ) 

console.log(pastaMelt.cost)