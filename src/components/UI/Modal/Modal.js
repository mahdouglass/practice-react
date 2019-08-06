import React from "react";
import classes from "./Modal.css";

const modal = (props) => (
  <div className={classes.modal}
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
    }}
  >
    {props.children}
  </div>
);

export default modal;
