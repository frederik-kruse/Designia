import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import Form from "../Form/Form";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="Footer_info">
          <h2 className="Footer_heading">Kontakt os</h2>
          <aside className="Footer_underHeading">
            Kontakt os og bliv tilmeldt vores nyhedsbrev om nye produkter.
            <div className="Footer_iconFlex">
              <ImLocation2 className="Icon" />
              <p className="Footer_KontaktInfo">
                Adresse <br />
                Ydesvej 5, 8500 Grenaa
              </p>
            </div>
            <div className="Footer_iconFlex">
              <BsFillTelephoneFill className="Icon" />
              <p className="Footer_KontaktInfo">
                Ring til os <br />
                Tlf. 85 85 85 85
              </p>
            </div>
            <div className="Footer_iconFlex">
              <GoMail className="Icon" />
              <p className="Footer_KontaktInfo">
                Send en email <br />
                info@Designia.com
              </p>
            </div>
          </aside>
        </div>

        <div className="Footer_kontaktFormular">
          <p>Send os en besked</p>
          <Form/>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
