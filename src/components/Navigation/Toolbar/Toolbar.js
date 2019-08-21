import React from "react";

import Logo from "../../Logo/Logo";
import classes from "./Toolbar.css";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerMenu from "../SideDrawer/DrawerMenu/DrawerMenu";

const toolbar = props => (
    <header className={classes.toolbar}>
      <DrawerMenu click={props.drawerMenuClick} className={classes.mobileOnly} />
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav className={classes.desktopOnly}>
        <NavigationItems />
      </nav>
    </header>
);

export default toolbar;