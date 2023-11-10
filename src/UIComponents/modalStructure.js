import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "../Assets/CSS/Talent/InsidePagesStructure.css";
import CloseModalRedX from "../Assets/images/CloseModalRedX.svg";

function ModalStructure(props) {
  useEffect(() => {}, []);
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        dialogClassName="modal-w570"
      >
        {props.hideXButton ? (
          <></>
        ) : (
          <img
            src={CloseModalRedX}
            className="closeModalRedX"
            onClick={props.handleClose}
          />
        )}

        <div className="talentModalStructure">
          <h2
            className={
              props.subtitle
                ? "talentModalTitle lessMargin"
                : "talentModalTitle"
            }
          >
            {props.title}
          </h2>
          {props.subtitle && (
            <h6 className="talentModalSubtitle">{props.subtitle}</h6>
          )}
        </div>
        <div className="talentModalBody">{props.children}</div>
      </Modal>
    </>
  );
}

export default ModalStructure;
