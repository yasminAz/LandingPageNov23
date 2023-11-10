import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import showEye from "../../../Assets/images/showEye.svg";
import hideEye from "../../../Assets/images/hideEye.svg";
import google from "../../../Assets/images/google.svg";
import linkedin from "../../../Assets/images/linkedin.svg";
import "../../../Assets/CSS/Client/StartPagesRDandSignup.css";
import Filled40Button from "../../../UIComponents/buttons/Filled40Button";
import AccessStructure from "./AccessStructure";
import arrow from "../../../Assets/images/blackArrow4Access.svg";
export const SignupClient = (props) => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    company_name: "",
  });
  const [shown, setShown] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isLoadingEmail, setLoadingEmail] = useState(false);
  const [errorMsg, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [step, setStep] = useState("email");

  const handlePasswordVisibility = () => {
    if (shown) {
      setShown(false);
    } else {
      setShown(true);
    }
  };
  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  const isStateFullNotAdmin = (e) => {
    if (state.first_name && state.last_name && state.password) {
      return true;
    } else {
      return false;
    }
  };
  const isStateFullAdmin = (e) => {
    if (
      state.first_name &&
      state.last_name &&
      state.password &&
      state.company_name
    ) {
      return true;
    } else {
      return false;
    }
  };
  const existingIsStateFull = (e) => {
    if (state.password) {
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (e) => {
    e.preventDefault();
    setLoadingEmail(true);
    setTimeout(() => {
      setStep("nameAndPassword");
    }, 1000);
  };
  useEffect(() => {
    if (props.existing) {
      setStep("nameAndPassword");
    }
  }, []);
  return (
    <AccessStructure
      props={{
        title: "Sign up",
        text: "Create your account for free! <br /> No credit card required",
        isSignup: true,
        showToggler: true,
      }}
    >
      {step == "email" ? (
        <form onSubmit={validateEmail}>
          <Row>
            <Col xs={12}>
              <label className="LabelForInput">Email</label>
            </Col>
            <Col xs={12}>
              <input
                type="email"
                name="email"
                className={
                  emailError
                    ? "inputField height40 error"
                    : "inputField height40"
                }
                placeholder="Name@company.com"
                onChange={handleChange}
              />
            </Col>
            <Col xs={12}>
              <div className="wordInThemMiddleOfALine">
                <hr />
                <label>Or</label>
                <hr />
              </div>
            </Col>
            <Col xs={12}>
              <p className="signupWithBTNDevSign">
                <img src={google} className="img-fluid" />
                Google
              </p>
              <p
                className="signupWithBTNDevSign"
                style={{ marginBottom: "24px" }}
              >
                <img src={linkedin} className="img-fluid" />
                LinkedIn
              </p>
              {emailError ? (
                <p
                  className="RedErrorMessage"
                  style={{ top: 0, textAlign: "center" }}
                >
                  {emailError}
                </p>
              ) : (
                ""
              )}
              <Filled40Button
                isStateFull={state.email}
                handleSubmit={validateEmail}
                buttonContent={
                  <>
                    Continue <img src={arrow} />
                  </>
                }
                color={"clientYellow"}
                isLoading={isLoadingEmail}
              />
            </Col>
          </Row>
        </form>
      ) : (
        <form onSubmit={HandleSubmit}>
          <Row>
            {props.existing ? (
              <></>
            ) : (
              <>
                {" "}
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
              </>
            )}{" "}
            {props.notAdmin ? (
              <></>
            ) : (
              <>
                <Col xs={12}>
                  <label className="LabelForInput">Company name</label>
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
              </>
            )}
            <Col xs={12}>
              <label className="LabelForInput">Password</label>
            </Col>
            <Col xs={12}>
              <div className="passwordField">
                <input
                  onChange={handleChange}
                  type={shown ? "text" : "password"}
                  name="password"
                  className={
                    state.password.length > 7 || state.password == 0
                      ? "inputField height40"
                      : "inputField height40 error"
                  }
                  placeholder="At least 8 Characters"
                />
                <img
                  src={shown ? hideEye : showEye}
                  className="showHidePassIcon"
                  onClick={handlePasswordVisibility}
                />
                {state.password.length > 7 || state.password == 0 ? (
                  <></>
                ) : (
                  <p className="RedErrorMessage indent20">
                    Password should be at least 8 characters{" "}
                  </p>
                )}
              </div>
            </Col>
            {errorMsg ? (
              <Col xs={12}>
                <p className="submitErrorMessageDevSign">{errorMsg}</p>
              </Col>
            ) : (
              <></>
            )}
            <Col xs={12}>
              <Filled40Button
                isStateFull={
                  props.existing
                    ? existingIsStateFull()
                    : props.notAdmin
                    ? isStateFullNotAdmin()
                    : isStateFullAdmin()
                }
                handleSubmit={HandleSubmit}
                isLoading={isLoading}
                buttonContent={
                  <>
                    Sign up <img src={arrow} />
                  </>
                }
                color={"clientYellow"}
              />
            </Col>
            <Col xs={12}>
              <h6 className="haveAccountDevSign">
                Hitting “Sign up” means that you’ve read and accepted{" "}
                <Link to={"/termsAndConditions"} target="_blank">
                  Terms & Conditions and Privacy Policy
                </Link>
              </h6>
            </Col>
          </Row>
        </form>
      )}
    </AccessStructure>
  );
};

export default SignupClient;
