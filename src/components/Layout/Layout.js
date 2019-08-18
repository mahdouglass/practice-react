import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  }

  closeSideDrawer = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawer} />
        <div>Toolbar, Side Drawer, Backdrop</div>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
