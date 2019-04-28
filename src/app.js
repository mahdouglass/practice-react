import React, { Component } from "react"
import "./index.css";
import Person from "./person/person";

class App extends Component {
    state = {
        persons: [
            { name: "Lucy", age: 20 },
            { name: "Hazel", age: 25 }
        ],
        otherState: 'another value'
    }

    switchNameHandler = () => {
        this.setState({
            persons: [
                { name: "Lucy", age: 22 },
                { name: "Hazel", age: 25 }
            ]
        });
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like to run.</Person>
            </div>
        )
    }
}

export default App