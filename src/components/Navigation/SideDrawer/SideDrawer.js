import React from "react";

import Logo from "../../../assets/images/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = (props) => {
  return (
    <div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;