import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../Assets/CSS/404.css";
import img404 from "../../Assets/images/404.png";
import LandingStructure from "./landingPageContainer/LandingStructure";

export const Page404WithHeaderAndFooter = (props) => {
  return (
    <>
      <LandingStructure isLogin={props.isLogin ? props.isLogin : 0}>
        <Container className="p404-cont">
          <Row>
            <Col xs={12}>
              <div className="div404">
                <h1 className="error404Text">Page is not found</h1>
                <img src={img404} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </LandingStructure>
    </>
  );
};

export default Page404WithHeaderAndFooter;
