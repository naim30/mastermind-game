import React, { Component } from "react";

import classes from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import GameBoard from "../GameBoard/GameBoard";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Navbar />
        <GameBoard />
      </div>
    );
  }
}

export default Layout;
