import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
    const downloadcv=()=>{
        <link to="file:///C:/Users/tezzh/Downloads/Ezhilarasi_Thirunavukkarasu-converted.pdf"></link>
    }
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Ezhilarasi T</span>
        </h4>
        <p className="about-text">
          I am MERN stack developer with 3 Years of experience. Have an very
          good skill set with react JS. Worked with more than 7 MERN stack
          projects as programmer Analyst with developing an optimised
          Application for our client .
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Educational Qualification</p>
            <p>Experience 1</p>
            <p>Experience 2</p>
            <p>Adjacent Skills</p>
          </div>
          <div className="right-section">
            <p>:Ezhilarasi T</p>
            <p>:B.E - ECE</p>
            <p>: Sutherland Global Services -(Sep 17 - Jan 17)</p>
            <p>: Cognizant Technology solutions, Chennai -(Feb 17-May 20)</p>
            <p>: RPA - Blueprism</p>
          </div>
        </div>
        <button className="btn">Download Cv</button>

      </div>
    </div>
  );
}

export default ImageSection;
