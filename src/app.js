import React, { Component } from "react"
import "./index.css";
import Person from "./person/person";

class App extends Component {
    state = {
        persons: [
            { name: "Lucy", age: 20 },
            { name: "Hazel", age: 25 },
            { name: "Harley", age: 17}
        ],
        otherState: 'another value'
    };

    switchNameHandler = (newName) => {
        this.setState = {
            persons: [
                { name: "Lucy", age: 22 },
                { name: newName, age: 25 },
                { name: "Rosco", age: 17}
            ]
        };
    }

    nameChangedHandler = (event) => {
        this.setState = {
            persons: [
                { name: "Lucy", age: 22 },
                { name: "Hazel", age: 25 },
                { name: event.target.value, age: 17 },
            ]
        };
    }

    render () {
        const style = {
            backgroundColor: "white",
            border: "1px solid blue",
            padding: "8px",
            margin: "auto",
            cursor: "pointer"
        };

        return (
            <div className="container">
                <button 
                    onClick={() => this.switchNameHandler("Hazel")}
                    style={style}
                >Switch Name</button>
                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age} />
                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Hazel Hazel")}>I like to run.</Person>
                <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}
                    changed={this.nameChangedHandler} />
            </div>
        )
    }
}

export default App;