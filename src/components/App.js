import React /* useState */ from "react";
import "../style/App.css";

import Header from "./Header";
import SideLinks from "./SideLinks";
import SideName from "./SideName";
import Main from "./Main";
import Footer from "./Footer";

import "../style/responsive.css";

export default function App() {
  /*
  const [getCursorX, setCursorX] = useState("0");
  const [getCursorY, setCursorY] = useState("0");

  window.addEventListener("mousemove", e => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });
  */

  return (
    <div className="App">
      {/*<div
        style={{ left: getCursorX - 15, top: getCursorY - 15 }}
        className="cursor"
      ></div>*/}
      <Header />
      <SideLinks />
      <SideName />
      <Main />
      <Footer />
    </div>
  );
}
