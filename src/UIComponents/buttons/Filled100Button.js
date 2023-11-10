import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "./buttons.css";

export const Filled100Button = (props) => {
  return (
    <>
      {props.isStateFull ? (
        <button
          className={"Filled100Button " + props.color + " " + props.customClass}
          type="submit"
          onClick={props.handleSubmit}
          disabled={props.isLoading ? true : false}
          style={props.customStyle}
          id={props.id}
        >
          {props.isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            props.buttonContent
          )}
        </button>
      ) : (
        <button
          className={"Filled56Button " + props.color}
          type="submit"
          disabled
        >
          {props.buttonContent}
        </button>
      )}
    </>
  );
};

export default Filled100Button;
