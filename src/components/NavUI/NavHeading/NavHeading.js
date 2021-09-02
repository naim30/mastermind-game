import classes from "./NavHeading.module.css";

const navHeading = (props) => {
  return (
    <div className={classes.NavHeading}>
      Master<span>m</span>
      <span>i</span>
      <span>n</span>
      <span>d</span>
    </div>
  );
};

export default navHeading;
