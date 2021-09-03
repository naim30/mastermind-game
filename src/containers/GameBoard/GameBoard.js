import React, { Component } from "react";

import classes from "./GameBoard.module.css";
import InputColor from "../../components/UI/InputColor/InputColor";
import RestartButton from "../../components/UI/RestartButton/RestartButton";
import GuessSection from "../GuessSection/GuessSection";

class GameBoard extends Component {
  state = {
    inputColor: [
      { id: "c0", color: "#db3a6c" },
      { id: "c1", color: "#46c6ef" },
      { id: "c2", color: "#49da9a" },
      { id: "c3", color: "#f7d038" },
      { id: "c4", color: "#8e3b97" },
      { id: "c5", color: "#eb7532" },
    ],
    selectedCOlor: "#db3a6c",
  };

  inputColorHandler = (id) => {
    let color = this.state.inputColor.find((col) => col.id === id);
    console.log(color);
    this.setState({ selectedCOlor: color.color });
  };

  restartButtonHandler = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className={classes.GameBoard}>
        <div className={classes.Menu}>
          <InputColor
            circleSize={42}
            colors={this.state.inputColor}
            selectedCOlor={this.state.selectedCOlor}
            inputColorHandler={this.inputColorHandler}
          />
          <RestartButton restartButtonHandler={this.restartButtonHandler} />
        </div>
        <div className={classes.Content}>
          <GuessSection inputColor={this.state.inputColor} />
        </div>
      </div>
    );
  }
}

export default GameBoard;
