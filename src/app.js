import React, { Component } from "react"
import "./index.css";
import Person from "./person/person";

class App extends Component {
    state = {
        persons: [
            { name: "Lucy", age: 20 },
            { name: "Hazel", age: 25 },
            { name: "Rosco", age: 17}
        ],
        otherState: 'another value',
        showPersons: false
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: "Lucy", age: 22 },
                { name: "Hazel", age: 25 },
                { name: event.target.value, age: 17 },
            ]
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render () {
        const style = {
            backgroundColor: "white",
            border: "1px solid blue",
            padding: "8px",
            margin: "auto",
            cursor: "pointer"
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person 
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }

        return (
            <div className="container">
                <button 
                    onClick={this.togglePersonsHandler}
                    style={style}>Toggle Persons</button>
                {persons}
            </div>
        )
    }
}

export default App;