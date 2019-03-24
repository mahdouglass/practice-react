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

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state
        return (
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <label>Name</label><br/>
                        <input type="text" name="name" value={name} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label>Job</label><br/>
                        <input type="text" name="job" value={job} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-4">
                        <br/>
                        <input type="button" value="Submit" onClick={this.submitForm} />
                    </div>
                </div>
            </form>
        )
    }
}

export default Form