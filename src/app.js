import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" component={BurgerBuilder} exact />
                        <Route path="/checkout" component={Checkout} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App;