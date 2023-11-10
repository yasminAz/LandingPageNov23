import React from "react";
import "./buttons.css";
import { Spinner } from "react-bootstrap";

export const Filled24Button = (props) => {
  return (
    <button
      className={"Filled24Button " + props.color + " " + props.customClass}
      disabled={props.isDisabled ? true : false}
      onClick={props.handleAction}
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

export default Filled24Button;
