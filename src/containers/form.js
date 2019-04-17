import React, { Component } from 'react';
import Input from "../components/input";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                name: "",
                email: "",
            }
        }
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleName(event) {
        let value = event.target.value;
        this.setState( prevState => ({ newUser: 
            {...prevState.newUser, name: value}
        }), () => console.log(this.state.newUser));
    }

    handleEmail(event) {
        let value = event.target.value;
        this.setState( prevState => ({ newUser:
            {...prevState.newUser, email: value}
        }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    type={"text"}
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Name"}
                    handleChange={this.handleName}
                />
                <Input 
                    type={"text"}
                    name={"email"}
                    value={this.state.newUser.email}
                    placeholder={"Email"}
                    handleChange={this.handleEmail}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form