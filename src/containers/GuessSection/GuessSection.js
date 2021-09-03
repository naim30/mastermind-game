import React, { Component } from "react";

import classes from "./GuessSection.module.css";
import GuessColor from "../GuessColors/GuessColors";

class GuessSection extends Component {
  state = {
    selectedGuess: 0,
    guessColors: [-1, -1, -1, -1],
    result: [],
  };

  inputColorHandler = (id) => {
    let updGuessColors = [...this.state.guessColors];
    updGuessColors[id] = this.props.selectedColor;
    this.setState({ guessColors: updGuessColors });
  };

  checkGuessHandler = () => {
    let result = this.state.guessColors.map((a, i) => {
      if (a === this.props.computerGuess[i]) {
        return 2;
      } else if (this.props.computerGuess.indexOf(a) > -1) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(this.state.guessColors, this.props.computerGuess);
    console.log(result);
    this.setState({ result: result });
  };

  render() {
    let guesses = [];
    for (let i = 0; i < 10; i++) {
      guesses.push(
        <GuessColor
          key={i}
          id={i}
          guessColors={this.state.guessColors}
          selectedGuess={this.state.selectedGuess}
          inputColor={this.props.inputColor}
          inputColorHandler={this.inputColorHandler}
          checkGuessHandler={this.checkGuessHandler}
        />
      );
    }

    return <div className={classes.GuessSection}>{guesses}</div>;
  }
}

export default GuessSection;
