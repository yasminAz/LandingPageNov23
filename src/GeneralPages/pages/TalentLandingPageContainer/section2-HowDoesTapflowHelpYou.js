import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import girlImage from "../../../Assets/images/howDoesTapflowHelpIMG.png";
import sparkle from "../../../Assets/images/Sparkles.svg";
import girlImageMobile from "../../../Assets/images/howDoesTapflowHelpIMG-MOBILE.png";
import chonkyArrow from "../../../Assets/images/chonkyYellowArrow.svg";

export const TalentLandingHowDoesTapflowSection = (props) => {
  const history = useHistory();

  return (
    <>
      <section className="talentLandingHowDoestfHelpSection">
        <Container fluid className="GeneralContainer70">
          <div className="talentLandingHowDoestfHelpDiv">
            <Row>
              <Col xs={{ span: 12, order: 2 }} lg={{ span: 9, order: 1 }}>
                <h3 className="howDoesTitleBlack">
                  How does <span className="orange">Tapflow</span> help you?
                </h3>
                <ul className="howDoesUL">
                  <li>
                    More opportunities and more growth{" "}
                    <img src={sparkle} className="hideon767" />
                  </li>
                  <li>
                    Matchmaking algorithms that know what you're looking for{" "}
                  </li>
                </ul>
              </Col>
              <Col xs={{ span: 12, order: 1 }} lg={{ span: 3, order: 2 }}>
                <img src={girlImage} className="howDoesOverflowingImage" />
                <img
                  src={girlImageMobile}
                  className="howDoesOverflowingImage4Mobile"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TalentLandingHowDoesTapflowSection;
