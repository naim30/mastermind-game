import classes from "./CheckButton.module.css";

const checkButton = (props) => {
  return (
    <button
      className={[
        classes.CheckButton,
        props.showCheck ? "" : classes.Disable,
      ].join(" ")}
      onClick={props.checkGuessHandler}
    ></button>
  );
};

export default checkButton;
