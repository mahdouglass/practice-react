import React, { Component } from "react"

class App extends Component {
    state = {
        data: [],
        isLoading: false,
    }

    // Code is run after component has been added to DOM
    componentDidMount() {
        const url="https://en.wikipedia.org/w/api.php?action=opensearch&search=astronomy&format=json&origin=*"

        this.setState({ isLoading: true })

        fetch(url)
            .then(response => response.json())
            .then(result => this.setState({ 
                data: result,
                isLoading: false
             }))
    }

    render() {
        const { data, isLoading } = this.state
        if (isLoading) {
            return <p>Loading...</p>
        }
        const result = data.map((entry, index) => {
            return <p key={index}>{entry}</p>
        })
        return (
            <div className="container">{result}</div>
        )
    }
}

export default App