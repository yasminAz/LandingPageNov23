import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../../../Assets/CSS/LandingPage/FAQ.css";
import arrow from "../../../Assets/images/whiteAccordianArrow.svg";

const FAQ = () => {
  return (
    <>
      <div className="FAQ-blackContainer">
        <Container fluid className="GeneralContainer70">
          <Row>
            <Col xs={12}>
              <div className="FAQ-765Width">
                <h2 className="FAQ-title">FAQs</h2>
                <Accordion defaultActiveKey="0" className="FAQ-Accordion">
                  <Accordion.Item>
                    <Accordion.Header>
                      <img src={arrow} className="accordionArrow" />
                      Lorem ipsum?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item>
                    <Accordion.Header>
                      <img src={arrow} className="accordionArrow" />
                      Lorem ipsum?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item>
                    <Accordion.Header>
                      <img src={arrow} className="accordionArrow" />
                      Lorem ipsum?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item>
                    <Accordion.Header>
                      <img src={arrow} className="accordionArrow" />
                      Lorem ipsum?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FAQ;
