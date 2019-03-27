import React, { Component } from "react"

class App extends Component {
    state = {
        data: [],
    }

    // Code is run after component has been added to DOM
    componentDidMount() {
        const url="https://en.wikipedia.org/w/api.php?action=opensearch&search=astronomy&format=json&origin=*"

        fetch(url)
            .then(response => response.json())
            .then(result => this.setState({ data: result }))
    }

    render() {
        const { data } = this.state
        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })
        return (
            <ul>{result}</ul>
        )
    }
}

export default App