import classes from "./GuessColors.module.css";
import ColorCircle from "../ColorCircle/ColorCircle";

const guessColors = (props) => {
  let colors = [];
  for (let i = 0; i < 4; i++) {
    colors.push(<ColorCircle key={i} id={i} size={35} margin={5} />);
  }

  return (
    <div className={classes.GuessColors}>
      <div className={classes.ID}>{props.id.substr(1)}</div>

      {colors}
    </div>
  );
};

export default guessColors;
