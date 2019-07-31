import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: updatePrice, 
      ingredients: updateIngredients
    });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = oldPrice - priceSubtraction;
    this.setState({
      totalPrice: updatePrice, 
      ingredients: updateIngredients
    });
  }

  render () {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </React.Fragment>
    )
  }
}

export default BurgerBuilder;
