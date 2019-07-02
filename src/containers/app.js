import React, { Component } from "react";

class App extends Component {
    render () {
        return (
            <React.Fragment>
                <h1>Planning the burger builder app</h1>
                <p>Goal: users can add ingredients to make their own burger and later purchase it.</p>
                <h2>UI</h2>
                <h3>Navigation</h3>
                <ul>
                    <li>Logo</li>
                    <li>Builder</li>
                    <li>Orders</li>
                </ul>
                <h3>Burger Preview</h3>
                <ul>
                    <li>Show ingredients dynamically</li>
                </ul>
                <h3>Ingredients/Controls</h3>
                <ul>
                    <li>Ingredient name</li>
                    <li>Add</li>
                    <li>Subtract</li>
                </ul>
                <h3>Checkout</h3>
                <ul>
                    <li>Button</li>
                    <li>Price</li>
                </ul>
            </React.Fragment>
        )
    }
}

export default App;