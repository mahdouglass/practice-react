import React, { Component } from 'react';
import Input from "../components/input";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                name: "",
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let value = event.target.value;
        this.setState( prevState => ({ newUser: 
            {...prevState.newUser, name: value}
        }), () => console.log(this.state.newUser));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    type={"text"}
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Name"}
                    handleChange={this.handleInputChange}
                />
                <Input 
                    type={"text"}
                    name={"email"}
                    value={this.state.newUser.name}
                    placeholder={"Email"}
                    handleChange={this.handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form