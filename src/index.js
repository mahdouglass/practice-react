import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello World!</h1>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"))