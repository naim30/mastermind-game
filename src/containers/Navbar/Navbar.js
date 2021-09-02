import React, { Component } from "react";

import classes from "./Navbar.module.css";
import NavHeading from "../../components/NavUI/NavHeading/NavHeading";
import RuleButton from "../../components/NavUI/RuleButton/RuleButton";
import RuleBox from "../../components/NavUI/Rulebox/Rulebox";

class Navbar extends Component {
  state = {
    showRules: false,
  };

  ruleboxToggleHandler = () => {
    this.setState((prevState, props) => ({ showRules: !prevState.showRules }));
  };

  render() {
    return (
      <div className={classes.Navbar}>
        <NavHeading />
        <RuleButton ruleboxToggleHandler={this.ruleboxToggleHandler} />
        {this.state.showRules ? (
          <RuleBox ruleboxToggleHandler={this.ruleboxToggleHandler} />
        ) : null}
      </div>
    );
  }
}

export default Navbar;
