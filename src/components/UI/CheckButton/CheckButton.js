import classes from "./CheckButton.module.css";

const checkButton = (props) => {
  return (
    <div
      className={classes.CheckButton}
      onClick={props.checkGuessHandler}
    ></div>
  );
};

export default checkButton;
