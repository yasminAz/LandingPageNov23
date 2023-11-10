import React, { useState } from "react";
import "../../../Assets/CSS/LandingPage/TapflowVsCompetitors.css";
import { Container, Row, Col } from "react-bootstrap";

import competitorLinkedIn from "../../../Assets/images/competitorLinkedIn.svg";
import competitorLinkedInRecruit from "../../../Assets/images/competitorLinkedInRecruit.svg";
import competitorOutsourcing from "../../../Assets/images/competitorOutsource.svg";
import competitorLinkedInGREY from "../../../Assets/images/competitorLinkedInGREY.svg";
import competitorLinkedInRecruitGREY from "../../../Assets/images/competitorLinkedInRecruitGREY.svg";
import competitorOutsourcingGREY from "../../../Assets/images/competitorOutsourceGREY.svg";
import linkedin from "../../../Assets/images/linkedin-competitor.svg";
import tapflow from "../../../Assets/images/tapflow-competitor.svg";
import outsourcing from "../../../Assets/images/outsourcing-competitor.svg";
import linkedinrecruiter from "../../../Assets/images/linkedinrecruiter-competitor.svg";
import x from "../../../Assets/images/compitetor-x.svg";
import check from "../../../Assets/images/competitor-check.svg";

const TapflowVSCompetitors = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="TapflowVsCompetitors-div">
      <Container fluid className="GeneralContainer70">
        <Row>
          <Col xs={12}>
            <h2 className="TapflowVsCompetitors-title">
              Tapflow <span>vs.</span>
            </h2>
          </Col>
          <Col xs={12}>
            <div className="TapflowVsCompetitors-SubTitlesDiv">
              <div
                className={
                  activeSlide == 0
                    ? "TapflowVsCompetitors-SubTitle selected"
                    : "TapflowVsCompetitors-SubTitle"
                }
                onClick={() => setActiveSlide(0)}
              >
                <img
                  src={
                    activeSlide == 0
                      ? competitorLinkedIn
                      : competitorLinkedInGREY
                  }
                />
                <span>LinkedIn recruiter</span>
              </div>
              {/* <div
                className={
                  activeSlide == 1
                    ? "TapflowVsCompetitors-SubTitle selected"
                    : "TapflowVsCompetitors-SubTitle"
                }
                onClick={() => setActiveSlide(1)}
              >
                <img
                  src={
                    activeSlide == 1
                      ? competitorLinkedInRecruit
                      : competitorLinkedInRecruitGREY
                  }
                />
                <span>LinkedIn recruiter</span>
              </div> */}
              <div
                className={
                  activeSlide == 2
                    ? "TapflowVsCompetitors-SubTitle selected"
                    : "TapflowVsCompetitors-SubTitle"
                }
                onClick={() => setActiveSlide(2)}
              >
                <img
                  src={
                    activeSlide == 2
                      ? competitorOutsourcing
                      : competitorOutsourcingGREY
                  }
                />
                <span>Recruitment CRM’s</span>
              </div>
            </div>
          </Col>
          {activeSlide == 0 ? (
            <>
              {" "}
              <Col xs={12} sm={6}>
                <div className="whiteBoxAndBlackBorder">
                  <div className="TapflowVsCompetitors-titleAndImage">
                    <img src={linkedin} />
                    <h5>LinkedIn recruiter</h5>
                  </div>
                  <ul className="TapflowVsCompetitors-competitorList">
                    <li>
                      <img src={x} /> Figure out what the best filters are
                    </li>
                    <li>
                      <img src={x} /> Go through each profile and compare
                      manually
                    </li>
                    <li>
                      <img src={x} /> In-optimal management
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="whiteBoxAndBlackBorder">
                  <div className="TapflowVsCompetitors-titleAndImage">
                    <img src={tapflow} />
                    <h5>Tapflow</h5>
                  </div>
                  <ul className="TapflowVsCompetitors-competitorList">
                    <li>
                      <img src={check} /> AI-powered smart search engine to
                      source candidates
                    </li>
                    <li>
                      <img src={check} /> AI screening to filter out and rank
                      candidates
                    </li>
                    <li>
                      <img src={check} /> Candidate relationship management
                    </li>
                  </ul>
                </div>
              </Col>
            </>
          ) : activeSlide == 1 ? (
            <>
              <Col xs={12} sm={6}>
                <div className="whiteBoxAndBlackBorder">
                  <div className="TapflowVsCompetitors-titleAndImage">
                    <img src={linkedinrecruiter} />
                    <h5>LinkedIn recruiter</h5>
                  </div>
                  <ul className="TapflowVsCompetitors-competitorList">
                    <li>
                      <img src={x} /> Time to filter manually
                    </li>
                    <li>
                      <img src={x} /> Now I have to go through each profile and
                      compare manually
                    </li>
                    <li>
                      <img src={x} /> I am limited with my reach
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="whiteBoxAndBlackBorder">
                  <div className="TapflowVsCompetitors-titleAndImage">
                    <img src={tapflow} />
                    <h5>Tapflow</h5>
                  </div>
                  <ul className="TapflowVsCompetitors-competitorList">
                    <li>
                      <img src={check} /> I’ll provide you with every possible
                      candidate
                    </li>
                    <li>
                      <img src={check} /> I’ll get you all the best possible fit
                      profiles
                    </li>
                    <li>
                      <img src={check} /> Just a handful of perfectly matched
                      candidates
                    </li>
                  </ul>
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col xs={12} sm={6}>
                <div className="whiteBoxAndBlackBorder">
                  <div className="TapflowVsCompetitors-titleAndImage">
                    <img src={outsourcing} />
                    <h5>Recruitment CRMs</h5>
                  </div>
                  <ul className="TapflowVsCompetitors-competitorList">
                    <li>
                      <img src={x} /> Very complicated user experience
                    </li>
                    <li>
                      <img src={x} /> Sourcing is a useless chrome extension
                    </li>
                    <li>
                      <img src={x} /> Huge cost and low value for money
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="whiteBoxAndBlackBorder">
                  <div className="TapflowVsCompetitors-titleAndImage">
                    <img src={tapflow} />
                    <h5>Tapflow</h5>
                  </div>
                  <ul className="TapflowVsCompetitors-competitorList">
                    <li>
                      <img src={check} /> Built by recruiters for recruiters
                    </li>
                    <li>
                      <img src={check} /> AI-powered candidate sourcing and
                      screening
                    </li>
                    <li>
                      <img src={check} /> Reasonable pricing and huge value for
                      money
                    </li>
                  </ul>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default TapflowVSCompetitors;
