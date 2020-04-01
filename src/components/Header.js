import React, { useState } from "react";
import "../style/Header.css";

export default function Header() {
  const changeListDisplay = () => {
    getListDisplay === "none" ? setListDisplay("flex") : setListDisplay("none");
  };
  const [getListDisplay, setListDisplay] = useState("none");

  let headerStyle = "non-scrolled";

  const scroll = () => {
    window.scrollY === 0
      ? setHeaderStyle("non-scrolled")
      : setHeaderStyle("scrolled");
  };
  window.addEventListener("scroll", scroll);

  const [getHeaderStyle, setHeaderStyle] = useState(headerStyle);

  return (
    <div className={"Header " + getHeaderStyle}>
      <div className={"logo " + getHeaderStyle + "Logo"}></div>

      <div className="menu">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Works">Works</a>
          </li>
          <li>
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
      </div>

      <div className="resMenu">
        <div
          onClick={() => {
            changeListDisplay();
          }}
          className="resButton"
        >
          ≡
        </div>
        <ul style={{ display: getListDisplay }}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Works">Works</a>
          </li>
          <li>
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
