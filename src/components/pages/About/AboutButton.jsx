import React from "react";
import { Link, NavLink } from "react-router-dom";

const AboutButton = () => {
  return (
    <div className="About--button">
      <Link to="/contact">
        <button className="contact--btn">Contact Us</button>
      </Link>
      <Link to="http://127.0.0.1:5173/">
        <button className="chat--btn">Chat With AI</button>
      </Link>
    </div>
  );
};

export default AboutButton;
