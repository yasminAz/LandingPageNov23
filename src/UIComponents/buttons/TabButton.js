import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "./buttons.css";

export const TabButton = (props) => {
  // useEffect(console.log("props:", props), [props]);
  return (
    <>
      <button
        className={"TabButton " + props.activity + " " + props.customClass}
        type="submit"
        onClick={props.handleClick}
        style={props.customStyle}
      >
        {props.buttonContent}
      </button>
    </>
  );
};

export default TabButton;
