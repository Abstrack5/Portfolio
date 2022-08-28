import React from "react";
import Typewriter from "typewriter-effect";

import './typeWriter.css';

function TypewriterEffect() {

  var typewriter = new Typewriter(null, {
    loop: true,
  });

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', fontSize: '35px'}}
      className="typeWriter"
      >
      <Typewriter 
        onInit={(typewriter) => {
          typewriter.typeString('Hello, and welcome!')
          .pauseFor(1000)
          .deleteAll()
          typewriter.typeString("I'm a Front end")
          .pauseFor(750)
          .deleteChars(9)
          typewriter.typeString('Back end')
          .pauseFor(750)
          .deleteChars(8)
          typewriter.typeString('Full Stack Web Developer')
          .pauseFor(750)
          .start();
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
