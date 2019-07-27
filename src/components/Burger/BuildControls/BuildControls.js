import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControl.css";

const buildControls = () => (
    <div className={classes.buildControls}>
        <BuildControl />
    </div>
);

export default buildControls;