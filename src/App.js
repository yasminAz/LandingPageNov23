import { Route, Switch } from "react-router-dom";
import "./Assets/CSS/general.css";
import "./Assets/CSS/generalComponents.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error from "./GeneralPages/pages/error-page";
import CookieConsent from "react-cookie-consent";
import cookie from "./Assets/images/cookie.png";
import TermsAndConditions from "./GeneralPages/pages/TermsAndConditions";
import PrivacyPolicy from "./GeneralPages/pages/PrivacyPolicy";

import SignUpTalent from "./GeneralPages/pages/TalentStartPages/SignUpTalent";
import ClientLandingPage from "./GeneralPages/pages/landingPageContainer/client-landingPage";
import LoginClient from "./GeneralPages/pages/ClientStartPages/LoginClient";
import LoginTalent from "./GeneralPages/pages/TalentStartPages/LoginTalent";
import Page404WithHeaderAndFooter from "./GeneralPages/pages/404withHeaderAndFooter";
import TalentLandingPage from "./GeneralPages/pages/TalentLandingPageContainer/talent-landingPage";
import SignupClient from "./GeneralPages/pages/ClientStartPages/SignUpClient";
import RequestDemoClient from "./GeneralPages/pages/ClientStartPages/RequestDemoClient";

const App = () => {
  return (
    <>
      <Switch>
        {/* General Links */}
        <Route exact path="/">
          <ClientLandingPage />
        </Route>
        <Route exact path="/Talent">
          <TalentLandingPage />
        </Route>{" "}
        <Route exact path="/Error">
          <Error />
        </Route>
        <Route exact path="/termsAndConditions">
          <TermsAndConditions />
        </Route>
        <Route exact path="/privacyPolicy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/Client/Login">
          <LoginClient />
        </Route>
        <Route exact path="/Talent/Login">
          <LoginTalent />
        </Route>
        {/* Talent Links */}
        <Route exact path="/Talent/Signup">
          <SignUpTalent />
        </Route>
        <Route exact path="/Client/signup">
          <SignupClient />
        </Route>
        <Route exact path="/Client/bookDemo">
          <RequestDemoClient />
        </Route>
        <Route>
          <Page404WithHeaderAndFooter />
        </Route>
      </Switch>

      <CookieConsent>
        This site uses cookies. <img src={cookie} className="img-fluid" />{" "}
        <br />
        <p>
          Once you click "I Understand" you accept the{" "}
          <a href="/termsAndConditions" target="_blank">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="/privacyPolicy" target="_blank">
            privacy policy
          </a>
          .
        </p>
      </CookieConsent>
    </>
  );
};

export default App;
