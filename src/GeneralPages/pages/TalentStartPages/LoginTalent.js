import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/tapflow-logo.svg";
import showEye from "../../../Assets/images/showEye.svg";
import hideEye from "../../../Assets/images/hideEye.svg";
import google from "../../../Assets/images/google.svg";
import linkedin from "../../../Assets/images/linkedin.svg";
import DevSignUpIMG from "../../../Assets/images/talentLogin.png";
import DevSignUpIMGSmaller from "../../../Assets/images/talentLogin.png";
import "../../../Assets/CSS/OnePageFormsWithWizard.css";
import Filled40Button from "../../../UIComponents/buttons/Filled40Button";
import ForgetPass from "../../../UIComponents/forget-pass";
import MainFooter from "../../../UIComponents/main-footer";
export const LoginTalent = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [shown, setShown] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [errorsStr, setErrors] = useState("");
  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handlePasswordVisibility = () => {
    if (shown) {
      setShown(false);
    } else {
      setShown(true);
    }
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };
  const isStateFull = (e) => {
    if (state.email && state.password) {
      return true;
    } else {
      return false;
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="agencyBGColor">
        <Container>
          <Row className="spacingTop">
            <Col xs={{ span: 6 }} lg={{ span: 1 }}>
              <img src={logo} className="img-fluid devSignMBAt992" />
            </Col>
          </Row>
          <Row className="spacingBottom">
            <Col xs={{ span: 12 }} lg={{ span: 5, offset: 1 }} xl={4}>
              <Row style={{ paddingTop: "24px" }}>
                <Col xs={12}>
                  <h1 className="SystemStartFormTitle">Login</h1>
                </Col>
                <Col xs={12}>
                  <label className="LabelForInput">Email</label>
                </Col>
                <Col xs={12}>
                  <input
                    type="text"
                    name="email"
                    className={emailError ? "inputField error" : "inputField"}
                    placeholder="example@example.com"
                    onChange={handleChange}
                  />
                  {emailError ? (
                    <p className="RedErrorMessage indent20">{emailError}</p>
                  ) : (
                    ""
                  )}
                </Col>
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
                          ? "inputField"
                          : "inputField error"
                      }
                      placeholder="Password"
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
                <Col xs={12}>
                  <a
                    className="forgotPasswordLink Talent"
                    onClick={handleShow}
                    href="#"
                  >
                    Forgot password?
                  </a>
                </Col>

                {errorsStr ? (
                  <Col xs={12}>
                    <p className="submitErrorMessageDevSign">{errorsStr}</p>
                  </Col>
                ) : (
                  <></>
                )}
                <Col xs={12}>
                  <Filled40Button
                    isStateFull={isStateFull()}
                    handleSubmit={HandleSubmit}
                    isLoading={isLoading}
                    buttonContent={"Login"}
                    color={"orange"}
                  />
                </Col>
                <Col xs={12}>
                  <p className="greyOptionsTextDevSign">Or login with</p>
                </Col>
                <Col xs={12} sm={6}>
                  <button className="signupWithBTNDevSign">
                    <img src={google} className="img-fluid" />
                    Google
                  </button>
                </Col>
                <Col xs={12} sm={6}>
                  <button className="signupWithBTNDevSign">
                    <img src={linkedin} className="img-fluid" />
                    LinkedIn
                  </button>
                </Col>

                <Col xs={12}>
                  <h6 className="haveAccountDevSign">
                    New to Tapflow ?{" "}
                    <Link to={"/Talent/Signup"}>Create an account </Link>
                  </h6>
                </Col>
              </Row>
            </Col>
            <Col xs={{ span: 12 }} lg={6} xl={{ span: 6, offset: 1 }}>
              <img
                src={DevSignUpIMG}
                className="img-fluid MainImgDevSign hideOn1200DevSign"
              />
              <img
                src={DevSignUpIMGSmaller}
                className="img-fluid MainImgDevSign showOn1200DevSign"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <MainFooter talent={true} />
      <ForgetPass
        show={show}
        handleClose={() => {
          handleClose();
        }}
        handleShow={handleShow}
      />
    </>
  );
};

export default LoginTalent;
