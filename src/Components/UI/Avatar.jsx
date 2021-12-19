import classes from "./Avatar.module.css";
const Avatar = (props) => (
  <img
    src={props.src}
    alt={props.alt}
    className={`${classes.image} ${props.className}`}
    {...props}
  />
);

export default Avatar;
