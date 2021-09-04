import React, { Component } from "react";

import classes from "./GameBoard.module.css";
import InputColor from "../../components/UI/InputColor/InputColor";
import RestartButton from "../../components/UI/RestartButton/RestartButton";
import GuessSection from "../GuessSection/GuessSection";
import CheckButton from "../../components/UI/CheckButton/CheckButton";
import ShowResult from "../../components/UI/ShowResult/ShowResult";

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
    showCheck: false,
    winner: null,
  };

  shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  scrollToBottom = () => {
    this.elem.scrollIntoView({
      block: "end",
      inline: "nearest",
      behavior: "smooth",
    });
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

  checkGuessHandler = () => {
    let updResult = { ...this.state.result };
    updResult[this.state.selectedGuess] = this.state.guessColors.map((a, i) => {
      if (a === this.state.computerGuess[i]) {
        return 2;
      } else if (this.state.computerGuess.indexOf(a) !== -1) {
        return 1;
      } else {
        return 0;
      }
    });
    if (updResult[this.state.selectedGuess].every((a) => a > 1)) {
      this.setState({ winner: true });
      this.scrollToBottom();
    } else if (this.state.selectedGuess === 9) {
      this.setState({ winner: false });
      this.scrollToBottom();
    } else {
      this.setState((prevState) => {
        return {
          selectedGuess: prevState.selectedGuess + 1,
          guessColors: [-1, -1, -1, -1],
          showCheck: false,
        };
      });
    }
    this.shuffleArray(updResult[this.state.selectedGuess]);
    this.setState({ result: updResult });
  };

  componentDidUpdate() {
    if (
      this.state.guessColors.every((a) => a > -1) &&
      this.state.showCheck === false
    ) {
      this.setState({ showCheck: true });
    }
  }

  componentDidMount() {
    if (this.state.computerGuess.length === 0) {
      let colors = [];
      for (let i = 0; i < 4; i++) {
        let rndind = Math.floor(6 * Math.random());
        colors.push(rndind);
      }
      console.log(colors);
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
          <CheckButton
            showCheck={this.state.showCheck}
            checkGuessHandler={this.checkGuessHandler}
          />
        </div>
        <div className={classes.Content}>
          <div ref={(elem) => (this.elem = elem)}>
            <ShowResult
              winner={this.state.winner}
              tryAgain={this.restartButtonHandler}
            />
          </div>
          <GuessSection
            guessColors={this.state.guessColors}
            selectedGuess={this.state.selectedGuess}
            inputColorHandler={this.inputColorHandler}
            inputColor={this.state.inputColor}
            selectedColor={this.state.selectedColor}
            computerGuess={this.state.computerGuess}
            size={this.state.innerWidth > 500 ? 40 : 35}
            result={this.state.result}
          />
        </div>
      </div>
    );
  }
}

export default GameBoard;
