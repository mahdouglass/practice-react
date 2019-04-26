import React, { Component } from "react"
import "./index.css";
import Person from "./person/person";

class App extends Component {

    render() {
        return (
            <div className="container">
                <Person name="Lucy" age="20" />
                <Person name="Hazel" age="25">I like to run.</Person>
            </div>
        )
    }
}

export default App