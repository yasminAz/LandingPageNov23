import { Container } from "react-bootstrap";
import HeaderNav from "../../../UIComponents/header-nav";
import MainFooter from "../../../UIComponents/main-footer";
import ClientMainFooter from "../../../UIComponents/client-footer";

export const LandingPageStructure = ({ noBTNS, children }) => {
  return (
    <>
      <HeaderNav noBTNS={noBTNS ? true : false} />
      {children}
      <ClientMainFooter />
    </>
  );
};

export default LandingPageStructure;
