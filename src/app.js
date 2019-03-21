import React, { Component } from "react"
import Table from "./table"

class App extends Component {
    state = {
        characters: [
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
    render() {
        const { characters } = this.state
        return (
            <div className="container">
                <h1>Hello World!</h1>
                <Table characterData={characters} />
            </div>
        )
    }
}

export default App