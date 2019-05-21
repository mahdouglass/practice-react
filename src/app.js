import React, { Component } from "react"
import classes from "./index.css";
import Person from "./person/person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary
                            key={person.id}
                        >
                            <Person 
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} 
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                            </ErrorBoundary>
                    })}
                </div>
            );
            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            classes.push(classes.textRed);
        }
        if (this.state.persons.length <= 1) {
            classes.push(classes.textBold);
        }

        return (
            <div className={classes.container}>
                <p className={assignedClasses.join(" ")}>This is really working!</p>
                <button 
                    className={btnClass}
                    onClick={this.togglePersonsHandler}
                    >Toggle Persons</button>
                {persons}
            </div>
        )
    }
}

export default App;