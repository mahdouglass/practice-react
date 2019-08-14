import React from "react";

import Logo from "../../Logo/Logo";
import classes from "./Toolbar.css";

const toolbar = () => (
    <header className={classes.toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>
        ...
      </nav>
    </header>
);

export default toolbar;