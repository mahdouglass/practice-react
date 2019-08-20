import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  closeSideDrawer = () => {
    this.setState({showSideDrawer: false});
  }

  drawerMenuClick = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !this.state.showSideDrawer };
    });
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerMenuClick={this.drawerMenuClick} />
        <SideDrawer className={classes.mobileOnly}
          open={this.state.showSideDrawer}
          close={this.closeSideDrawer} 
        />
        <div>Toolbar, Side Drawer, Backdrop</div>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
