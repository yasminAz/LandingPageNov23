import React from "react";
import "../Assets/CSS/main-footer.css";
import { Link, useHistory } from "react-router-dom";
import tapflow from "../Assets/images/tapflow-logo.svg";
import tapflowClient from "../Assets/images/ClientLogo.svg";
import { Container, Row, Col } from "react-bootstrap";

import insta from "../Assets/images/instagram-footer.svg";
import twitt from "../Assets/images/twitter-footer.svg";
import li from "../Assets/images/linkedin-footer.svg";
import ContactUsModal from "./contact-us-modal/contact-us-modal";
function MainFooter(props) {
  const history = useHistory();
  return (
    <>
      <div
        className={props.talent ? "client-footer darkMode" : "client-footer"}
      >
        <Container fluid className="GeneralContainer70">
          <Row style={{ margin: 0 }}>
            <Col xs={12}>
              <div className="landingFooterDiv">
                <img
                  src={props.talent ? tapflow : tapflowClient}
                  className="landingFooterLogo"
                />
                <ul className="landingFooterLinks">
                  <li>
                    <Link to="/termsAndConditions">Terms & conditions </Link>
                  </li>
                  <li>
                    <Link to="/privacyPolicy">Privacy policy</Link>
                  </li>
                  <li>
                    <ContactUsModal />
                  </li>
                </ul>
                <div className="landingfooterSocials">
                  <p>Follow our socials</p>
                  <div className="landingfooterSocialsIcons">
                    <img
                      src={li}
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/company/tapflow/",
                          "_blank"
                        )
                      }
                    />
                    <img
                      src={insta}
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/tapflowapp/",
                          "_blank"
                        )
                      }
                    />
                    <img
                      src={twitt}
                      onClick={() =>
                        window.open("https://twitter.com/Tapflowapp", "_blank")
                      }
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={
          props.talent ? "allRightsReserved darkMode" : "allRightsReserved"
        }
      >
        <Container>
          <Row>
            <Col xs={12}>
              <p>All rights reserved @Tapflow</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MainFooter;
