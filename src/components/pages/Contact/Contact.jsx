import React from "react";
import Contactnavbar from "./ContactComponents/Contactnavbar.jsx";
import Contactmain from "./ContactComponents/Contactmain.jsx";
import "./Contact.css";
import Footer from "../Footer.jsx";
import ContactPerson from "./ContactComponents/contactPerson.jsx";
import CEO from "./contactImg/CEO.png";
import designer from "./contactImg/designer.png";
import director from "./contactImg/director.png";
import filmMaker from "./contactImg/filmMaker.png";

const Contact = () => {
  return (
    <div className="contact--container">
      <Contactnavbar />

      <div className="contact-person-container">
        <ContactPerson
          img={CEO}
          name="Ian Olmstead"
          phone="(319) 464-0639"
          email="ian.d.olmstead@gmail.com"
        />
        <ContactPerson
          img={designer}
          name="Benjamin Burnham"
          phone="(319) 325-1301"
          email="benji0nics@gmail.com"
        />
        <ContactPerson
          img={director}
          name="Michael Van"
          phone="(321) 203-8325"
          email="michaelvanmail@gmail.com"
        />
        <ContactPerson
          img={filmMaker}
          name="Colin Sampey"
          phone="(630) 303-1829"
          email="colinsampey@gmail.com"
        />
      </div>
      <Contactmain />
      <Footer />
    </div>
  );
};

export default Contact;
