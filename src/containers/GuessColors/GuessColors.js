import React, { Component } from "react";

import ColorCircle from "../../components/UI/ColorCircle/ColorCircle";

class guessColors extends Component {
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

    return colors;
  }
}

export default guessColors;
