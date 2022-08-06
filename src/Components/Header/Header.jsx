import React from "react";
import DesiginaLogo from "../../IMG/Logo-PNG2.png";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <header>
        <img
          className="HeaderLogo"
          src={DesiginaLogo}
          alt="Logo for Desigina"
        />

        <div className="Header_Menu">
          <NavLink className="MenuLinks" to="/">
            Forside
          </NavLink>
          <NavLink className="MenuLinks" to="/">
            Produkter
          </NavLink>
          <NavLink className="MenuLinks" to="/">
            Kontakt
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
