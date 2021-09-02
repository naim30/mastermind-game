import classes from "./Rulebox.module.css";

const ruleBox = (props) => {
  return (
    <div onClick={props.ruleboxToggleHandler} className={classes.Rulebox}>
      <div onClick={(e) => e.stopPropagation()} className={classes.Box}>
        <div className={classes.Heading}>Rules</div>
        <div>
          At the beginning of each game the computer generates a secret code of
          four colors. The colors are always chosen from the same six colors.
          Duplicates are allowed, so the computer could even choose the same
          color four times.
        </div>
        <div>
          Your objective is to guess the secret code. You will have to guess the
          colors and put them in the same order as they are in the secret code.
        </div>
        <div>
          Choose four colors in the next available row and then click on the
          Check button. The computer will score your guess in the following way:
        </div>
        <ul>
          <li>
            For each guess that is right in both color and position you get a
            black point
          </li>
          <li>
            For each guess that is right in color but not in position you get a
            red point
          </li>
        </ul>
        <div>
          You have ten rows to make your guesses, if you exhaust all of them
          without guessing the code, you lost the game. Good Luck!
        </div>
        <button onClick={props.ruleboxToggleHandler} className={classes.Button}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ruleBox;
