import React, { Component } from "react";

import classes from "./GuessColors.module.css";
import ColorCircle from "../../components/UI/ColorCircle/ColorCircle";
import GuessResult from "../../components/UI/GuessResult/GuessResult";
import CheckButton from "../../components/UI/CheckButton/CheckButton";

class guessColors extends Component {
  state = {
    showCheck: false,
  };

  componentDidUpdate() {
    if (
      this.props.guessColors.every((a) => a > -1) &&
      this.state.showCheck === false
    ) {
      this.setState({ showCheck: true });
    }
  }

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
          size={35}
          margin={5}
          color={this.props.inputColor[this.props.guessColors[i]]}
          clicked={this.props.inputColorHandler}
        />
      );
    }

    return (
      <div className={classes.GuessColors}>
        <div className={classes.ID}>{this.props.id}</div>
        {colors}
        <div className={classes.Check}>
          {this.state.showCheck ? (
            <CheckButton checkGuessHandler={this.props.checkGuessHandler} />
          ) : (
            <GuessResult />
          )}
        </div>
      </div>
    );
  }
}

export default guessColors;
