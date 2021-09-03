import classes from "./inputColor.module.css";
import ColorCircle from "../ColorCircle/ColorCircle";

const inputColor = (props) => {
  return (
    <div className={classes.InputColor}>
      {props.colors.map((color, i) => (
        <ColorCircle
          key={i}
          id={i}
          color={color}
          selected={props.selectedColor === i ? true : false}
          clicked={props.selectColorHandler}
          type={"input"}
        />
      ))}
    </div>
  );
};

export default inputColor;
