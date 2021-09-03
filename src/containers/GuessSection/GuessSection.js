import React, { Component } from "react";

import classes from "./GuessSection.module.css";
import ShowColors from "../../components/UI/ShowColors/ShowColors";

class GuessSection extends Component {
  render() {
    let guesses = [];
    for (let i = 0; i < 10; i++) {
      guesses.push(
        <ShowColors
          key={i}
          id={i}
          guessColors={this.props.guessColors}
          selectedGuess={this.props.selectedGuess}
          inputColor={this.props.inputColor}
          inputColorHandler={this.props.inputColorHandler}
          resultArr={this.props.result[i]}
        />
      );
    }

    return <div className={classes.GuessSection}>{guesses}</div>;
  }
}

export default GuessSection;
