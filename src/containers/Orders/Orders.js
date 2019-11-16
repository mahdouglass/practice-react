import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                console.log(res.data);
                this.setState({loading: false})
            })
            .catch(err => {
                this.setState({loading: false})
            })
    }
    
    render () {
        return (
            <React.Fragment>
                <Order />
                <Order />
            </React.Fragment>
        );
    }
}

export default Orders;