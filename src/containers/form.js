import React, { Component } from 'react';
import Input from "../components/input";
import Select from "../components/select";

class Form extends Component {
    state = {
        newUser: {
            name: "",
            email: "",
            state: "",
        }
    }
        
    handleName = this.handleName.bind(this);
    handleEmail = this.handleEmail.bind(this);
    handleState = this.handleSelect.bind(this);

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

    handleSelect(event) {
        let value = event.target.value;
        let name = event.target.state;
        this.setState( prevState => ({ newUser:
            {...prevState.newUser, [name]: value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    type={"text"}
                    name={"Name"}
                    value={this.state.newUser.name}
                    placeholder={"Name"}
                    handleChange={this.handleName}
                />
                <Input 
                    type={"text"}
                    name={"Email"}
                    value={this.state.newUser.email}
                    placeholder={"Email"}
                    handleChange={this.handleEmail}
                />
                <Select 
                    name={"State"}
                    value=""
                    placeholder={"Select State"}
                    handleChange={this.handleSelect}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form