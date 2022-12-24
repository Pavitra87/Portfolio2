import React from "react";
import { Link } from "react-router-dom";
import "./Aboutcontent.css";
import React1 from "../images/react1.jpg";
import React2 from "../images/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I am a react front-end-developer. i create responsive secure website
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} alt="true" className="img" />
          </div>

          <div className="img-stack bottom">
            <img src={React2} alt="true" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
