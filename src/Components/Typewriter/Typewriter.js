import React from "react";
import Typewriter from "typewriter-effect";

import './typeWriter.css';

function TypewriterEffect() {

  var typewriter = new Typewriter(null, {
    loop: true,
  });

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh', fontSize: '35px'}}
      className="typeWriter"
      >
      <Typewriter 
        onInit={(typewriter) => {
          typewriter.typeString('Hello, and welcome!')
          .pauseFor(800)
          typewriter.typeString("<br /> I'm Armon.")
          .pauseFor(1000)
          typewriter.typeString(" <br /> I'm a Front End")
          .pauseFor(900)
          .changeDeleteSpeed(120)
          .deleteChars(9)
          typewriter.typeString('Back End')
          .pauseFor(800)
          .changeDeleteSpeed(30)
          .deleteChars(8)
          typewriter.typeString('Full Stack Web Developer')
          .pauseFor(1500)
          .deleteAll(1)
          typewriter.typeString('Stay and learn about me!')
          .pauseFor(300)
          .deleteAll()
          .start(5);
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
        />
        
    </div>
  );
}

export default TypewriterEffect;
