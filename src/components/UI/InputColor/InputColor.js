import classes from "./inputColor.module.css";
import ColorCircle from "../ColorCircle/ColorCircle";

const inputColor = (props) => {
  return (
    <div className={classes.InputColor}>
      {props.colors.map((color) => (
        <ColorCircle
          key={color.id}
          id={color.id}
          color={color.color}
          size={props.circleSize}
          margin={3}
          selected={props.selectedCOlor === color.color ? true : false}
          inputColorHandler={props.inputColorHandler}
        />
      ))}
    </div>
  );
};

export default inputColor;
