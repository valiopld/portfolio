import React from "react";
import "../style/Works.css";

import Project from "./Project";

import txtEffIMG from "../style/images/txtEff.png";
import gamesIMG from "../style/images/game.png";
import eLampIMG from "../style/images/e-lamp.png";

export default function Works() {
  return (
    <div id="Works" className="Works">
      <div className="title">My Projects</div>
      <Project
        name="e-lamp commerce"
        img={eLampIMG}
        link="https://lamp-live.herokuapp.com/"
        linkGit="https://github.com/valiopld/lamp-shop"
        staticText="E-commerce React Application. Created during udemy react course."
        dynamicText={
          <div>
            <p>- React</p>
            <p>- redux, redux-saga, hooks</p>
            <p>- firebase, heroku, </p>
          </div>
        }
        reverse="yes"
      />
      <Project
        name="txtEff Library"
        img={txtEffIMG}
        link="https://valiopld.github.io/txtEff/"
        linkGit="https://github.com/valiopld/txtEff"
        staticText="txtEff Library v1.0 is a JS script that helps you by animating text
            directly in your HTML without the need to learn JavaScript. 
            The library includes 4 effects each with its additional attributes 
            for more fine-controlled animations."
        dynamicText={
          <div>
            <p>- Vanilla JavaScript</p>
            <p>- JS Objects and functions</p>
            <p>- works with DOM</p>
          </div>
        }
      />
      <Project
        name="JS Games"
        img={gamesIMG}
        link="https://valiopld.github.io/games/"
        linkGit="https://github.com/valiopld/games"
        staticText="There is four simple web games developed in Vanilla JavaScript and HTML/CSS.
         Not used any libraries and frameworks. 
         It's not recommended for use on mobile phones or tablets."
        dynamicText={
          <div>
            <p>- HTML/CSS, JavaScript</p>
            <p>- works with CANVAS</p>
            <p>- JS Objects and functions</p>
            <p>- works with DOM</p>
          </div>
        }
        reverse="yes"
      />
    </div>
  );
}
