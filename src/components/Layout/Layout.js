import React from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <div>Toolbar, Side Drawer, Backdrop</div>
      <main className={classes.content}>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default layout;
