import classes from "./ColorCircle.module.css";

const colorCircle = (props) => {
  let styles = props.color
    ? {
        backgroundColor: props.color,
        height: props.size + "px",
        width: props.size + "px",
        borderRadius: props.size + "px",
        margin: props.margin + "px",
      }
    : {
        backgroundColor: "#ebeef6",
        height: props.size + "px",
        width: props.size + "px",
        borderRadius: props.size + "px",
        margin: props.margin + "px",
      };
  return (
    <div
      style={styles}
      className={props.selected ? classes.Selected : ""}
      onClick={() => props.inputColorHandler(props.id)}
    ></div>
  );
};

export default colorCircle;
