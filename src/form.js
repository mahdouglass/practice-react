import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: '',
        }

        this.state= this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, job } = this.state
        return (
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <label>Name</label><br/>
                        <input type="text" name="name" value={name} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label>Job</label><br/>
                        <input type="text" name="job" value={job} onChange={this.handleChange} />
                    </div>
                </div>
            </form>
        )
    }
}

export default Form