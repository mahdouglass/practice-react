import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            isEnabled: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["name"] = "";
            fields["email"] = "";
            this.setState({
                fields: fields
            });
            alert("Form submitted");
        }
    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        let buttonEnabled = this.state.fields;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Please enter your name.";

            this.setState({
                isEnabled: !buttonEnabled
            });
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your email.";

            this.setState({
                isEnabled: !buttonEnabled
            });
        }

        if (typeof fields["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "Please enter a valid email.";
            }
            this.setState({
                isEnabled: !buttonEnabled
            });
        }

        this.setState({
            errors: errors,
        });
        return formIsValid;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Name:
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name="name"
                            value={this.state.fields.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <p className="error-message">{this.state.errors.name}</p>
                </div>
                <div className="form-group">
                    <label>
                        Email:
                        <input 
                            type="text" 
                            placeholder="Email"
                            name="email" 
                            value={this.state.fields.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <p className="error-message">{this.state.errors.email}</p>
                </div>
                {/* <div className="form-group">
                    <label>
                        Street:
                        <input 
                            type="text" 
                            placeholder="Street" 
                            name="street"
                            value={this.state.street}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        City:
                        <input 
                            type="text" 
                            placeholder="City" 
                            name="city"
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        State:
                        <select
                            name="state"
                            value={this.state.state}
                        >
                            <option>State</option>
                            <option>Ohio</option>
                        </select>
                    </label>
                    <label>
                        Zipcode:
                        <input 
                            type="text" 
                            placeholder="Zipcode" 
                            name="zipcode"
                            value={this.state.zipcode}
                            onChange={this.handleChange}
                        />
                    </label>
                </div> */}
                <div className="form-group">
                    <textarea 
                        placeholder="Message..." 
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                </div>
                <button disabled={this.state.isEnabled} type="submit">Submit</button>
            </form>
        )
    }
}

export default Form