import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import check4Why2Choose from "../../../Assets/images/check4Why2Choose.svg";

export const TalentLandingWhyUseTFSection = (props) => {
  const history = useHistory();

  return (
    <>
      <section className="talentLandingWhyUseTFSection">
        <Container fluid className="GeneralContainer70">
          <div className="talentLandingLighterColorBox">
            <Row>
              <Col xs={12}>
                <h1
                  className="TalentLandingH1 marginTop0"
                  style={{ textAlign: "center" }}
                >
                  Why you should use{" "}
                  <span className="highlightedOrange">Tapflow?</span>
                </h1>{" "}
              </Col>
              <Col xs={12} md={4}>
                <div className="whyYouShouldUseTFListItem">
                  <img src={check4Why2Choose} />
                  <p>Get matched with the right tech company </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="whyYouShouldUseTFListItem">
                  <img src={check4Why2Choose} />
                  <p>Personalize job hunting experience</p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="whyYouShouldUseTFListItem">
                  <img src={check4Why2Choose} />
                  <p>Get the exposure you deserve</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TalentLandingWhyUseTFSection;
