import React from "react";
import "../Assets/CSS/main-footer.css";
import { Link, useHistory } from "react-router-dom";
import tapflowClient from "../Assets/images/TF-LogoForTheFooter.svg";
import { Container, Row, Col } from "react-bootstrap";

import insta from "../Assets/images/instagram-footer.svg";
import twitt from "../Assets/images/twitter-footer.svg";
import li from "../Assets/images/linkedin-footer.svg";
import youtube from "../Assets/images/youtube.svg";
import facebook from "../Assets/images/facebook.svg";
import ContactUsModal from "./contact-us-modal/contact-us-modal";
import Filled40Button from "./buttons/Filled40Button";
function ClientMainFooter() {
  const history = useHistory();
  return (
    <>
      <div className="client-footer" style={{ paddingBottom: 0 }}>
        <Container fluid className="GeneralContainer70">
          <Row style={{ margin: 0 }}>
            <Col xs={12}>
              <div className="landingFooterDiv">
                <div className="customFooterLogoWidth">
                  <img src={tapflowClient} className="img-fluid" />
                  {/* <a href={"/talent"}>Looking for a job?</a>
                  <Filled40Button
                    isStateFull={true}
                    handleSubmit={() => history.push("/Client/signup")}
                    buttonContent={"Sign up"}
                    color={"clientYellow"}
                    customClass={"w-147"}
                  /> */}
                </div>
                <ul className="landingFooterLinks">
                  {/* <li>
                    <Link to="/talent">I am a job seeker</Link>
                  </li> */}
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
                  <p style={{ textAlign: "start" }}>Follow our socials</p>
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
                    <img
                      src={youtube}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/@tapflow9282",
                          "_blank"
                        )
                      }
                    />{" "}
                    <img
                      src={facebook}
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/profile.php?id=100064991346184&mibextid=ZbWKwL",
                          "_blank"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="allRightsReserved">
          <Container>
            <Row>
              <Col xs={12}>
                <p>All rights reserved @Tapflow</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ClientMainFooter;
