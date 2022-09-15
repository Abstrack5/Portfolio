import React from "react";
import "./About.css";
import Technologies from "../../utils/technologies";
import { IconContext } from "react-icons";
import HeadshotPic from "../../images/headshot.jpg";

import FormContainer from "../../Components/FormContainer";

function About() {
  // const TechDataMap = Technologies.map((tech) => ({ icon: tech.iconImg }));

  return (
    <div className="AboutMainContainer col-sm col-md col-lg">
      <h1 className="AboutMeHeader text-center"> &lt;About Me /&gt; </h1>
      <FormContainer className="AboutMeContainer row">
        <div className="row col-lg">
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
                Hello! My name is Armon Ahmadi and I am excited you are here! So
                about me, I am half Iranian and half Guyanese. I was born and
                raised in Miami my entire life, and I wouldnt have it any other
                way!
              </p>
              <p>
                I use to be a chef for 8 years in the fine dining industry,
                working under constant high stress environments daily. I left
                the culinary industry to chase after the medical field looking
                to become a firefighter. And whilst doing so I stumbled upon
                freecodecamp.org, and gave it a shot. And I fell in love with
                coding ever since!
              </p>
              <p>
                Now I am a Full Stack Web Developer studying, practicing and
                working on getting better every day.
              </p>
            </div>
          </div>
        </div>
      </FormContainer>

      <FormContainer className="TechDivContainer">
        <h2>Some technologies I have experience with</h2>
        <div className="TechMainContainer col-md col-lg pt-3">
          {Technologies.map((elem, index) => {
            return (
              <div key={index} className=' col-sm col-md col-lg col-xl'>
                <IconContext.Provider value={{ size: "5rem", color: "white"}}>
                  <div >
                    <elem.iconImg className="TechCard col-sm col-md col-lg col-xl"/>
                  </div>
                </IconContext.Provider>
                <span style={{fontSize: "1rem", color: "white" }}>
                  {elem.name}
                </span>
              </div>
            );
          })}
        </div>
      </FormContainer>
    </div>
  );
}

export default About;
