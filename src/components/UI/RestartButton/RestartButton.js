import classes from "./RestartButton.module.css";

const restartButton = (props) => {
  return (
    <div
      className={classes.RestartButton}
      onClick={props.restartButtonHandler}
    ></div>
  );
};

export default restartButton;
