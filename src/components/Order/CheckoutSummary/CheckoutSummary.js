import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.checkoutSummary}>
            <h1>We hope you enjoy!</h1>
            <div className={classes.burgerWrapper}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="danger"
                clicked={props.checkoutCancel}>Cancel</Button>
            <Button btnType="success"
                clicked={props.checkoutContinue}>Continue</Button>
        </div>
    );
}

export default checkoutSummary;