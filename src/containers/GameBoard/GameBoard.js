import React, { Component } from "react";

import classes from "./GameBoard.module.css";

class GameBoard extends Component {
  render() {
    return (
      <div className={classes.GameBoard}>
        <h1>This is Game Board</h1>
      </div>
    );
  }
}

export default GameBoard;
