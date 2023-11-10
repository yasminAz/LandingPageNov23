import React from "react";
import "../../../Assets/CSS/LandingPage/ImageAndList.css";
import { Col, Container, Row } from "react-bootstrap";
import ListStarIcon from "../../../Assets/images/ListStarIcon.svg";
import Filled56Button from "../../../UIComponents/buttons/Filled56Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const ImageAndList = () => {
  const history = useHistory();
  return (
    <div className="imageAndListLargeContainer">
      <Container fluid className="GeneralContainer70">
        <Row>
          <Col xs={12} xl={10}>
            <h2 className="imageAndListTitleBlack">
              A whole new way to <strong>source</strong> talent!
            </h2>
          </Col>
          <Col xs={12} xl={9}>
            <ul className="imageAndList-List">
              <li>
                <img src={ListStarIcon} />
                <div>
                  <strong>Great results</strong> with the help of AI
                </div>
              </li>{" "}
              <li>
                <img src={ListStarIcon} />
                <div>
                  Build amazing pipelines within <strong>minutes</strong>
                </div>
              </li>
              <li>
                <img src={ListStarIcon} />
                <div>
                  Utilize multiple <strong>sourcing strategies</strong>
                </div>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4}>
            <Filled56Button
              isStateFull={true}
              handleSubmit={() => {
                history.push("/Client/signup");
              }}
              isLoading={false}
              id={"start-now"}
              buttonContent={"Find talent now!"}
              color={"yellow"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageAndList;
