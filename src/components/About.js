import React from "react";
import "../style/About.css";

export default function About() {
  return (
    <div id="About" className="About">
      <div className="aboutContainer">
        <div className="imageContainer">
          <div className="profileIMG" />
          <div className="borderImage" />
        </div>
        <div className="infoContainer">
          <div className="info">
            <div className="title">About Me </div>
            <p>
              I'm interested in IT and everything in its orbit. I'm fascinated
              by web programming, e.g. application development, website
              development, machine learning and problem solving. For the past 5
              years I have been looking at programming as a hobby, among other
              things that I do.
            </p>
            <p>
              I am now excited to be in the phase of implementing my new career
              as a web developer. For this reason, I am looking for a company
              that wants to offer me a placement among its developers. In
              return, I would suggest my full commitment and be a nice and
              friendly addition to your team.
            </p>
          </div>
          <div className="skillContainer">
            <ul>
              <li>> HTML/CSS</li>
              <li>> JavaScript</li>
              <li>> ReactJS</li>
            </ul>
            <ul>
              <li>> NodeJS</li>
              <li>> WordPress</li>
              <li>> PHP/MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
