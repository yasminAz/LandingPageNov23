import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./error-page.css";
import img1 from "./images/error-image.svg";

export const Error = (props) => {
  return (
    <>
      <Container className="Error-cont">
        <Row className="content">
          <Col lg={5}>
            <h2>{props ? props.error : "Something went wrong..."}</h2>
          </Col>
          <Col lg={7}>
            <img src={img1} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error;
