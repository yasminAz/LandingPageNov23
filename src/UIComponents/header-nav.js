import "../Assets/CSS/header-nav.css";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import tapflowClient from "../Assets/images/TF-client-logo.svg";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import Filled40Button from "./buttons/Filled40Button";
import ContactUsModal from "./contact-us-modal/contact-us-modal";
import starEmoji from "../Assets/images/Dizzy.png";
function HeaderNav(props) {
  const history = useHistory();

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  return (
    <>
      <Navbar expand="lg" className="landing-navbar">
        <Container fluid className="GeneralContainer70">
          <Navbar.Brand href="/">
            <img src={tapflowClient} className="HeaderNav-logo" />
          </Navbar.Brand>
          {!props.noBTNS && (
            <>
              {" "}
              <div className="restructureOn575">
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 16H21C21.2652 16 21.5196 16.1054 21.7071 16.2929C21.8946 16.4804 22 16.7348 22 17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H11C10.7348 18 10.4804 17.8946 10.2929 17.7071C10.1054 17.5196 10 17.2652 10 17C10 16.7348 10.1054 16.4804 10.2929 16.2929C10.4804 16.1054 10.7348 16 11 16ZM21 8H3C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8V8ZM3 11H21C21.2652 11 21.5196 11.1054 21.7071 11.2929C21.8946 11.4804 22 11.7348 22 12C22 12.2652 21.8946 12.5196 21.7071 12.7071C21.5196 12.8946 21.2652 13 21 13H3C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12C2 11.7348 2.10536 11.4804 2.29289 11.2929C2.48043 11.1054 2.73478 11 3 11Z"
                      fill="#929292"
                    />
                  </svg>
                </Navbar.Toggle>
              </div>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Link to="/pricing" className="rtlOn992">
                    Pricing
                  </Link>{" "}
                  <Link to="/generateJD" className="rtlOn992">
                    Generate a JD
                  </Link>
                  <Link to="#">
                    <ContactUsModal />
                  </Link>
                  <Link to="/Talent">I am a job seeker</Link>
                  {/* <div className="landingNavBarButtonDiv">
                    <Filled40Button
                      isStateFull={true}
                      handleSubmit={() => history.push("/Talent")}
                      isLoading={false}
                      buttonContent={"I am a job seeker"}
                      color={"orangeOutline"}
                    />
                  </div> */}
                  <div className="landingNavBarButtonDiv">
                    <Filled40Button
                      isStateFull={true}
                      handleSubmit={() => history.push("/client/login")}
                      isLoading={false}
                      buttonContent={"Login"}
                      color={"blue"}
                    />
                  </div>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
      {props.showBanner && (
        <div
          className={`NewFeaturesBanner ${
            scrollDirection === "down" && "hide"
          }`}
        >
          <Container fluid className="GeneralContainer70">
            <Row>
              <Col xs={12}>
                <div className="NewFeaturesBannerContainer">
                  <img src={starEmoji} className="NewFeaturesBannerEmoji" />
                  <p className="NewFeaturesBannerTextAndLink">
                    Transform your recruitment process with our advanced
                    technical applicant tracking system,{"  "}
                    {"  "}
                    <Link to="/ats">
                      Join our waitlist now & get 3-months free access!
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}

export default HeaderNav;
