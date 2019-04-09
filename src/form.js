import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>
                        Name:
                        <input type="text" placeholder="Name" />
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
                        <input type="text" placeholder="State" />
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