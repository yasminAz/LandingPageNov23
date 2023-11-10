import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "../../../Assets/CSS/LandingPage/teamsCarousel.css";
import maqsam from "../../../Assets/images/tempLogo.png";
import profileImage from "../../../Assets/images/circleImage.png";
import { toString } from "file-loader";
const TeamsCarouselSection = () => {
  return (
    <div className="teamsCarousel-div">
      <Container fluid className="GeneralContainer70">
        <Row>
          <Col xs={12}>
            <h2 className="teamsCarousel-title">
              Innovative teams <strong>love</strong> Tapflow
            </h2>
          </Col>
          <Col xs={12}>
            <Carousel
              indicators={false}
              prevIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                >
                  <path
                    d="M28.5 38.7765L30.6515 36.625L24.089 30.0625H39.4375V26.9375H24.089L30.6515 20.375L28.5 18.2235L18.2235 28.5L28.5 38.7765ZM28.5105 56.625C24.6213 56.625 20.9647 55.887 17.5409 54.411C14.1171 52.935 11.1389 50.9318 8.60617 48.4015C6.07351 45.8712 4.06849 42.8957 2.59109 39.4752C1.1137 36.0545 0.375 32.3996 0.375 28.5105C0.375 24.6213 1.113 20.9647 2.58898 17.5409C4.06503 14.1171 6.0682 11.1389 8.59852 8.60617C11.1288 6.07352 14.1043 4.06849 17.5248 2.5911C20.9455 1.1137 24.6004 0.375 28.4895 0.375C32.3787 0.375 36.0353 1.11299 39.4591 2.58898C42.8829 4.06503 45.8611 6.0682 48.3938 8.59851C50.9265 11.1288 52.9315 14.1043 54.4089 17.5248C55.8863 20.9455 56.625 24.6004 56.625 28.4895C56.625 32.3787 55.887 36.0353 54.411 39.4591C52.935 42.8829 50.9318 45.8611 48.4015 48.3938C45.8712 50.9265 42.8957 52.9315 39.4752 54.4089C36.0545 55.8863 32.3996 56.625 28.5105 56.625ZM28.5 53.5C35.4792 53.5 41.3906 51.0781 46.2344 46.2344C51.0781 41.3906 53.5 35.4792 53.5 28.5C53.5 21.5208 51.0781 15.6094 46.2344 10.7656C41.3906 5.92188 35.4792 3.5 28.5 3.5C21.5208 3.5 15.6094 5.92188 10.7656 10.7656C5.92188 15.6094 3.5 21.5208 3.5 28.5C3.5 35.4792 5.92188 41.3906 10.7656 46.2344C15.6094 51.0781 21.5208 53.5 28.5 53.5Z"
                    fill="#181818"
                  />
                </svg>
              }
              nextIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                >
                  <path
                    d="M28.5 18.2235L26.3485 20.375L32.911 26.9375H17.5625V30.0625H32.911L26.3485 36.625L28.5 38.7765L38.7765 28.5L28.5 18.2235ZM28.4895 0.375C32.3787 0.375 36.0353 1.113 39.4591 2.58899C42.8829 4.06503 45.8611 6.0682 48.3938 8.59851C50.9265 11.1288 52.9315 14.1043 54.4089 17.5248C55.8863 20.9455 56.625 24.6004 56.625 28.4895C56.625 32.3787 55.887 36.0353 54.411 39.4591C52.935 42.8829 50.9318 45.8611 48.4015 48.3938C45.8712 50.9265 42.8957 52.9315 39.4752 54.4089C36.0545 55.8863 32.3996 56.625 28.5105 56.625C24.6213 56.625 20.9647 55.887 17.5409 54.411C14.1171 52.935 11.1389 50.9318 8.60617 48.4015C6.07351 45.8712 4.06849 42.8957 2.59109 39.4752C1.1137 36.0545 0.375 32.3996 0.375 28.5105C0.375 24.6213 1.113 20.9647 2.58899 17.5409C4.06503 14.1171 6.0682 11.1389 8.59851 8.60617C11.1288 6.07351 14.1043 4.06848 17.5248 2.59109C20.9455 1.11369 24.6004 0.375 28.4895 0.375ZM28.5 3.5C21.5208 3.5 15.6094 5.92188 10.7656 10.7656C5.92188 15.6094 3.5 21.5208 3.5 28.5C3.5 35.4792 5.92188 41.3906 10.7656 46.2344C15.6094 51.0781 21.5208 53.5 28.5 53.5C35.4792 53.5 41.3906 51.0781 46.2344 46.2344C51.0781 41.3906 53.5 35.4792 53.5 28.5C53.5 21.5208 51.0781 15.6094 46.2344 10.7656C41.3906 5.92188 35.4792 3.5 28.5 3.5Z"
                    fill="#181818"
                  />
                </svg>
              }
            >
              <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={4}>
                    <div className="teamsCard">
                      <img src={maqsam} className="teamsCard-teamLogo" />
                      <p className="teamsCard-commentText">
                        "Before implementing Tapflow, our sales team was
                        drowning in spreadsheets, manual follow-ups, and missed
                        opportunities. With Tapflow, we've not only seen a 30%
                        increase in our sales but also a significant improvement
                        in customer satisfaction. This software isn't just a
                        tool; it's a game-changer for our business. Highly
                        recommended!"
                      </p>
                      <div className="teamsCard-teamCommenterImageAndName">
                        <img
                          src={profileImage}
                          className="teamsCard-teamCommenterImage"
                        />
                        <div>
                          <h6 className="teamsCard-teamCommenterName">
                            Mohammad salah
                          </h6>
                          <p className="teamsCard-teamCommenterPosition">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamsCarouselSection;
