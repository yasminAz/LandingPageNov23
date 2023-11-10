import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import girlImage from "../../../Assets/images/howDoesTapflowHelpIMG.png";
import one from "../../../Assets/images/one.svg";
import two from "../../../Assets/images/two.svg";
import three from "../../../Assets/images/three.svg";
import four from "../../../Assets/images/four.svg";
import talentHowItWorks from "../../../Assets/images/talentHowItWorks.png";

export const TalentLandingHowItWorksSection = (props) => {
  const history = useHistory();

  return (
    <>
      <section className="talentLandingHowItWorksSection">
        <Container fluid className="GeneralContainer70">
          <Row>
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src={talentHowItWorks} className="img-fluid" />
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              xl={{ offset: 1, span: 5, order: 2 }}
            >
              <h1 className="TalentLandingH1 marginTop0">
                How it <span className="underline">works? </span>
              </h1>
              <div className="howItWorksListItemWithImage">
                <img src={one} />
                <p>Sign up and create an account </p>
              </div>{" "}
              <div className="howItWorksListItemWithImage">
                <img src={two} />
                <p>Complete your profile</p>
              </div>
              <div className="howItWorksListItemWithImage">
                <img src={three} />
                <p>Get matched with roles you desire</p>
              </div>{" "}
              <div className="howItWorksListItemWithImage">
                <img src={four} />
                <p>Apply and dive into the process</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TalentLandingHowItWorksSection;
