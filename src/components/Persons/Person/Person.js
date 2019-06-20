import React, { Component } from "react";
import PropTypes from "prop-types";

import WithClass from "../../hoc/WithClass";
import classes from "./Person.css";

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <React.Fragment>
                {this.props.isAuth ? <p>Successfully authenticated!</p> : <p>Please try again.</p>}
                <div className={classes.Person}>
                    <p onClick={this.props.click}>
                        Hi, I'm {this.props.name} and I am {this.props.age} years old!
                    </p>
                    <p key="i2">{this.props.children}</p>
                    <input 
                        key="i3"
                        type="text" 
                        ref={this.inputElementRef}
                        onChange={this.props.changed} 
                        value={this.props.name}
                    />
                </div>
            </React.Fragment>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithClass(Person, classes.Person);