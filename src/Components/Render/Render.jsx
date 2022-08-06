import React from "react";
import HjelmRender from "../../IMG/Hjelm-siden.png";
import "./render.css";

const Render = () => {
  return (
    <div className="Render">
      <img
        src={HjelmRender}
        alt="Render af Cykelhjelm"
        className="Render_IMG"
      />
    </div>
  );
};

export default Render;
