import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = props => (
    <div className={classes.buildControls}>
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
    </div>
);

export default buildControls;