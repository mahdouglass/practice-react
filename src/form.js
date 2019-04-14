import React, { Component } from 'react';
import Input from "./components/input";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // handleChange(event) {
    //     let fields = this.state.fields;
    //     fields[event.target.name] = event.target.value;
    //     this.setState({
    //         fields
    //     });
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     if (this.validateForm()) {
    //         let fields = {};
    //         fields["name"] = "";
    //         fields["email"] = "";
    //         this.setState({
    //             fields: fields
    //         });
    //         alert("Form submitted");
    //     }
    // }

    // validateForm() {
    //     let fields = this.state.fields;
    //     let errors = {};
    //     let formIsValid = true;
    //     let buttonEnabled = this.state.fields;

    //     if (!fields["name"]) {
    //         formIsValid = false;
    //         errors["name"] = "*Please enter your name.";

    //         this.setState({
    //             isEnabled: !buttonEnabled
    //         });
    //     }

    //     if (!fields["email"]) {
    //         formIsValid = false;
    //         errors["email"] = "Please enter your email.";

    //         this.setState({
    //             isEnabled: !buttonEnabled
    //         });
    //     }

    //     if (typeof fields["email"] !== "undefined") {
    //         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //         if (!pattern.test(fields["email"])) {
    //             formIsValid = false;
    //             errors["email"] = "Please enter a valid email.";
    //         }
    //         this.setState({
    //             isEnabled: !buttonEnabled
    //         });
    //     }

    //     this.setState({
    //         errors: errors,
    //         isEnabled: buttonEnabled
    //     });
    //     return formIsValid;
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    placeholder={"Name"}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form