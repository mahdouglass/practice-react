import React from "react";

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
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
        default:
            break;
    }
    return {

    };
};

export default burgerIngredient;
