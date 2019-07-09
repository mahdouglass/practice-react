import React, { Component } from "react";

class App extends Component {
    render () {
        return (
            <React.Fragment>
                <h1>Planning the burger builder app</h1>
                <h2>Visual Breakdown</h2>
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
                <h3>Price Preview</h3>
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
                <h2>Code Tree</h2>
                <p>App -> Layout Component -> Toolbar, Side Drawer (mobile), Backdrop, props<i>.children</i> (dynamic component)</p>
                <h3>Toolbar</h3>
                <ul>
                    <li>Drawer toggle</li>
                    <li>Logo</li>
                    <li>Navigation items</li>
                </ul>
                <small>Share components with Side Drawer, just change based off of viewport</small>
                <h3>Side Drawer</h3>
                <ul>
                    <li>Logo</li>
                    <li>Navigation items</li>
                </ul>
                <h3>Backdrop</h3>
                <ul>
                    <li>JSX, no children</li>
                </ul>
                <h3>Props.children</h3>
                <ul>
                    <li>Different pages</li>
                    <ul>
                        <li>Burger builder</li>
                        <ul>
                            <li>Build controls</li>
                            <ul>
                                <li>Control</li>
                                <li>Order button</li>
                            </ul>
                            <li>Burger preview</li>
                            <ul>
                                <li>Ingredient</li>
                            </ul>
                            <li>Modal</li>
                            <ul>
                                <li>Wrapper that takes in props.children</li>
                                </ul>
                        </ul>
                        <li>Checkout</li>
                    </ul>
                </ul>
            </React.Fragment>
        )
    }
}

export default App;