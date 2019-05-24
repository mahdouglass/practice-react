import React from "react";
import classes from "../../index.css";

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        classes.push(classes.textRed);
    }
    if (props.persons.length <= 1) {
        classes.push(classes.textBold);
    }

    return (
        <div>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}
                >Toggle Persons</button>
        </div>
    );
};

export default cockpit;