import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../Assets/CSS/LandingPage/WithVsWithoutTF.css";
import WithVsWithoutTF1 from "../../../Assets/images/WithVsWithoutTF-1.png";
import WithVsWithoutTF2 from "../../../Assets/images/WithVsWithoutTF-2.png";
import { useVisible } from "../../../UIComponents/visible";
import Filled100Button from "../../../UIComponents/buttons/Filled100Button";
import { useHistory } from "react-router-dom";
const WithVsWithoutTF = () => {
  const domRef = useRef();
  const domRef2 = useRef();
  const isVisible = useVisible(domRef);
  const isVisible2 = useVisible(domRef2);
  const history = useHistory();
  return (
    <div className={`WithVsWithoutTF-Container`} ref={domRef}>
      <Container fluid className="GeneralContainer70">
        <Row
          ref={domRef}
          className={`WithVsWithoutTF-row ${isVisible ? "is-visible" : ""}`}
        >
          <Col xs={12} md={7} xl={5}>
            <h6 className="WithVsWithoutTF-indicatorText">Without Tapflow </h6>
            <h2 className="WithVsWithoutTF-title">Manual and slow</h2>
            <p className="WithVsWithoutTF-paragraph">
              Sourcing involves a lot of manual work, such as filtration,
              reviewing profiles, and reaching out to candidates. This takes
              days and weeks of work to get done.
            </p>
          </Col>
          <Col xs={12} md={5} xl={7}>
            <img src={WithVsWithoutTF1} className="img-fluid" />
          </Col>
        </Row>
        <Row
          ref={domRef2}
          className={`WithVsWithoutTF-row ${isVisible2 ? "is-visible" : ""}`}
        >
          <Col xs={12} md={7} xl={5}>
            <h6 className="WithVsWithoutTF-indicatorText">With Tapflow</h6>
            <h2 className="WithVsWithoutTF-title">AI Automation</h2>
            <p className="WithVsWithoutTF-paragraph">
              Tapflow will automate your workflows to collect huge and high
              quality talent pools, and will filter them according to your
              strategy. All within minutes.
            </p>
          </Col>
          <Col xs={12} md={5} xl={7}>
            <img src={WithVsWithoutTF2} className="img-fluid" />
          </Col>
          <Col xs={12} md={4}>
            <Filled100Button
              isStateFull={true}
              handleSubmit={() => {
                history.push("/Client/signup");
              }}
              id={"start-now"}
              isLoading={false}
              buttonContent={
                <>
                  Find talent now!{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_16835_3199)">
                      <path
                        d="M16.0006 5.33268L14.1206 7.21268L21.5606 14.666L5.33398 14.666L5.33398 17.3327L21.5606 17.3327L14.1073 24.7727L16.0006 26.666L26.6673 15.9993L16.0006 5.33268Z"
                        fill="#181818"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_16835_3199">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(32 32) rotate(180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </>
              }
              color={"yellow"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WithVsWithoutTF;
