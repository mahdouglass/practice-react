import React, { Component } from "react";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className="breadBottom"></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className="breadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                )
                break;
            case ('meat'):
                ingredient = <div className="meat"></div>
                break;
            case ('cheese'):
                ingredient = <div className="cheese"></div>
                break;
            case ('bacon'):
                ingredient = <div className="bacon"></div>
                break;
            case ('salad'):
                ingredient = <div className="salad"></div>
                break;
            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
