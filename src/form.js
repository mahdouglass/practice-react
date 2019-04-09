import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Name:
                        <input type="text" 
                            placeholder="Name" 
                            name="name"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Email:
                        <input type="text" placeholder="Email" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Street:
                        <input type="text" placeholder="Street" />
                    </label>
                    <label>
                        City:
                        <input type="text" placeholder="City" />
                    </label>
                    <label>
                        State:
                        <select>
                            <option>State</option>
                            <option>Ohio</option>
                        </select>
                    </label>
                    <label>
                        Zipcode:
                        <input type="text" placeholder="Zipcode" />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form