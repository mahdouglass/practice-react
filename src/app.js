import React, { Component } from "react"
import Table from "./table"

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello World!</h1>
                <Table />
            </div>
        )

        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
    }
}

export default App