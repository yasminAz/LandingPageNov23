import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Filled40Button from "../../../UIComponents/buttons/Filled40Button";
export const TalentLandingYourNextJobSection = (props) => {
  const history = useHistory();

  return (
    <>
      <section className="talentLandingWhyUseTFSection">
        <Container fluid className="GeneralContainer70">
          <div className="talentLandingLighterColorBox">
            <Row>
              <Col xs={12} style={{ textAlign: "center" }}>
                <h4 className="TalnetLandingYourNextJobH4">
                  Your next job could be the opportunity of a lifetime
                  <br /> We <span className="underline">help you find it!</span>
                </h4>
                <Filled40Button
                  isStateFull={true}
                  handleSubmit={() => history.push("/talent/signup")}
                  buttonContent={"Start free trial!"}
                  color={"orange"}
                  customClass={"w-176"}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TalentLandingYourNextJobSection;
