import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
  lettuce: 0.5,
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
    loading: false,
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

  cancelOrderHandler = () => {
    this.setState({ordering: false});
  }

  continueOrderHandler = () => {
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'John McClane',
        address: {
          street: '100 1st Street',
          zipCode: '12345'
        },
        email: 'test@abc.com'
      },
      deliveryMethod: 'delivery'
    }
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({loading: false, ordering: false});
      })
      .catch(err => {
        this.setState({loading: false});
      });
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = <OrderSummary
      ingredients={this.state.ingredients}
      price={this.state.totalPrice}
      cancelOrder={this.cancelOrderHandler}
      continueOrder={this.continueOrderHandler}
    />;
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <React.Fragment>
        <Modal show={this.state.ordering} closeModal={this.cancelOrderHandler}>
          {orderSummary}
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
