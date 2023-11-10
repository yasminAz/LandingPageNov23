import React from "react";
import "../../../Assets/CSS/LandingPage/Features.css";
import { Col, Container, Row } from "react-bootstrap";
import Feature1 from "../../../Assets/images/feature1.png";
import Feature2 from "../../../Assets/images/feature2.png";
import Feature3 from "../../../Assets/images/feature3.png";
import Feature4 from "../../../Assets/images/feature4.png";
const Features = () => {
  return (
    <div className="featuresLargeContainer">
      <Container fluid className="GeneralContainer70">
        <Row>
          <Col xs={12}>
            <h2 className="featuresTitleBlack">Features</h2>
          </Col>
          <Col xs={12} sm={3} className="on575CenterFeatures">
            <img src={Feature1} className="featuresIMG" />
            <p className="featureCaption">Source candidates from LinkedIn</p>
          </Col>{" "}
          <Col xs={12} sm={3} className="on575CenterFeatures">
            <img src={Feature2} className="featuresIMG" />
            <p className="featureCaption">
              Run AI screening flows to rank profiles
            </p>
          </Col>
          <Col xs={12} sm={3} className="on575CenterFeatures">
            <img src={Feature3} className="featuresIMG" />
            <p className="featureCaption">Manage your talent pipelines</p>
          </Col>
          <Col xs={12} sm={3} className="on575CenterFeatures">
            <img src={Feature4} className="featuresIMG" />
            <p className="featureCaption">Collaborate with your team</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
