import classes from "./ShowResult.module.css";

const showResult = (props) => {
  if (props.winner === null) {
    return null;
  } else {
    let result = null;
    if (props.winner) {
      result = (
        <div>
          <span>W</span>
          <span>I</span>
          <span>N</span>
          <span>N</span>
          <span>N</span>
          <span>R</span>
          <span>!</span>
          <span>!</span>
        </div>
      );
    } else {
      result = (
        <div>
          <span>T</span>
          <span>R</span>
          <span>Y</span>
          <span> </span>
          <span>A</span>
          <span>G</span>
          <span>A</span>
          <span>I</span>
          <span>N</span>
        </div>
      );
    }
    return (
      <div className={classes.ShowResult}>
        {result}
        <button onClick={props.tryAgain}>Play Again</button>
      </div>
    );
  }
};

export default showResult;
