import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.checkoutSummary}>
            <h1>We hope you enjoy!</h1>
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="danger"
                clicked>Cancel</Button>
            <Button btnType="success"
                clicked>Continue</Button>
        </div>
    );
}

export default checkoutSummary;