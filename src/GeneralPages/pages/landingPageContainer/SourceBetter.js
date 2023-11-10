import { Col, Container, Row } from "react-bootstrap";
import "../../../Assets/CSS/LandingPage/sourceBetter.css";
import yellowProfile from "../../../Assets/images/yellowProfile.svg";
import blueMagic from "../../../Assets/images/blueMagic.svg";
import flashAndCurser from "../../../Assets/images/flashAndCurser.svg";
import curser from "../../../Assets/images/blackCursor.svg";
import greenBag from "../../../Assets/images/greenBag.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Filled56Button from "../../../UIComponents/buttons/Filled56Button";
const SourceBetter = () => {
  const history = useHistory();
  return (
    <div className="sourceBetter-div">
      <Container fluid className="GeneralContainer70">
        <Row>
          <Col xs={12}>
            <img src={blueMagic} className="decorativeIcons blueMagic" />

            <img src={greenBag} className="decorativeIcons greenBag" />
            <div className="sourceBetterDiv4Flex">
              <img src={yellowProfile} className="profile" />
              <p className="sourceBetter-title">
                Utilize <strong>technology</strong> and become the{" "}
                <strong>hero</strong> recruiter!
              </p>
              <img src={flashAndCurser} className="flashAndCurser" />
            </div>
            <Filled56Button
              isStateFull={true}
              handleSubmit={() => history.push("/Client/signup")}
              isLoading={false}
              buttonContent={"Find talent now!"}
              color={"yellow"}
              id={"start-now"}
              decorative={curser}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SourceBetter;
