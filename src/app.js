import React, { Component } from "react"
import Table from "./table"

class App extends Component {
    state = {
        characters: []
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    render() {
        const { characters } = this.state
        return (
            <div className="container">
                <h1>Hello World!</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App