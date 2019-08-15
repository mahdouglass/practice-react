import React from "react";

import Logo from "../../Logo/Logo";
import classes from "./Toolbar.css";

import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => (
    <header className={classes.toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
);

export default toolbar;