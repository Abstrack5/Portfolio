import React from "react";
import Typewriter from "typewriter-effect";

function TypewriterEffect() {
  return (
    <div className="d-flex justify-content-center align-content-center">
      <Typewriter
        options={{
          strings: [
            "Welcome!",
            "I'm a Front end",
            "I'm a back end",
            "I'm a Full Stack developer",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default TypewriterEffect;
