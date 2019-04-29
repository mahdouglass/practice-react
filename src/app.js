import React, { useState } from "react"
import "./index.css";
import Person from "./person/person";

const App = props => {
    const [ personsState, setPersonState] = useState({
        persons: [
            { name: "Lucy", age: 20 },
            { name: "Hazel", age: 25 }
        ],
        otherState: 'another value'
    });

    const [otherState, setOtherState] = useState("some other value");
    console.log(personsState, otherState);

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                { name: "Lucy", age: 22 },
                { name: "Hazel", age: 25 }
            ]
        });
    }

    return (
        <div className="container">
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I like to run.</Person>
        </div>
    )
}

export default App;