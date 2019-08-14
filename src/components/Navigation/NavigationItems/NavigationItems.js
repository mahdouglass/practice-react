import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = () => (
  <ul className={classes.navItems}>
    <NavigationItem />
  </ul>
);

export default navigationItems;