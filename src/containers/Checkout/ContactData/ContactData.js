import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
    }

    render () {
        return (
            <div className={classes.contactData}>
                <h4>Enter your contact information</h4>
                <form>
                    <input className={classes.input} type="text" name="name" placeholder="Name" />
                    <input className={classes.input} type="text" name="email" placeholder="Email" />
                    <input className={classes.input}  type="text" name="street" placeholder="Street" />
                    <input className={classes.input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="success"clicked={this.orderHandler}>Order Now</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;