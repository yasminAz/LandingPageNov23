import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import feedback from "../../../Assets/images/landing-feedback-based.png";
import colaborative from "../../../Assets/images/landing-colaborative.png";
import outreach from "../../../Assets/images/landing-outreach.png";
import interview from "../../../Assets/images/landing-interview.png";
import "./client-landingPage.css";

export const ClientLandingFeaturesSection = () => {
  return (
    <>
      <section className="clientLandingFeaturesSection">
        <Container fluid className="GeneralContainer70">
          <Row>
            <Col xs={12}>
              <h2 className="featuresTitle">Our top features</h2>
              <h3 className="featuresSecondTitle">
                Streamline your recruitment process
              </h3>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="landing-features-text-box">
                <div>
                  <h4 className="featuresSubtitle">
                    Feedback-based AI matchmaking
                  </h4>
                  <p className="featuresText">
                    Tapflow will source talent based on the information you
                    provide us with. Our AI matchmaking algorithms will make
                    sure every talent is a perfect match to your company.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={{ span: 7, offset: 1 }}>
              <img src={feedback} className="landing-features-img" />
            </Col>{" "}
            <Col xs={12} md={6} lg={4}>
              <div className="landing-features-text-box">
                <div>
                  <h4 className="featuresSubtitle">Collaborative ATS</h4>
                  <p className="featuresText">
                    You'll be able to collaborate with your team during the
                    whole recruitment process by viewing profiles, evaluating
                    talent, and doing certain actions.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={{ span: 7, offset: 1 }}>
              <img src={colaborative} className="landing-features-img" />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="landing-features-text-box">
                <div>
                  <h4 className="featuresSubtitle">Outreach tool</h4>
                  <p className="featuresText">
                    Maximize your candidate engagement with Tapflow's outreach
                    tool, where you can easily send candidates emails through
                    our ATS feature.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={{ span: 7, offset: 1 }}>
              <img src={outreach} className="landing-features-img" />
            </Col>{" "}
            <Col xs={12} md={6} lg={4}>
              <div className="landing-features-text-box">
                <div>
                  <h4 className="featuresSubtitle">Interviews & offers</h4>
                  <p className="featuresText">
                    Tapflow will allow you to effortlessly schedule interviews
                    and send offers through our ATS feature. What used to take
                    months, now takes just a few days.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={{ span: 7, offset: 1 }}>
              <img src={interview} className="landing-features-img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ClientLandingFeaturesSection;
