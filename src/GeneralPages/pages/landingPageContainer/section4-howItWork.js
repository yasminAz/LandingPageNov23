import React, { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import img1 from "../../../Assets/images/createRole.png";
import img2 from "../../../Assets/images/AIMatchmaking.png";
import img3 from "../../../Assets/images/reachOutCandidates.png";
import img4 from "../../../Assets/images/useATS.png";
import talentSourcing from "../../../Assets/images/landing-talentSourcing.png";
import aiMatchmaking from "../../../Assets/images/landing-aiMatchmaking.png";
import ats from "../../../Assets/images/landing-ats.png";
import "./client-landingPage.css";
export const ClientLandingHowItWorksSection = () => {
  const [image2view, setImage2View] = useState(img1);
  return (
    <>
      <section className="clientLandingHowItWorksSection">
        <Container fluid className="GeneralContainer70 ">
          <div className="ClientNavyHowItWorksBOX">
            <Row>
              <Col lg={6}>
                <h2 className="howItWorksWhiteTitle">How it works?</h2>
                <Accordion
                  defaultActiveKey="0"
                  className="HowItWorksNavyAccordion"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={() => setImage2View(img1)}>
                      01 - Create a role
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_13883_6658)">
                          <path
                            d="M7.41 15.4102L12 10.8302L16.59 15.4102L18 14.0002L12 8.00016L6 14.0002L7.41 15.4102Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13883_6658">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 24)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Accordion.Header>
                    <Accordion.Body>
                      Create a role on Tapflow and get access to different
                      sourcing mechanisms
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={() => setImage2View(img2)}>
                      02 - AI matchmaking
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_13883_6658)">
                          <path
                            d="M7.41 15.4102L12 10.8302L16.59 15.4102L18 14.0002L12 8.00016L6 14.0002L7.41 15.4102Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13883_6658">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 24)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Accordion.Header>
                    <Accordion.Body>
                      AI matchmaking will ensure you'll get the best fit
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header onClick={() => setImage2View(img3)}>
                      03 - Reach out to candidates
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_13883_6658)">
                          <path
                            d="M7.41 15.4102L12 10.8302L16.59 15.4102L18 14.0002L12 8.00016L6 14.0002L7.41 15.4102Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13883_6658">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 24)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Accordion.Header>
                    <Accordion.Body>
                      Engage the sourced talent in your recruitment process
                      using outreach tool
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header onClick={() => setImage2View(img4)}>
                      04 - Use the ATS
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_13883_6658)">
                          <path
                            d="M7.41 15.4102L12 10.8302L16.59 15.4102L18 14.0002L12 8.00016L6 14.0002L7.41 15.4102Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13883_6658">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 24)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Accordion.Header>
                    <Accordion.Body>
                      Use our Applicant Tracking System to streamline the
                      recruitment process
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col lg={6}>
                <img src={image2view} className="clientNavyHowITWorksIMG" />
              </Col>
            </Row>
          </div>
          <div className="whatDoesTapflowGiveYouWhiteBG">
            <Row>
              <Col xs={12}>
                <h2 className="whatDoesTapflowGiveYouH2">
                  What does <span color="#FFC900">Tapflow</span> give you?{" "}
                </h2>
              </Col>
            </Row>
            <Row className="marginBottom4Cols">
              <Col
                xs={{ span: 12, order: 0 }}
                md={{ span: 6, order: 0 }}
                xl={{ span: 5, offset: 1 }}
              >
                <div className="whatDoesTapflowGiveYouText">
                  <h5 className="whatDoesTapflowGiveYouH5">
                    Automated high quality{" "}
                    <span className="gradient">talent sourcing</span> tailored
                    to your exact requirements
                  </h5>
                </div>
              </Col>
              <Col
                xs={{ span: 12, order: 1 }}
                md={{ span: 6, order: 1 }}
                xl={5}
              >
                <div className="whatDoesTapflowGiveYouImageDiv">
                  <img src={talentSourcing} className="img-fluid" />
                </div>
              </Col>
              <Col
                xs={{ span: 12, order: 3 }}
                md={{ span: 6, order: 2 }}
                xl={{ span: 5, offset: 1 }}
              >
                <div className="whatDoesTapflowGiveYouImageDiv">
                  <img src={aiMatchmaking} className="img-fluid" />
                </div>
              </Col>
              <Col
                xs={{ span: 12, order: 2 }}
                md={{ span: 6, order: 3 }}
                xl={{ span: 5 }}
              >
                <div className="whatDoesTapflowGiveYouText">
                  <h5 className="whatDoesTapflowGiveYouH5">
                    High quality{" "}
                    <span className="gradient">AI matchmaking</span> tailored to
                    secure the perfect fit for the role
                  </h5>
                </div>
              </Col>
              <Col
                xs={{ span: 12, order: 4 }}
                md={{ span: 6, order: 4 }}
                xl={{ span: 5, offset: 1 }}
              >
                <div className="whatDoesTapflowGiveYouText">
                  <h5 className="whatDoesTapflowGiveYouH5">
                    <span className="gradient">Applicant Tracking System </span>{" "}
                    to streamline your whole recruitment process
                  </h5>
                </div>
              </Col>

              <Col
                xs={{ span: 12, order: 5 }}
                md={{ span: 6, order: 5 }}
                xl={5}
              >
                <div className="whatDoesTapflowGiveYouImageDiv">
                  <img src={ats} className="img-fluid" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ClientLandingHowItWorksSection;
