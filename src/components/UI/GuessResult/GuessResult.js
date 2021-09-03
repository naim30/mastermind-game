import classes from "./GuessResult.module.css";

const guessResult = (props) => {
  return (
    <div className={classes.GuessResult}>
      {props.resultArr === undefined
        ? [
            <div key={0} className={classes.Undecided}></div>,
            <div key={1} className={classes.Undecided}></div>,
            <div key={2} className={classes.Undecided}></div>,
            <div key={3} className={classes.Undecided}></div>,
          ]
        : props.resultArr.map((a, i) => (
            <div
              key={i}
              className={
                a === 2
                  ? classes.BCorrect
                  : a === 1
                  ? classes.CCorrect
                  : classes.Undecided
              }
            ></div>
          ))}
    </div>
  );
};

export default guessResult;
