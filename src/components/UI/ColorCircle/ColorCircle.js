import classes from "./ColorCircle.module.css";

const colorCircle = (props) => {
  let styles = props.color
    ? {
        backgroundColor: props.color,
      }
    : {
        backgroundColor: "#ebeef6",
      };
  return (
    <div
      style={styles}
      className={[
        props.selected ? classes.Selected : "",
        props.type === "input" ? classes.Input : classes.Guess,
      ].join(" ")}
      onClick={() => props.clicked(props.id)}
    ></div>
  );
};

export default colorCircle;
