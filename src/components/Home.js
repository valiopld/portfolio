import React from "react";
import "../style/Home.css";

export default function Home() {
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
      <div className="button-container">
        <a href="mailto:dev.peshev@gmail.com" className="button">
          Get in Touch
        </a>
        <a
          href="http://valiopld.github.io/cv"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          CV
        </a>
      </div>
    </div>
  );
}
