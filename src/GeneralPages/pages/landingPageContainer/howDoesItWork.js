import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import image0 from "../../../Assets/images/image0.png";
import image1 from "../../../Assets/images/image1.png";
import image2 from "../../../Assets/images/image2.png";
import image3 from "../../../Assets/images/image3.png";

import "../../../Assets/CSS/LandingPage/HowDoesItWork.css";
import arrow from "../../../Assets/images/blackArrow.svg";
import { useVisible } from "../../../UIComponents/visible";
const HowDoesItWork = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [viewed, setViewed] = useState([0]);
  const domRef = useRef();
  const isVisible = useVisible(domRef);
  // useEffect(() => {
  //   if (isVisible) {
  //     for (let i = 0; i < 3; i++) {
  //       setTimeout(() => {
  //         let viewedarr = viewed;
  //         let newIndex = currentStep + 1;
  //         viewedarr.push(newIndex);
  //         setCurrentStep(newIndex);
  //         setViewed(viewedarr);
  //       }, 3500);
  //     }
  //   }
  // }, [isVisible]);
  const handleChange = (value) => {
    setViewed((prevState) => {
      return [...prevState, value];
    });
  };
  return (
    <div className="HowDoesItWork-container">
      <Container fluid className="GeneralContainer70">
        <Row style={{ alignItems: "center" }}>
          <Col xs={12} sm={6}>
            <div className="HowDoesItWork-div" ref={domRef}>
              <h2 className="HowDoesItWork-title">How does it work?</h2>
              <div
                className={
                  currentStep == 0
                    ? `HowDoesItWork-box selected specialBefore`
                    : `HowDoesItWork-box specialBefore ${
                        viewed.includes(0) ? "selectedBefore" : ""
                      }`
                }
                onClick={() => {
                  setCurrentStep(0);
                  handleChange(0);
                }}
              >
                <div
                  className={
                    currentStep == 0
                      ? "HowDoesItWork-boxTitle adjustArrow"
                      : "HowDoesItWork-boxTitle"
                  }
                >
                  <img src={arrow} />
                  <h5>Create a job</h5>
                </div>
                {currentStep == 0 ? (
                  <p className="HowDoesItWork-boxText">
                    Start by setting up your account and adding your team. Once
                    you're set, start using Tapflow by creating your first job!
                  </p>
                ) : (
                  <></>
                )}
              </div>
              <div
                className={
                  currentStep == 1
                    ? `HowDoesItWork-box selected`
                    : `HowDoesItWork-box ${
                        viewed.includes(1) ? "selectedBefore" : ""
                      }`
                }
                onClick={() => {
                  setCurrentStep(1);
                  handleChange(1);
                }}
              >
                <div
                  className={
                    currentStep == 1
                      ? "HowDoesItWork-boxTitle adjustArrow"
                      : "HowDoesItWork-boxTitle"
                  }
                >
                  <img src={arrow} />
                  <h5>Start sourcing candidates</h5>
                </div>
                {currentStep == 1 ? (
                  <p className="HowDoesItWork-boxText">
                    Start a candidates sourcing flow according to your ideal
                    sourcing strategy. Tapflow will source the ideal candidates
                    from LinkedIn within minutes.
                  </p>
                ) : (
                  <></>
                )}
              </div>{" "}
              <div
                className={
                  currentStep == 2
                    ? `HowDoesItWork-box selected`
                    : `HowDoesItWork-box ${
                        viewed.includes(2) ? "selectedBefore" : ""
                      }`
                }
                onClick={() => {
                  setCurrentStep(2);
                  handleChange(2);
                }}
              >
                <div
                  className={
                    currentStep == 2
                      ? "HowDoesItWork-boxTitle adjustArrow"
                      : "HowDoesItWork-boxTitle"
                  }
                >
                  <img src={arrow} />
                  <h5>Use AI to screen candidates</h5>
                </div>
                {currentStep == 2 ? (
                  <p className="HowDoesItWork-boxText">
                    Move the candidates you like from the sourced stage to the
                    screened stage using an AI screening flow. Tapflow will rank
                    and filter out those candidates.
                  </p>
                ) : (
                  <></>
                )}
              </div>{" "}
              <div
                className={
                  currentStep == 3
                    ? `HowDoesItWork-box selected endAfter`
                    : `HowDoesItWork-box endAfter${
                        viewed.includes(3) ? "selectedBefore" : ""
                      }`
                }
                onClick={() => {
                  setCurrentStep(3);
                  handleChange(3);
                }}
              >
                <div
                  className={
                    currentStep == 3
                      ? "HowDoesItWork-boxTitle adjustArrow"
                      : "HowDoesItWork-boxTitle"
                  }
                >
                  <img src={arrow} />
                  <h5>Connect with your shortlist</h5>
                </div>
                {currentStep == 3 ? (
                  <p className="HowDoesItWork-boxText">
                    Move every profile you like to your shortlist. This is your
                    master list. You should connect with every candidate from
                    that list to ask them to apply to your job.
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} className="HowDoesItWork-LargeImageCol">
            <img
              src={
                currentStep == 0
                  ? image0
                  : currentStep == 1
                  ? image1
                  : currentStep == 2
                  ? image2
                  : image3
              }
              className="HowDoesItWork-LargeImage img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowDoesItWork;
