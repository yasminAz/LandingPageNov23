import "./contact-us-modal.css";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import contactIMG from "../../Assets/images/contactus_img.png";
import ModalStructure from "../../UIComponents/modalStructure";
import ReactTextareaAutosize from "react-textarea-autosize";
import Filled40Button from "../buttons/Filled40Button";
function ContactUsModal() {
  const [contactResp, setContactResp] = useState({
    fail: false,
    values: "",
    error: "",
    isLoading: false,
  });
  // FOR CONTACT US MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    message: "",
  });
  const isStateFull = (e) => {
    if (state.first_name && state.last_name && state.email && state.message) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    setContactResp({
      fail: false,
      values: "",
      error: "",
      isLoading: true,
    });
  };

  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <a onClick={handleShow}>Contact us</a>
      <ModalStructure
        show={show}
        handleClose={() => {
          handleClose();
          setContactResp({
            fail: false,
            values: "",
            error: "",
            isLoading: false,
          });
          setState({
            first_name: "",
            last_name: "",
            company_name: "",
            email: "",
            message: "",
          });
        }}
        handleShow={handleShow}
      >
        <Row>
          <Col xs={12}>
            <div
              className="clientModalCenteredRoleInfo"
              style={{ textAlign: "center" }}
            >
              <img src={contactIMG} className="clientModalCenteredImage" />
              <h1
                className="SystemStartFormTitle"
                style={{ marginTop: "24px", display: "block" }}
              >
                We would like to hear from you, <br />
                Get in touch!
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <label className="LabelForInput">
              Name <span style={{ color: "#EF1E1E" }}>*</span>
            </label>
          </Col>
          <Col xs={12} sm={6}>
            <input
              onChange={handleChange}
              type="text"
              name="first_name"
              className="inputField"
              placeholder="First name"
            />
          </Col>
          <Col xs={12} sm={6}>
            <input
              onChange={handleChange}
              type="text"
              name="last_name"
              className="inputField"
              placeholder="Last name"
            />
          </Col>
          <Col xs={12}>
            <label className="LabelForInput">
              Email address <span style={{ color: "#EF1E1E" }}>*</span>
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="inputField"
              placeholder="Example@example.com"
            />
          </Col>
          <Col xs={12}>
            <label className="LabelForInput">Company</label>
            <input
              onChange={handleChange}
              type="text"
              name="company_name"
              className="inputField"
              placeholder="Company name"
            />
          </Col>
          <Col xs={12}>
            <label className="LabelForInput">
              Message <span style={{ color: "#EF1E1E" }}>*</span>
            </label>
            <ReactTextareaAutosize
              className="inputField textArea"
              name="message"
              onChange={handleChange}
              placeholder="Write your message"
              maxLength={999}
            />
          </Col>

          {contactResp.fail && (
            <Col xs={12}>
              {" "}
              <div className="fileInfo">{contactResp.error}</div>
            </Col>
          )}
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Col xs={12} md={{ span: 4, offset: 8 }}>
            <Filled40Button
              isStateFull={isStateFull()}
              handleSubmit={handleSubmit}
              isLoading={contactResp.isLoading}
              buttonContent={"Submit"}
              color={"blue"}
              customClass={"mb-8-ON-767px"}
            />
          </Col>
        </Row>
      </ModalStructure>
    </>
  );
}

export default ContactUsModal;
