import React from "react";
import { NavLink } from 'react-router-dom';

import classes from "./NavigationItem.css";

const navigationItem = (props) => (
  <li className={classes.navItem}>
    <NavLink to={props.link} activeClassName={classes.active} exact>{props.children}</NavLink>
  </li>
);

export default navigationItem;