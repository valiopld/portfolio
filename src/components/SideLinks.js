import React from "react";
import "../style/SideLinks.css";

export default function SideLinks() {
  return (
    <div className="SideLinks">
      <a target="_blanc" href="https://www.linkedin.com/in/vpeshev">
        <div className="el linkedIn" />
      </a>
      <a target="_blanc" href="https://github.com/valiopld">
        <div className="el github" />
      </a>
      <a href="mailto:dev.peshev@gmail.com">
        <div className="el mail" />
      </a>
      <a target="_blanc" href="https://www.facebook.com/johnnypeshev">
        <div className="el facebook" />
      </a>
      <div className="line" />
    </div>
  );
}
