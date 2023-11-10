import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import ModalStructure from "./modalStructure";
import Filled40Button from "./buttons/Filled40Button";
import forgetPassIMG from "../Assets/images/forgetPassIMG.png";
function ForgetPass(props) {
  //agency Navigator Controller
  const [email, setEmail] = useState("");
  const [emailResp, setEmailResp] = useState({
    fail: false,
    values: "",
    error: "",
    isLoading: false,
  });

  const isStateFull = (e) => {
    if (email) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    setEmailResp({
      fail: false,
      values: "",
      error: "",
      isLoading: true,
    });

    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios
        .post("/api/forgetPassword", formData)
        .then((response) => {
          if (response.data.status.code === 200) {
            // do something
            setEmailResp({
              fail: false,
              values: response.data.data,
              error: "",
              isLoading: false,
            });
          } else if (response.data.status.code === 500) {
            // backend error
            setEmailResp({
              fail: true,
              values: "",
              error: "Data retrieving Error.",
              isLoading: false,
            });
          } else if (response.data.status.code === 419) {
            // too many requests
            setEmailResp({
              fail: true,
              values: response.data.data,
              error:
                "Too many requests! Your request didn't reach the server, please wait a few seconds, refresh and try again.",
              isLoading: false,
            });
          } else {
            // Unknown error
            setEmailResp({
              fail: true,
              values: "",
              error: "Unknown Error.",
              isLoading: false,
            });
          }
        })
        .catch(function (error) {
          // request failed or link not found
          setEmailResp({
            fail: true,
            values: "",
            error: "Connection to server error.",
            isLoading: false,
          });
        });
    });
  };

  return (
    <>
      <ModalStructure
        show={props.show}
        handleClose={() => {
          props.handleClose();
          setEmailResp({
            fail: false,
            values: "",
            error: "",
            isLoading: false,
          });
          setEmail("");
        }}
        handleShow={props.handleShow}
        title={emailResp.values ? "" : "Forgot your password"}
      >
        {emailResp.values ? (
          <Row>
            <Col xs={12}>
              <div className="clientModalCenteredRoleInfo">
                <img src={forgetPassIMG} className="clientModalCenteredImage" />
                <h1
                  className="SystemStartFormTitle"
                  style={{ marginTop: "24px" }}
                >
                  Please check your email to reset your password
                  <h6 className="haveAccountDevSign">
                    Didn’t receive an email ?{" "}
                    <a href={""} onClick={handleSubmit}>
                      Send again
                    </a>
                  </h6>
                </h1>
              </div>
            </Col>
          </Row>
        ) : (
          <>
            <Row>
              <Col xs={12}>
                <label className="LabelForInput">
                  Please enter your email to reset your password{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  className="inputField"
                  placeholder="Example@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </Col>
              {emailResp.fail && (
                <Col xs={12}>
                  {" "}
                  <div className="fileInfo">{emailResp.error}</div>
                </Col>
              )}
            </Row>
            <Row style={{ marginTop: "40px" }}>
              <Col xs={12} md={6}>
                {" "}
                <Filled40Button
                  isStateFull={true}
                  handleSubmit={() => {
                    props.handleClose();
                  }}
                  isLoading={false}
                  buttonContent={"Cancel"}
                  color={"grey"}
                  customClass={"mb-8-ON-767px"}
                />
              </Col>
              <Col xs={12} md={6}>
                {" "}
                <Filled40Button
                  isStateFull={isStateFull()}
                  handleSubmit={handleSubmit}
                  isLoading={emailResp.isLoading}
                  buttonContent={"Submit"}
                  color={"blue"}
                  customClass={"mb-8-ON-767px"}
                />
              </Col>
            </Row>
          </>
        )}
      </ModalStructure>
    </>
  );
}

export default ForgetPass;
