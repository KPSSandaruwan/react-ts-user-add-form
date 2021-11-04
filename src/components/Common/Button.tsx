import React from "react";
import classes from "./Button.module.css";

const Button: React.FC<{ type: any; onClick?: () => void }> = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
