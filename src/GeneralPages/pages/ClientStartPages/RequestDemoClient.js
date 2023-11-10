import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../Assets/CSS/Client/StartPagesRDandSignup.css";
import { useParams } from "react-router-dom";
import Filled40Button from "../../../UIComponents/buttons/Filled40Button";
import AccessStructure from "./AccessStructure";
export const RequestDemoClient = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company_name: "",
    role: "",
    seniority: "",
    skills: [],
    hearAboutUs: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setError] = useState(false);
  const [successMessage, SetSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleReactSelectData = (e, name) => {
    setState((prevState) => {
      return { ...prevState, [name]: e };
    });
  };
  const HandleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
  };
  const isStateFull = (e) => {
    if (
      state.first_name &&
      state.last_name &&
      state.email &&
      state.company_name &&
      state.hearAboutUs
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <AccessStructure
      props={{
        title: "Book a demo call",
        text: "Get a full walkthrough",
        showToggler: false,
      }}
    >
      <Row>
        <Col xs={12}>
          <label className="LabelForInput">Name</label>
        </Col>
        <Col xs={12} md={6}>
          <input
            type="text"
            name="first_name"
            className="inputField height40"
            placeholder="First Name"
            onChange={handleChange}
          />
        </Col>
        <Col xs={12} md={6}>
          <input
            type="text"
            name="last_name"
            className="inputField height40"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </Col>
        <Col xs={12}>
          <label className="LabelForInput">Email</label>
        </Col>
        <Col xs={12}>
          <input
            type="text"
            name="email"
            className={
              emailError ? "inputField height40 error" : "inputField height40"
            }
            placeholder="Name@company.com"
            onChange={handleChange}
          />
          {emailError ? (
            <p className="RedErrorMessage indent20">{emailError}</p>
          ) : (
            ""
          )}
        </Col>
        <Col xs={12}>
          <label className="LabelForInput">Company</label>
        </Col>
        <Col xs={12}>
          <input
            type="text"
            name="company_name"
            className="inputField height40"
            placeholder="Company name"
            onChange={handleChange}
          />
        </Col>

        {errorMsg ? (
          <Col xs={12}>
            <p className="submitErrorMessageDevSign">{errorMsg}</p>
          </Col>
        ) : (
          <></>
        )}
        <Col xs={12}>
          {successMessage && (
            <div className="blueSkillsBox" style={{ height: "40px" }}>
              Form submitted successfully! We will contact you soon to schedule
              a demo call!
            </div>
          )}

          <Filled40Button
            isStateFull={isStateFull()}
            handleSubmit={HandleSubmit}
            isLoading={isLoading}
            buttonContent={"Request Now"}
            color={"clientYellow"}
            id={"demo-requested"}
          />
        </Col>
        <Col xs={12}>
          <h6 className="haveAccountDevSign">
            Already Have An Account? <Link to={"/client/Login"}>Login </Link>
          </h6>
        </Col>
      </Row>
    </AccessStructure>
  );
};

export default RequestDemoClient;
