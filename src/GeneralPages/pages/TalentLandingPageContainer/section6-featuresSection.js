import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import talentFeatures from "../../../Assets/images/talentFeatures.png";
import talentFeaturesMobile from "../../../Assets/images/talentFeaturesMobile.png";
export const TalentLandingFeaturesSection = (props) => {
  const history = useHistory();

  return (
    <>
      <section className="talentLandingFeaturesSection">
        <Container fluid className="GeneralContainer70">
          <Row>
            <Col xs={12} style={{ textAlign: "center" }}>
              <h1
                className="TalentLandingH1 marginTop0"
                style={{ textAlign: "center" }}
              >
                <span className="underline">Features</span>
              </h1>
            </Col>{" "}
            <Col xs={12} style={{ textAlign: "center" }}>
              <img
                src={talentFeatures}
                className="img-fluid featuresImageLarge"
              />{" "}
              <img
                src={talentFeaturesMobile}
                className="img-fluid featuresImageMobile"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TalentLandingFeaturesSection;
