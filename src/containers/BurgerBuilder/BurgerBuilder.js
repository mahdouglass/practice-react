import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    canOrder: false,
    ordering: false,
  }

  updateOrderState = (ingredients) => {
    const sumOfIngredients = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sumOfIngredients, el) => {
        return sumOfIngredients + el;
      }, 0);
      this.setState({canOrder: sumOfIngredients > 0});
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
    this.updateOrderState(updateIngredients);
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
    this.updateOrderState(updateIngredients);
  }

  orderHandler = () => {
    this.setState({ordering: true});
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Modal show={this.state.ordering}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          canOrder={this.state.canOrder}
          ordered={this.orderHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </React.Fragment>
    )
  }
}

export default BurgerBuilder;
