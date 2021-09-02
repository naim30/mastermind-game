import classes from "./RuleButton.module.css";

const ruleButton = (props) => {
  return (
    <div onClick={props.ruleboxToggleHandler} className={classes.RuleButton}>
      Rules
    </div>
  );
};

export default ruleButton;
