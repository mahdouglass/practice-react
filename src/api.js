import React, { Component } from "react"

class App extends Component {
    state = {
        data: [],
    }

    // Code is run after component has been added to DOM
    componentDidMount() {
        const url="https://en.wikipedia.org/w/api.php?action=opensearch&search=astronomy&format=json&origin=*"

        fetch(url)
    }
    

    render() {
        return (
            <div className="container">
            
            </div>
        )
    }
}

export default App