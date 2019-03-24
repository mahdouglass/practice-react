import React, { Component } from "react"
import Table from "./table"
import Form from "./form"

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

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character]})
    }

    render() {
        const { characters } = this.state
        return (
            <div className="container">
                <h1>Hello World!</h1>
                <Form handleSubmit={this.handleSubmit} />
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App