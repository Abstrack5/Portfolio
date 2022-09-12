import React from "react";
import "./About.css";
import HeadshotPic from "../../images/headshot.jpg";


import FormContainer from "../../Components/FormContainer";


function About() {
  return (
    <div className="AboutMainContainer">
      <h1 className="AboutMeHeader text-center">About Me</h1>
      <FormContainer className="AboutMeContainer row">
        <div className="row">
          <div className="ImgContainer col-lg my-3">
            <img
              src={HeadshotPic}
              alt="headshot"
              className="ImgBox img-fluid"
            />
          </div>
          <div className="AboutMeBox col-lg ">
            <div className="AboutMeContentBox my-5">
              <p className="AboutMeContent pt-3">
                Hello! My name is Armon Ahmadi and I am excited you are here!
                So about me, i am half Iranian and half Guyanese. 
                I was born and raised in Miami my entire life, and I wouldnt have 
                it any other way!
                </p>
                <p> 
                I use to be a chef for 8 years in the fine dining industry, working 
                under constant high stress environments daily. I left the culinary industry to 
                chase after the medical field looking to become a firefighter. And whilst  doing
                so I stumbled upon freecodecamp.org, and gave it a shot. And I fell in love with
                coding ever since!
              </p>
            </div>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}

export default About;
