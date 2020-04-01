import React from "react";
import "../style/Contacts.css";

export default function Contacts() {
  return (
    <div id="Contacts" className="Contacts">
      <div className="title">Contacts</div>
      <div className="text">
        Have questions, suggestions, complaints, or anything else you want to
        share?
        <br /> I will be happy to engage in a conversation anytime.
      </div>
      <div className="linksContainer">
        <div className="social">
          <span>E-mail: </span>
          <span>FaceBook: </span>
          <span>LinkedIN: </span>
          <span>Twitter: </span>
        </div>
        <div className="links">
          <a href="mailto:valiopld@gmail.com">valiopld@gmail.com</a>
          <a
            href="https://facebook.com/johnnypeshev"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/johnnypeshev
          </a>
          <a
            href="https://www.linkedin.com/in/vpeshev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/vpeshev
          </a>
          <a
            href="https://twitter.com/valiopld"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter.com/valiopld
          </a>
        </div>
      </div>
      <a href="mailto:valiopld@gmail.com" className="button contactButton">
        Get in Touch
      </a>
    </div>
  );
}
