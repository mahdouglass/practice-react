import React, { Component } from "react"
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../components/hoc/WithClass";
import classes from "../index.css";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] constructor");
    };

    state = {
        persons: [
            { id: "1", name: "Lucy", age: 20 },
            { id: "2", name: "Hazel", age: 25 },
            { id: "3", name: "Russel", age: 17}
        ],
        otherState: 'another value',
        showPersons: false,
        showCockpit: true,
        authenticated: false,
    };

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    };

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    };

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
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
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    loginHandler = () => {
        this.setState({authenticated: true});
    };

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
            <React.Fragment>
                <button onClick={() => {
                    this.setState({ showCockpit: false});
                }}>Remove Cockpit</button>
                {this.state.showCockpit ? (
                    <Cockpit 
                        showPersons={this.state.showPersons} 
                        personsLength={this.state.persons.length} 
                        clicked={this.togglePersonsHandler}
                        login={this.loginHandler}
                    />
                ) : null }
                {persons}
            </React.Fragment>
        )
    }
}

export default WithClass(App, classes.App);