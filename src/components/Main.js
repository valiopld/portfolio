import React from "react";
import "../style/Main.css";

import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Contacts from "./Contacts";

export default function Main() {
  return (
    <div className="Main">
      <Home />
      <About />
      <Works />
      <Contacts />
    </div>
  );
}
