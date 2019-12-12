import React from 'react';

import classes from './input.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={classes.inputElement} {...props.elementConfig} value={props.value} />
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.inputElement} {...props.elementConfig} value={props.value} />
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.inputElement}
                    value={props.value}>
                    <option></option>
                </select>
            );
            break;
        default:
            inputElement = <input className={classes.inputElement} {...props.elementConfig} value={props.value} />
            break;
    }

    return (
        <div className={classes.input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;