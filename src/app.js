import React, { Component } from "react"
import "./index.css";
import Person from "./person/person";

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
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} 
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );

            style.backgroundColor = "red";
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push("text-red");
        }
        if (this.state.persons.length <= 1) {
            classes.push("text-bold");
        }

        return (
            <div className="container">
                <p className={classes.join(" ")}>This is really working!</p>
                <button 
                    onClick={this.togglePersonsHandler}
                    style={style}>Toggle Persons</button>
                {persons}
            </div>
        )
    }
}

export default App;