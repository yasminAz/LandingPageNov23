import {
  Container,
  Row,
  Col,
  Spinner,
  Tooltip,
  OverlayTrigger,
  Toast,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../../../Assets/CSS/generateJD.css";
import { useState, useContext } from "react";
import LandingPageStructure from "./LandingStructure";
import blueI from "../../../Assets/images/InfoICONBlue.svg";
import ReactTextareaAutosize from "react-textarea-autosize";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { ApiContext } from "../../../context/ApiContext";
import { AllContext } from "../../../context/AllContext";
import { components } from "react-select";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DotsIcon from "../../../Assets/images/3DotsIcon.svg";
import redX from "../../../Assets/images/redX.svg";
import close from "../../../Assets/images/Close.svg";
import Filled40Button from "../../../UIComponents/buttons/Filled40Button";
import axios from "axios";
export const GenerateJobDescription = (props) => {
  const { allSkills, seniorityRange } = useContext(ApiContext);
  const { dropdownStyle } = useContext(AllContext);
  const history = useHistory();
  const [error0, setError] = useState(false);
  const [state, setState] = useState({
    roleTitle: "",
    years_of_experience: "",
    recruitment_prompt: "",
    about_company: "",
    email: "",
  });
  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const [items, setItems] = useState([]);
  const handleReactSelectData = (e, name) => {
    if (name === "skills") {
      let tempArray = [...items];
      tempArray.push({ id: e.value, name: e.label });
      setItems(tempArray);
      setState((prevState) => {
        return { ...prevState, [name]: "" };
      });
    } else {
      setState((prevState) => {
        return { ...prevState, [name]: e };
      });
    }
  };
  const [showHardSkillsOptions, setShowHardSkillsOptions] = useState(false);
  const showHideOptions4Skills = (e, skillType) => {
    if (e.length > 2) {
      if (skillType == "softSkills") {
      } else {
        setShowHardSkillsOptions(true);
      }
    } else {
      setShowHardSkillsOptions(false);
    }
  };
  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className="custom-css-class">Type 3 letters to search</span>
      </components.NoOptionsMessage>
    );
  };
  const handleDeleteSkill = (index) => {
    let tempArr = [...items];

    tempArr.splice(index, 1);
    setItems(tempArr);
  };
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items2 = Array.from(items);
    const [reorderedItem] = items2.splice(result.source.index, 1);
    items2.splice(result.destination.index, 0, reorderedItem);

    setItems(items2);
  };
  const isStateFull = (e) => {
    if (
      state.roleTitle &&
      items.length > 0 &&
      state.years_of_experience >= 0 &&
      state.recruitment_prompt &&
      state.about_company &&
      state.email
    ) {
      return true;
    } else {
      return false;
    }
  };
  const [isLoading, setLoading] = useState(false);
  const handleSubmitFormAndContinue = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", state.roleTitle);
    formData.append("email", state.email);
    formData.append(
      "years_of_experience",
      state.years_of_experience ? state.years_of_experience : 0
    );
    formData.append("hard_skills", JSON.stringify(items));
    formData.append("prompt", state.recruitment_prompt);
    formData.append("about_company", state.about_company);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post("/api2/createJobDescription", formData)
        .then((response) => {
          if (response.data.code === 200) {
            setError(false);
            setLoading(false);
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 5000);
          } else if (response.data.code === 101) {
            // return error with message
            setLoading(false);
            setError(
              "Validation Error, one or more fields are missing, empty or in the wrong format."
            );
            if (response.data.body) {
              if (response.data.body.plan) {
                setError(response.data.body.plan);
              }
            }

            // add code for plan manipulation
          } else if (response.data.code === 500) {
            // backend error
            setLoading(false);
            setError("Data handling Error.");
          } else if (response.data.code === 422) {
            // prerequisite error
            setLoading(false);
            setError(
              "Journey Error. There are some prerequisite to this action missing. logout and try again"
            );
          } else if (response.data.code === 401) {
            // unauthenticated
            setLoading(false);
            setError("Unauthenticated Action. Your session has timed out.");
          } else if (response.data.code === 419) {
            // too many requests
            setLoading(false);
            setError(
              "Too many requests! Your request didn't reach the server, please wait a few seconds, refresh and try again."
            );
          } else if (response.data.code === 404) {
            // Page/Request link not found
            setLoading(false);
            setError(
              "Your request link doesn't exist. If this error appears contact us immediately."
            );
          } else {
            // Unknown error
            setLoading(false);
            setError(
              "Unknown Error. Please contact us and inform us of the time the error had happened."
            );
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(
            "Connection to server error. Please wait a few seconds, refresh and try again."
          );
        });
    });
  };
  const [showToast, setShowToast] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const hideTheGreyBanner = () => {
    setShowBanner(false);
  };
  return (
    <>
      <LandingPageStructure>
        <div className="generateJDSection">
          {showBanner && (
            <div className="generateJDDroppedInfoGreyBox">
              <p>
                Try out the best <a href="/">AI headhunting</a> automation tool
              </p>
              <img
                src={close}
                className="XButton"
                onClick={hideTheGreyBanner}
              />
            </div>
          )}

          <Container fluid className="GeneralContainer70 ">
            <Row className="generateJDRow">
              <Col xs={12} lg={6}>
                <h1 className="GenerateJDTitle">
                  Generate <strong>A+</strong> job descriptions with{" "}
                  <strong>AI</strong>
                </h1>
                <p className="generateJDText">
                  Fill in some inputs, and generate a Job Description that
                  attracts and converts talent, within seconds!
                </p>
                <ol className="generateJDList">
                  <li>
                    <span>1</span>Tell us what are you looking for
                  </li>
                  <li>
                    <span>2</span>Write your prompt
                  </li>
                  <li>
                    <span>3</span>Generate your job description
                  </li>
                </ol>
              </Col>
              <Col xs={12} lg={6}>
                <div className="formGlobeBG">
                  <div className="whiteFormBox">
                    <Row>
                      <Col xs={12} xl={6}>
                        <label className="LabelForInput">
                          Role title <span style={{ color: "#EF1E1E" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="roleTitle"
                          className={
                            state.roleTitle.length > 80
                              ? "inputField error"
                              : "inputField"
                          }
                          placeholder="Maximum 80 characters"
                          onChange={handleChange}
                          value={state.roleTitle}
                        />
                        {state.roleTitle.length > 80 && (
                          <p className="RedErrorMessage indent20">
                            Role title shouldn't be larger than 80 characters.
                          </p>
                        )}
                      </Col>

                      <Col xs={12} xl={6}>
                        <label className="LabelForInput">
                          Relevant years of experience
                          <span style={{ color: "#EF1E1E" }}>*</span>
                        </label>
                        <input
                          type="number"
                          name="years_of_experience"
                          className={
                            state.years_of_experience < 0
                              ? "inputField error"
                              : "inputField"
                          }
                          placeholder="Write a number"
                          onChange={handleChange}
                          value={state.years_of_experience}
                          min="0"
                        />
                        {state.years_of_experience >= 0 ? (
                          <></>
                        ) : (
                          <p className="RedErrorMessage indent20">
                            Years of experience should be larger than 0.
                          </p>
                        )}
                      </Col>
                      <Col xs={12}>
                        <label className="LabelForInput mb-4">
                          What does your company do
                          <span style={{ color: "#EF1E1E" }}>*</span>
                        </label>
                      </Col>
                      <Col xs={12}>
                        <ReactTextareaAutosize
                          className="inputField textArea"
                          name="about_company"
                          onChange={handleChange}
                          value={state.about_company}
                          placeholder={"Write about your company "}
                        />
                      </Col>
                      <Col xs={12}>
                        <label className="LabelForInput">
                          Hard skills, technologies, and tools. Order according
                          to priority
                          <span style={{ color: "#EF1E1E" }}> *</span>
                        </label>
                      </Col>
                      <Col xs={12}>
                        <CreatableSelect
                          // options={allSkills}
                          onChange={(e) => handleReactSelectData(e, "skills")}
                          className="inputField-ReactSelect mb-8"
                          value={state.skills}
                          placeholder="E.g Microsoft Office."
                          styles={dropdownStyle}
                          options={showHardSkillsOptions ? allSkills : []}
                          onInputChange={(e) =>
                            showHideOptions4Skills(e, "hardSkills")
                          }
                          // noOptionsMessage={"Start typing to view options."}
                          components={{ NoOptionsMessage }}
                          // styles={{ noOptionsMessage: base => ({ ...base, ...msgStyles }) }}
                        />
                      </Col>
                      <Col xs={12}>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                          <Droppable
                            droppableId="droppable"
                            direction="horizontal"
                          >
                            {(provided) => (
                              <div
                                className="dragAndPrioritizeDiv droppable"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                                {items.length > 0 &&
                                  items.map((item, index) => (
                                    <Draggable
                                      draggableId={item.name}
                                      key={item.name}
                                      index={index}
                                    >
                                      {(provided) => (
                                        <div
                                          className="bluePriorityBox"
                                          {...provided.draggableProps}
                                          ref={provided.innerRef}
                                          {...provided.dragHandleProps}
                                        >
                                          <img
                                            src={DotsIcon}
                                            className="dragIcon"
                                          />
                                          <div className="whiteCircle">
                                            {index + 1}
                                          </div>
                                          <p>{item.name}</p>
                                          <img
                                            src={redX}
                                            className="deleteIcon"
                                            onClick={() =>
                                              handleDeleteSkill(index)
                                            }
                                          />
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </DragDropContext>
                      </Col>
                      <Col xs={12}>
                        <label className="LabelForInput mb-4">
                          Recruitment prompt{" "}
                          <span style={{ color: "#EF1E1E" }}>*</span>{" "}
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="my-tooltip-id">
                                This is like ChatGPT's prompt. Give us a precise
                                description of what you're looking for. This
                                will help tweak our algorithms to do better
                                sourcing.
                              </Tooltip>
                            }
                          >
                            <img src={blueI} className="infoSVGBesideText" />
                          </OverlayTrigger>
                        </label>
                      </Col>
                      <Col xs={12}>
                        <ReactTextareaAutosize
                          className="inputField textArea"
                          name="recruitment_prompt"
                          onChange={handleChange}
                          value={state.recruitment_prompt}
                          placeholder={
                            "I am looking for someone that can lead a team and is skilled in cloud computing. Previous experience in tech companies is a plus. Please don’t source candidates with no educational degree in computer science."
                          }
                        />
                      </Col>
                      <Col xs={12}>
                        <label className="LabelForInput mb-4">
                          Your email address
                          <span style={{ color: "#EF1E1E" }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="inputField"
                          placeholder="Example@example.com"
                          onChange={handleChange}
                          value={state.email}
                        />
                      </Col>
                      <Col xs={12}>
                        {error0 && (
                          <p className="RedErrorMessage indent20">{error0}</p>
                        )}
                        <Filled40Button
                          isStateFull={isStateFull()}
                          handleSubmit={handleSubmitFormAndContinue}
                          isLoading={isLoading}
                          buttonContent={
                            <div className="buttonWithIconGenerate">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.5 2C3.12743 2 2 3.12743 2 4.5V11.5C2 12.8726 3.12743 14 4.5 14H11.5C12.8726 14 14 12.8726 14 11.5V4.5C14 3.12743 12.8726 2 11.5 2H4.5ZM4.5 3.33333H11.5C12.1501 3.33333 12.6667 3.84991 12.6667 4.5V11.5C12.6667 12.1501 12.1501 12.6667 11.5 12.6667H4.5C3.84991 12.6667 3.33333 12.1501 3.33333 11.5V4.5C3.33333 3.84991 3.84991 3.33333 4.5 3.33333ZM5.33333 4.41276C5.2585 4.41276 5.18328 4.45567 5.15495 4.54167C5.02495 4.93767 4.71434 5.2476 4.31901 5.3776C4.14701 5.43427 4.14701 5.67641 4.31901 5.73307C4.71434 5.86374 5.02495 6.17431 5.15495 6.57031C5.21161 6.74231 5.45505 6.74231 5.51172 6.57031C5.64172 6.17431 5.95232 5.86374 6.34766 5.73307C6.51966 5.67641 6.51966 5.43427 6.34766 5.3776C5.95232 5.2476 5.64172 4.93767 5.51172 4.54167C5.48339 4.45567 5.40817 4.41276 5.33333 4.41276ZM9.33333 4.93359C9.2445 4.93359 9.15573 4.98394 9.1224 5.08594L8.8099 6.03906C8.65523 6.5084 8.28704 6.87658 7.81771 7.03125L6.86458 7.34505C6.66058 7.41172 6.66058 7.70026 6.86458 7.76693L7.81771 8.07943C8.28704 8.23409 8.65523 8.60228 8.8099 9.07161L9.1237 10.0247C9.19103 10.2287 9.47891 10.2287 9.54557 10.0247L9.85807 9.07161C10.0121 8.60228 10.3809 8.23409 10.8503 8.07943L11.8034 7.76693C12.0074 7.70026 12.0074 7.41172 11.8034 7.34505L10.8503 7.03125C10.3809 6.87725 10.0127 6.5084 9.85807 6.03906L9.54427 5.08594C9.51094 4.98394 9.42217 4.93359 9.33333 4.93359ZM6.22266 8.93359C6.13382 8.93359 6.04505 8.98394 6.01172 9.08594L5.97266 9.20313C5.81799 9.67246 5.4498 10.0406 4.98047 10.1953L4.86458 10.2331C4.66058 10.2997 4.66058 10.5883 4.86458 10.6549L4.98047 10.694C5.4498 10.8487 5.81799 11.2169 5.97266 11.6862L6.01172 11.8021C6.07905 12.0061 6.36693 12.0061 6.43359 11.8021L6.47135 11.6862C6.62602 11.2169 6.99421 10.8487 7.46354 10.694L7.58073 10.6549C7.78473 10.5883 7.78473 10.2997 7.58073 10.2331L7.46354 10.1953C6.99421 10.0406 6.62602 9.67246 6.47135 9.20313L6.43359 9.08594C6.40026 8.98394 6.31149 8.93359 6.22266 8.93359Z"
                                  fill="white"
                                />
                              </svg>
                              <span>Generate with AI and send to my email</span>
                            </div>
                          }
                          color={"blue"}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                className="GenerateJDToastie"
              >
                <Toast.Body>
                  <div className="toastieBody">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_15900_3645)">
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                          fill="#1FA3FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15900_3645">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>
                      Job description sent to{" "}
                      <strong className="me-auto">{state.email} </strong>
                    </p>
                  </div>
                </Toast.Body>
              </Toast>
            </Row>
          </Container>
        </div>
      </LandingPageStructure>
    </>
  );
};

export default GenerateJobDescription;
