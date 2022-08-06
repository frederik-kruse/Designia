import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../IMG/Designia-icon.png";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="PNF_siteColour">
      <div className="PNF_flex">
        <img className="PNF_img" src={Logo} alt="Desigina Logo" />
        <h1 className="PageNotFoundHeading">
          Siden blev ikke fundet, fejlkode: 404
        </h1>
        <NavLink to="/">
          <p className="PNF_link">Vil du tilbage til forsiden?</p>
        </NavLink>
      </div>
      <div className="Footer_position_PNF"></div>
    </div>
  );
};

export default PageNotFound;
