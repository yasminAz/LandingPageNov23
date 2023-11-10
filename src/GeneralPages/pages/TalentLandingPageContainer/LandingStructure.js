import MainFooter from "../../../UIComponents/main-footer";
import TalentHeaderNav from "./header-nav";
import "../../../Assets/CSS/Talent/talentLanding.css";

export const TalentLandingPageStructure = ({ children }) => {
  return (
    <>
      <TalentHeaderNav />
      {children}
      <MainFooter talent={true} />
    </>
  );
};

export default TalentLandingPageStructure;
