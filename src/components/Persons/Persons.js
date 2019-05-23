import React from "react";

import Person from "./Person/Person";

const persons = (props) => (
    props.persons.map((person, index) => {
        return <Person 
            click={() => props.deletePersonHandler(index)}
            name={person.name}
            age={person.age} 
            changed={(event) => props.nameChangedHandler(event, person.id)} />
    })
);

export default persons;