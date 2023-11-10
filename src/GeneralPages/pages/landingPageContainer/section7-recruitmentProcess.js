import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import checklist from "../../../Assets/images/checklist.png";
import rocket from "../../../Assets/images/rocket.svg";
import arrow from "../../../Assets/images/yellowArrow-landing.svg";
import syria from "../../../Assets/images/syriaPerson.png";
import "./client-landingPage.css";
import Filled40Button from "../../../UIComponents/buttons/Filled40Button";

export const ClientLandingRecruitmentProcessSection = (props) => {
  const history = useHistory();

  return (
    <>
      <div className="clientLandingRecruitmentProcess">
        <Container fluid className="GeneralContainer70">
          <Row>
            <Col xs={12}>
              <div className="WhatDoesTapflowBox recruitmentProcess">
                <h3>
                  Your recruitment process can make or break your company, so
                  leave that on us!
                  <Filled40Button
                    isStateFull={true}
                    handleSubmit={() => history.push("/Client/signup")}
                    buttonContent={"Start free trial!"}
                    color={"blue"}
                    customClass={"w-176"}
                    customStyle={{
                      display: "block",
                      margin: "0 auto",
                      marginTop: "32px",
                    }}
                  />
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ClientLandingRecruitmentProcessSection;
