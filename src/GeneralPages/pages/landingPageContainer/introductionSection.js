import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./client-landingPage.css";
import Filled40Button from "../../../UIComponents/buttons/Filled40Button";
import video from "../../../Assets/videos/tapflowLanding.mp4";
import videoCover from "../../../Assets/images/videoCover.png";
import { useRef } from "react";
export const ClientLandingIntroductionSection = (props) => {
  const history = useHistory();
  let vid = document.getElementById("LandingPageVideo");
  const videoRef = useRef();
  return (
    <>
      <div className="clientLandingIntroductionSection">
        <Container fluid className="GeneralContainer70">
          <Row className="introductionRow">
            <Col
              xs={12}
              lg={{ span: 7 }}
              xl={{ span: 5 }}
              className="centerOn992Landing"
            >
              <h1 className="clientLandingH1Colorful">
                Automate
                <br /> headhunting with AI
              </h1>
              {/* <h2 className="clientLandingH2">
                A better way to source and engage talent
              </h2> */}
              <p className="clientLandingIntroductionP">
                Tapflow helps modern recruitment teams source A+ and hirable
                talent in few minutes rather than days!
              </p>
              <Filled40Button
                isStateFull={true}
                handleSubmit={() => {
                  videoRef.current.play();
                  var scrollDiv =
                    document.getElementById("landingVideo1").offsetTop;
                  window.scrollTo({ top: scrollDiv - 80, behavior: "smooth" });
                }}
                buttonContent={
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_13883_6473)">
                        <path d="M8 5V19L19 12L8 5Z" fill="#1FA3FF" />
                      </g>
                      <defs>
                        <clipPath id="clip0_13883_6473">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    See how it works
                  </>
                }
                color={"blueOutline"}
                customClass={"w-176"}
                customStyle={{ background: "transparent" }}
              />
              <Filled40Button
                isStateFull={true}
                handleSubmit={() => history.push("/Client/signup")}
                buttonContent={"Start free trial!"}
                color={"blue"}
                customClass={"w-176"}
                customStyle={{ margin: "8px 12px" }}
              />
            </Col>{" "}
            <Col xs={12} lg={{ span: 5 }} xl={{ span: 6, offset: 1 }}>
              <video
                controls
                poster={videoCover}
                className="clientLandingPageVideo"
                ref={videoRef}
                id="landingVideo1"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ClientLandingIntroductionSection;
