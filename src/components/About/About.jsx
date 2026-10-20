import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className=" about_img " />
        <img
          src={play_icon}
          alt=""
          className=" play_icon  "
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          compressive Education programs. Our cutting -edge curriculum is
          designed to empower students with the knowledge, Skills and
          experiences needed to exel in the dynamic field of education.
        </p>
        <p>
          With a focus innovation, hands - on learning, and parasonalized
          mentorship. our programs prepare Aspiring educators to make a
          meaningful impact in classrooms, schools and communities.
        </p>
        <p>
          weather you Aspire to become a teacher, administrator, Councillor or a
          educational leader , our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your phone potential in
          shaping the future of education
        </p>
      </div>
    </div>
  );
};

export default About;
