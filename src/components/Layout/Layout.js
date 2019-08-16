import React from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <div>Toolbar, Side Drawer, Backdrop</div>
      <main className={classes.content}>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default layout;
