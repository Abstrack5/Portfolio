import React from "react";
import "./About.css";
import HeadshotPic from "../../images/headshot.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div className="container">
      <h2 className="AboutMeHeader">About Me</h2>
      <div className="AboutMeContainer row">
        <div className="row">
          <div className="ImgContainer col-sm-auto col-md col-lg">
            <img
              src={HeadshotPic}
              alt="headshot"
              className="ImgBox img-fluid"
            />
          </div>
          <div className="AboutMeBox col-sm-auto col-md-auto col-lg">
            <div className="AboutMeContentBox">
              <p className="AboutMeContent pt-4">
                Hello! My name is Armon Ahmadi and I am excited you are here!
              </p>
              <p className="AboutMeContent">
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
              </p>
              <p className="AboutMeContent">
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
