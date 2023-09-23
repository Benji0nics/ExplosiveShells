import React from "react";
import "./About.css";
import AboutPhoto from "./AboutPhoto.jsx";
import AboutName from "./AboutName.jsx";
import AboutButton from "./AboutButton.jsx";
import AboutText from "./AboutText.jsx";
import FunFacts from "./FunFacts.jsx";
import Footer from "../Footer.jsx";

const About = () => {
  return (
    <div className="about--container">
      <div className="about--top">
        <div className="aboutImgContainer">
          <img src="https://media.giphy.com/media/c3HczzhNAceOI/giphy.gif" alt="solar pannels"/>
        </div>
        <AboutName />
        <div className="button--container">
          <AboutButton />
        </div>
        <AboutText />
        <FunFacts />
        <Footer />
      </div>
    </div>
  );
};

export default About;
