import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = props => (
    <div className={classes.buildControls}>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                add={() => props.addIngredient(ctrl.type)}
                subtract={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className={classes.orderButton}
            disabled={!props.canOrder}
            onClick={props.ordered}
        >Order Now</button>
    </div>
);

export default buildControls;