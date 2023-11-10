import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../../../Assets/images/TF-client-logo.svg";
import illustration from "../../../Assets/images/AccessIllustrations.png";
import "../../../Assets/CSS/Client/StartPagesRDandSignup.css";
import ClientMainFooter from "../../../UIComponents/client-footer";
export const AccessStructure = ({ props, children }) => {
  const history = useHistory();

  return (
    <>
      <Container fluid className="GeneralContainer14">
        <Row className="padding4TheAccessRow">
          <Col xs={{ span: 12 }} sm={6} md={5}>
            <img
              src={logo}
              className="img-fluid ClientStartPagesTFLogo"
              onClick={() => history.push("/")}
              style={{ cursor: "pointer" }}
            />

            <Row className="AccessForm">
              <Col xs={12}>
                <div className="titlesAndToggeler">
                  <div className="ClientStartPages-titles">
                    <h1>{props.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
                  </div>
                  {props.showToggler && (
                    <div className="fakeYellowToggler">
                      <p
                        className={props.isSignup ? "selected" : ""}
                        onClick={() => history.push("/Client/signup")}
                      >
                        Sign up
                      </p>
                      <p
                        className={props.isLogin ? "selected" : ""}
                        onClick={() => history.push("/Client/Login")}
                      >
                        Login
                      </p>
                    </div>
                  )}
                </div>
                {children}
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 12 }} sm={6} md={7}>
            <div className="AccessIllustration">
              <img src={illustration} />
              <p>
                <strong>Transform</strong> the way you find{" "}
                <strong>exceptional talent</strong>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <ClientMainFooter />
    </>
  );
};

export default AccessStructure;
