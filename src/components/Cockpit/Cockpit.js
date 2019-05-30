import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(() => {
            alert('Saved data');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] clean up in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up in 2nd useEffect');
        }
    });

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
        <div className={classes.container}>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}
                >Toggle Persons</button>
        </div>
    );
};

export default cockpit;