import React, { Component } from "react";

import classes from "./GameBoard.module.css";
import InputColor from "../../components/UI/InputColor/InputColor";
import RestartButton from "../../components/UI/RestartButton/RestartButton";
import GuessSection from "../GuessSection/GuessSection";
import CheckButton from "../../components/UI/CheckButton/CheckButton";

class GameBoard extends Component {
  state = {
    inputColor: [
      "#db3a6c",
      "#46c6ef",
      "#49da9a",
      "#f7d038",
      "#8e3b97",
      "#eb7532",
    ],
    selectedColor: 0,
    computerGuess: [],
    selectedGuess: 0,
    guessColors: [-1, -1, -1, -1],
    result: {},
  };

  inputColorHandler = (id) => {
    let updGuessColors = [...this.state.guessColors];
    updGuessColors[id] = this.state.selectedColor;
    this.setState({ guessColors: updGuessColors });
  };

  selectColorHandler = (id) => {
    this.setState({ selectedColor: id });
  };

  restartButtonHandler = () => {
    window.location.reload();
  };

  componentDidMount() {
    if (this.state.computerGuess.length === 0) {
      let colors = [];
      for (let i = 0; i < 4; i++) {
        let rndind = Math.floor(6 * Math.random());
        colors.push(rndind);
      }
      this.setState({ computerGuess: colors });
    }
  }

  render() {
    return (
      <div className={classes.GameBoard}>
        <div className={classes.Menu}>
          <InputColor
            colors={this.state.inputColor}
            selectedColor={this.state.selectedColor}
            selectColorHandler={this.selectColorHandler}
          />
          <RestartButton restartButtonHandler={this.restartButtonHandler} />
          <CheckButton />
        </div>
        <div className={classes.Content}>
          <GuessSection
            guessColors={this.state.guessColors}
            selectedGuess={this.state.selectedGuess}
            inputColorHandler={this.inputColorHandler}
            inputColor={this.state.inputColor}
            selectedColor={this.state.selectedColor}
            computerGuess={this.state.computerGuess}
            size={this.state.innerWidth > 500 ? 40 : 35}
          />
        </div>
      </div>
    );
  }
}

export default GameBoard;
