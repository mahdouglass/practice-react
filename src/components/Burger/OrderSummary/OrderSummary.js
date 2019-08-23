import React, { Component } from "react";

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillMount() {
    console.log('[Order Summary] component will mount');
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>Your burger includes the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Total: <strong>${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="danger" clicked={this.props.cancelOrder}>Cancel</Button>
        <Button btnType="success" clicked={this.props.continueOrder}>Continue</Button>
      </React.Fragment>
    );
  }
};

export default OrderSummary;
