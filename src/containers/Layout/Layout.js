import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

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
        <main className={classes.content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
