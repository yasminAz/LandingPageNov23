import React from "react";
import "./buttons.css";
import { Spinner } from "react-bootstrap";

export const Filled32Button = (props) => {
  return (
    <button
      className={"Filled32Button " + props.color + " " + props.customClass}
      disabled={props.isDisabled ? true : false}
      onClick={props.handleAction}
      style={props.customStyle}
      id={props.id}
    >
      {props.isLoading ? (
        <Spinner
          animation="border"
          role="status"
          style={{ width: "12px", height: "12px" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        props.buttonContent
      )}
    </button>
  );
};

export default Filled32Button;
