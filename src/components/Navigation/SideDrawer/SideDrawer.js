import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.css";

const sideDrawer = (props) => {
  let attachClasses = [classes.sideDrawer, classes.close];

  if (props.open) {
    attachClasses = [classes.sideDrawer, classes.open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={attachClasses.join(' ')}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;