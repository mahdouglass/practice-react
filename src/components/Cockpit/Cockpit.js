import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleButtonRef.current.click();
        const timer = setTimeout(() => {
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
    if (props.personsLength <= 2) {
        classes.push(classes.textRed);
    }
    if (props.personsLength <= 1) {
        classes.push(classes.textBold);
    }

    return (
        <div className={classes.container}>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button 
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}
                >Toggle Persons</button>
            <AuthContext.Consumer>
               {context => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);