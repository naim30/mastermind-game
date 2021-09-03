import classes from "./CheckButton.module.css";

const checkButton = (props) => {
  return (
    <div
      className={[
        classes.CheckButton,
        props.showCheck ? "" : classes.Disable,
      ].join(" ")}
      onClick={props.checkGuessHandler}
    ></div>
  );
};

export default checkButton;
