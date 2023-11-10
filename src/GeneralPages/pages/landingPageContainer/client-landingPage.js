import LandingPageStructure from "./LandingStructure";
import "./client-landingPage.css";
import FAQ from "./FAQ";
import SourceBetter from "./SourceBetter";
import TapflowVSCompetitors from "./TapflowVSCompetitors";
import HowDoesItWork from "./howDoesItWork";
import Introduction from "./Introduction";
import WithVsWithoutTF from "./WithVsWithoutTF";
import Features from "./Features";
import ImageAndList from "./ImageAndList";
const ClientLandingPage = (props) => {
  return (
    <>
      <LandingPageStructure>
        <Introduction special={props.special} />
        <ImageAndList />
        <WithVsWithoutTF />
        <HowDoesItWork />
        <TapflowVSCompetitors />
        <SourceBetter />
        <Features />
        <FAQ />
      </LandingPageStructure>
    </>
  );
};

export default ClientLandingPage;
