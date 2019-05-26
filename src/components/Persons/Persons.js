import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
    render() {
        console.log("[Persons.js] rendering...");
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                click={() => this.props.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                changed={(event) => this.props.nameChangedHandler(event, person.id)} />
            );
        });
    }
};

export default Persons;