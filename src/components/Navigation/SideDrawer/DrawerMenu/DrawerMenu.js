import React from "react";

import classes from "./DrawerMenu.css";

const drawerMenu = props => (
  <div className={classes.drawerMenu} onClick={props.click}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerMenu;