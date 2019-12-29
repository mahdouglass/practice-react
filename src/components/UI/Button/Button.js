import React from "react";

import classes from "./Button.css";

const button = (props) => (
  <button
    className={[classes.button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default button;