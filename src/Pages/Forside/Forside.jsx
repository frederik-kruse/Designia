import React from "react";
import Animation from "../../Components/Animation/Animation";
import Render from "../../Components/Render/Render";
import Tekst from "../../Components/Tekst/Tekst";
import "./forside.css";

function Forside() {
  return (
    <div className="Forside">
      <Animation />
      <div className="Render_tekst_flex">
        <Render />
        <Tekst />
      </div>
    </div>
  );
}

export default Forside;
