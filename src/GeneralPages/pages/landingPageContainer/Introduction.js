import React from "react";
import "../../../Assets/CSS/LandingPage/Introduction.css";
import { Container, Row, Col } from "react-bootstrap";
import Filled56Button from "../../../UIComponents/buttons/Filled56Button";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import introductionIMG from "../../../Assets/images/landingpage.gif";
const Introduction = (props) => {
  const history = useHistory();

  return (
    <div className="introduction-container">
      <Container fluid className="GeneralContainer70">
        <Row>
          <Col xs={12}>
            <h1 className="introduction-title">
              Find the best talent instantly
            </h1>
            <p className="introduction-explanatoryText">
              Tapflow's <strong>smart</strong> sourcing engine{" "}
              <strong>explores thousands</strong> of great-fit profiles in{" "}
              <strong>minutes</strong>. For any role complexity.
            </p>

            <div className="introduction-actionButtons">
              <Filled56Button
                isStateFull={true}
                handleSubmit={() => {
                  history.push("/Client/bookDemo");
                }}
                isLoading={false}
                buttonContent={"Book a demo"}
                color={"white"}
                id={"schedule-a-demo"}
              />
              <Filled56Button
                isStateFull={true}
                handleSubmit={() => {
                  history.push("/Client/signup");
                }}
                isLoading={false}
                id={"start-now"}
                buttonContent={
                  <>
                    Find talent now{" "}
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
            </div>
            <img src={introductionIMG} className="introduction-image" />
            <h2 className="introduction-trustedByTitle">Trusted by</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
