import { useHistory } from "react-router-dom";
import { TalentLandingPageStructure } from "./LandingStructure";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Filled40Button from "../../../UIComponents/buttons/Filled40Button";
import talentLandingPageImage from "../../../Assets/images/talentLandingPageImage.png";
import talentLandingPageImageMobile from "../../../Assets/images/talentLandingImageMobile.png";
import TalentLandingHowDoesTapflowSection from "./section2-HowDoesTapflowHelpYou";
import TalentLandingHowItWorksSection from "./section4-Howitworks";
import TalentLandingWhyUseTFSection from "./section5-whyUseTf";
import TalentLandingYourNextJobSection from "./section7-yourNextJob";
import TalentLandingFeaturesSection from "./section6-featuresSection";
import greenDot from "../../../Assets/images/greenDot.svg";
import redDot from "../../../Assets/images/redDot.svg";
export const TalentLandingPage = (props) => {
  const history = useHistory();

  return (
    <>
      <TalentLandingPageStructure>
        <section className="TalnetLandingIntroductionSection">
          <div className="TitleAndTextDivForTalentLandingPage">
            <Container fluid className="GeneralContainer70">
              <Row>
                <Col xs={12} className="textCenterOn767">
                  <h1 className="TalentLandingH1">
                    Find the <span className="underline">tech</span>{" "}
                    opportunities
                    <br />
                    <span className="highlighted">you desire!</span>
                  </h1>
                  <p className="TalentLandingIntroductionP">
                    Tapflow is the app that connects you to top tech companies.
                  </p>
                  <Filled40Button
                    isStateFull={true}
                    handleSubmit={() => history.push("/talent/signup")}
                    buttonContent={"Sign up"}
                    color={"orange"}
                    customClass={"w-176"}
                  />
                  <p className="TalentLandingIntroductionHelpP">
                    Are you looking for talents?{" "}
                    <Link to="/Client/signup">Sign up as a client</Link>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="imageForTalentLanding">
            <img src={talentLandingPageImage} className="showOnDesktop" />
            <img src={talentLandingPageImageMobile} className="showOnMobile" />
          </div>
          <img src={greenDot} className="talentLandingGreenDot" />
          <img src={redDot} className="talentLandingRedDot" />
        </section>
        <TalentLandingHowDoesTapflowSection />
        <TalentLandingHowItWorksSection />
        <TalentLandingWhyUseTFSection />
        <TalentLandingFeaturesSection />
        <TalentLandingYourNextJobSection />
      </TalentLandingPageStructure>
    </>
  );
};

export default TalentLandingPage;
