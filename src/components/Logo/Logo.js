import React from "react";

import BurgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.logo}>
    <img src={BurgerLogo} alt="Burger Logo" />
  </div>
);

export default logo;