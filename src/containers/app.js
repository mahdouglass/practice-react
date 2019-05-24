import React, { Component } from "react"
import Persons from "../components/Persons/Persons";

class App extends Component {
    state = {
        persons: [
            { id: "1", name: "Lucy", age: 20 },
            { id: "2", name: "Hazel", age: 25 },
            { id: "3", name: "Russel", age: 17}
        ],
        otherState: 'another value',
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render () {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            <div>
                {persons}
            </div>
        )
    }
}

export default App;