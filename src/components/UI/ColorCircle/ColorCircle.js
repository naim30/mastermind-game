import classes from "./ColorCircle.module.css";

const colorCircle = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        height: props.size + "px",
        width: props.size + "px",
        borderRadius: props.size + "px",
        margin: props.margin + "px",
      }}
      className={props.selected ? classes.Selected : ""}
      onClick={() => props.inputColorHandler(props.id)}
    ></div>
  );
};

export default colorCircle;
