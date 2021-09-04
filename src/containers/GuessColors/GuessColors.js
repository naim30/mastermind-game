import React, { Component } from "react";

import classes from "./GuessColors.module.css";
import ColorCircle from "../../components/UI/ColorCircle/ColorCircle";

class GuessColors extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.selectedGuess === nextProps.id) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let colors = [];
    for (let i = 0; i < 4; i++) {
      colors.push(
        <ColorCircle
          key={i}
          id={i}
          color={this.props.inputColor[this.props.guessColors[i]]}
          clicked={this.props.inputColorHandler}
        />
      );
    }

    return (
      <div
        className={[
          this.props.selectedGuess === this.props.id ? classes.Selected : "",
          classes.GuessColors,
        ].join(" ")}
      >
        {colors}
      </div>
    );
  }
}

export default GuessColors;
