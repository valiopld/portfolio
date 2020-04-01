import React from "react";
import "../style/Main.css";
import "../style/Works.css";

export default function Project(props) {
  let style;
  props.reverse !== "yes"
    ? (style = "projectContainer")
    : (style = "projectContainer projectContainer2");
  return (
    <div className="Project">
      <div className={style}>
        <img
          alt="none"
          src={props.img}
          onClick={() => window.open(props.link, "_blanc")}
          className="image"
        />

        <div className="projectInfo">
          <div className="projectName">
            <a target="_blanc" href={props.link}>
              {props.name}
            </a>
          </div>
          <div className="static">{props.staticText}</div>
          <div className="dynamic">{props.dynamicText}</div>
          <div className="iconsContainer">
            <a target="_blanc" href={props.linkGit}>
              <div className="icon gitIcon" />
            </a>
            <a target="_blanc" href={props.link}>
              <div className="icon webIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
