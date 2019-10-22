import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render () {
        return (
            <div>
                <h4>Enter your contact information</h4>
                <form className="contactData">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success">Order Now</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;