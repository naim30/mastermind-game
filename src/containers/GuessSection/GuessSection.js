import React, { Component } from "react";

import classes from "./GuessSection.module.css";
import GuessColor from "../../components/UI/GuessColors/GuessColors";

class GuessSection extends Component {
  state = {
    guessIds: ["g0", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9"],
  };
  render() {
    return (
      <div className={classes.GuessSection}>
        {this.state.guessIds.map((id) => (
          <GuessColor key={id} />
        ))}
      </div>
    );
  }
}

export default GuessSection;
