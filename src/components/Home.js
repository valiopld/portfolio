import React, { useState, useEffect } from "react";
import "../style/Home.css";

export default function Home() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);
  return (
    <div id="Home" className="Home">
      <h4>Hi, my name is</h4>
      <h1>Valentin Peshev</h1>
      <h2>I am a freelance web developer</h2>
      <p>
        I'm a software engineer based in Plovdiv, Bulgaria. I am open to offers
        related to Web development (building websites, Front-end, Back-end),
        works with database, machine learning and еverything else that has to do
        with software engineering..
      </p>
      <a href="mailto:valiopld@gmail.com" className="button">
        Get in Touch
      </a>
    </div>
  );
}
