import React, { Component } from "react"
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] constructor");
    }

    state = {
        persons: [
            { id: "1", name: "Lucy", age: 20 },
            { id: "2", name: "Hazel", age: 25 },
            { id: "3", name: "Russel", age: 17}
        ],
        otherState: 'another value',
        showPersons: false
    };

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    }

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
        console.log("[App.js] render");
        let persons = null;

        if (this.state.showPersons) {
            persons = (<Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
            );
        }

        return (
            <div>
                <Cockpit 
                    showPersons={this.state.showPersons} 
                    persons={this.state.persons} 
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        )
    }
}

export default App;