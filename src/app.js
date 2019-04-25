import React, { Component } from "react"
import "./index.css";
import Person from "./person/person";

class App extends Component {

    render() {
        return (
            <div className="container">
                <Person />
            </div>
        )
    }
}

export default App