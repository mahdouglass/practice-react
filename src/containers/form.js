import React, { Component } from 'react';
import Input from "../components/input";
import Select from "../components/select";
import Checkbox from "../components/checkbox";

const OPTIONS = ["One", "Two", "Three"];

class Form extends Component {
    state = {
        newUser: {
            name: "",
            email: "",
            state: "",
        },
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
              ...options,
              [option]: false
            }),
            {}
        )
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

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
          this.setState(prevState => ({
            checkboxes: {
              ...prevState.checkboxes,
              [checkbox]: isSelected
            }
          }));
        });
    };

    selectAll = () => this.selectAllCheckboxes(true);

    deselectAll = () => this.selectAllCheckboxes(false);

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
        checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
        }
        }));
    };

    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
        />
    );

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

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
                {this.createCheckbox()}
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form