import React, { Component } from 'react';
import axios from "../../../axios-orders";

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
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
            this.setState({loading: false, ordering: false});
        });
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