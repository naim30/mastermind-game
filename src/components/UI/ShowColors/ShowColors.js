import classes from "./ShowColors.module.css";
import GuessResult from "../GuessResult/GuessResult";
import GuessColors from "../../../containers/GuessColors/GuessColors";

const showColors = (props) => {
  return (
    <div className={classes.ShowColors}>
      <div className={classes.ID}>{props.id}</div>
      <GuessColors
        key={props.id}
        id={props.id}
        guessColors={props.guessColors}
        selectedGuess={props.selectedGuess}
        inputColor={props.inputColor}
        inputColorHandler={props.inputColorHandler}
      />
      <div className={classes.Check}>
        <GuessResult />
      </div>
    </div>
  );
};

export default showColors;
