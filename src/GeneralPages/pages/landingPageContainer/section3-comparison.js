import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import redStroke from "../../../Assets/images/redStroke.svg";
import colorfulStroke from "../../../Assets/images/colorfulStroke.svg";
import blueArrow from "../../../Assets/images/blueArrow.svg";
import "./client-landingPage.css";

export const ClientLandingComparisonSection = (props) => {
  const history = useHistory();

  return (
    <>
      <div className="clientLandingComparison">
        <Container fluid className="GeneralContainer70">
          <Row>
            <Col xs={12} lg={6}>
              <div className="whiteComparisonDiv">
                <h3 className="titless">
                  What's <span className="bad">wrong</span> with
                  <br /> traditional recruitment? <br />
                  <img src={redStroke} className="redComparisonStroke" />
                </h3>
                <h6 className="subtitles">Manual sourcing</h6>
                <p className="text">
                  Too much effort to get quality candidates
                </p>{" "}
                <h6 className="subtitles">High talent acquisition cost</h6>
                <p className="text">
                  Caused by working with recruiters and agencies
                </p>
                <h6 className="subtitles">Long time to hire</h6>
                <p className="text">
                  Caused by not managing the recruitment process right
                </p>
                <h6 className="subtitles">High drop-off rate</h6>
                <p className="text">
                  Caused by the difficulty of engaging and managing candidates
                </p>
              </div>
            </Col>
            <img src={blueArrow} className="comparisonBlueArrow" />
            <Col xs={12} lg={6}>
              <div className="whiteComparisonDiv">
                <h3 className="titless">
                  How is <span className="colorful">Tapflow</span> <br />
                  the right solution?
                  <br />
                  <img
                    src={colorfulStroke}
                    className="colorfulComparisonStroke"
                  />
                </h3>
                <h6 className="subtitles">Automated sourcing </h6>
                <p className="text">
                  We automatically source right-fit candidates from all over the
                  internet
                </p>{" "}
                <h6 className="subtitles">Feedback-based AI matchmaking</h6>
                <p className="text">
                  Allows us to get you the perfect candidates in much shorter
                  time
                </p>
                <h6 className="subtitles">Built-in tools</h6>
                <p className="text">
                  To do outreach, communicate, schedule interview, and send
                  offers
                </p>
                <h6 className="subtitles">
                  Efficient Applicant Tracking System
                </h6>
                <p className="text">To streamline the recruitment process</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ClientLandingComparisonSection;
