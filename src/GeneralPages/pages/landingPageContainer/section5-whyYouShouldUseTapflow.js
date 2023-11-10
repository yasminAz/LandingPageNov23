import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import whyYouShouldUseImg from "../../../Assets/images/whyYouShouldUseImg.png";
import "./client-landingPage.css";

export const ClientLandingWhyYouShouldUseSection = () => {
  return (
    <>
      <section className="clientLandingWhyYouShouldUseSection">
        <Container fluid className="GeneralContainer70">
          <Row className="centeredWhyYouShouldRow">
            <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 6 }}>
              <img src={whyYouShouldUseImg} className="whyYouShouldUseImg" />
            </Col>
            <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 6 }}>
              <h3 className="landingTitleWithDecorations">
                Why you should use <span className="underline">Tapflow ?</span>
              </h3>
              <hr className="clientLandingWhyYouShouldUseHR" />
              <ul className="clientLandingWhyYouShouldUseUL">
                <li>
                  <h5>We’ll automate all talent sourcing methods for you</h5>
                  <p>
                    No need to post everywhere and do headhunting anymore. We
                    will utilize headhunting, scrapping, social media and job
                    sites to find you the right profiles
                  </p>
                </li>
                <li>
                  <h5>
                    We built the right features to help you recruit the best
                    talent
                  </h5>
                  <p>
                    Our applicant tracking system will allow you to collaborate
                    with your team, evaluate candidates, schedule interviews,
                    send offers, and much more.
                  </p>
                </li>
                <li>
                  <h5>AI driven approach to get the best results</h5>
                  <p>
                    We’re using AI in matchmaking to get you the best profiles
                    from the first time. Our AI model learns from your feedback
                    and other feedback to understand which profiles and the best
                    for each role.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ClientLandingWhyYouShouldUseSection;
