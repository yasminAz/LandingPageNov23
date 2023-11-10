import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import google from "../../../Assets/images/google.svg";
import linkedin from "../../../Assets/images/linkedin.svg";
import showEye from "../../../Assets/images/showEye.svg";
import hideEye from "../../../Assets/images/hideEye.svg";
import "../../../Assets/CSS/Client/StartPagesRDandSignup.css";
import Filled40Button from "../../../UIComponents/buttons/Filled40Button";
import ForgetPass from "../../../UIComponents/forget-pass";
import AccessStructure from "../../../GeneralPages/pages/ClientStartPages/AccessStructure";
import arrow from "../../../Assets/images/blackArrow4Access.svg";
export const LoginClient = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [shown, setShown] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorsStr, setErrors] = useState("");

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
      <AccessStructure
        props={{
          title: "Login",
          isLogin: true,
          showToggler: true,
        }}
      >
        <form onSubmit={HandleSubmit}>
          <Row>
            {props.existing ? (
              <></>
            ) : (
              <>
                {" "}
                <Col xs={12}>
                  <label className="LabelForInput">Email</label>
                </Col>
                <Col xs={12}>
                  <input
                    type="text"
                    name="email"
                    className="inputField height40"
                    placeholder="Name@company.com"
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
              <p
                className="forgotPasswordLink Client"
                to="#"
                onClick={handleShow}
              >
                Forgot password?
              </p>
            </Col>
            <Col xs={12}>
              <div className="wordInThemMiddleOfALine">
                <hr />
                <label>Or</label>
                <hr />
              </div>
            </Col>
            <Col xs={12}>
              <p
                className="signupWithBTNDevSign"
                onClick={
                  // HandleGoogle
                  () =>
                    (window.location.href =
                      process.env.REACT_APP_API_LINK +
                      "api2/talent/googleRegister")
                }
                style={{ cursor: "pointer" }}
              >
                <img src={google} className="img-fluid" />
                Google
              </p>
              <p
                className="signupWithBTNDevSign"
                onClick={
                  // Handle linkedin
                  () =>
                    (window.location.href =
                      process.env.REACT_APP_API_LINK +
                      "api2/talent/linkedinRegister")
                }
                style={{ cursor: "pointer" }}
              >
                <img src={linkedin} className="img-fluid" />
                LinkedIn
              </p>
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
                isStateFull={isStateFull}
                handleSubmit={HandleSubmit}
                isLoading={isLoading}
                buttonContent={
                  <>
                    Login <img src={arrow} />
                  </>
                }
                color={"clientYellow"}
              />
            </Col>
          </Row>
        </form>
      </AccessStructure>

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

export default LoginClient;
